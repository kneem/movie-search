var app = {};

(function() {

    /**
     * Error callback to trigger when there is an error while fetching data for
     * an `app.Model` or `app.Collection`instance. Updates the
     * `app.View.MessageBarView` with the error message.
     *
     * @param {Object} model The model.
     * @param {jQuery.Deferred} xhr The error response object.
     * @param {Object} options The options passed during the fetch.
     */
    var onFetchError = function(model, xhr, options) {
        app.models.appModel.trigger('message:update', {
            name: 'error.hbs',
            data: {
                xhr: xhr,
                msg: xhr.statusText
            },
        });
    };

    app = _.extend(app, {

        /**
         * The `app.View` class is the base class that all views in the
         * application should extend from, to share common functionality.
         *
         * @extends {Backbone.View}
         */
        View: Backbone.View.extend({

            /**
             * Where this view will be rendered.
             *
             * @type {String}
             */
            el: '.main',

            /**
             * Sets {@link #template the template} with the compiled template,
             * using data passed in `options`, or default data. If the template
             * is not found, an empty string will be set instead.
             *
             * @param {Object} options The data to pass to the template, before
             *   compilation.
             */
            setTemplate: function(options) {
                options = _.extend({
                    data: this,
                    name: this.templateName,
                }, options);

                var template = this.getTemplate(options.name);

                this.template = template ? template(options.data) : '';
            },

            /**
             * Finds the template in `Handlebars.templates` for the given
             * `name`.
             *
             * @param {String} name The template name.
             * @return {Function} The Handlebars template method.
             */
            getTemplate: function(name) {
                return Handlebars.templates[name];
            },

            /**
             * Method used to garbage-collect models and collections attached
             * to this view, and any persisting event listeners. Prevents
             * zombie views and memory leaks.
             *
             * @return {app.View} This instance.
             */
            remove: function() {
                this.off();

                if (this.collection) {
                    this.collection.off(null, null, this);
                }

                if (this.model) {
                    this.model.off(null, null, this);
                }

                this.stopListening();
                this.$el.empty();

                return this;
            },

            /**
             * Compiles the template with the given `templateOptions`, sets it
             * on {@link #template}, and renders {@link #$el} with it.
             *
             * @param {Object} templateOptions Data for the template.
             * @return {app.View} This instance.
             */
            render: function(templateOptions) {
                this.setTemplate(templateOptions);
                this.$el.html(this.template);

                return this;
            },
        }),

        /**
         * The `app.Model` class is the base class that all models in the
         * application should extend from, to share common functionality.
         *
         * @extends {Backbone.Model}
         */
        Model: Backbone.Model.extend({

            /**
             * Proxies the `fetch` method on the model to use the `onFetchError`
             * method if none is supplied in `options`.
             *
             * @param {Object} options The options passed to `fetch`.
             */
            fetch: function(options) {
                if (!options.error) {
                    options.error = onFetchError;
                }
                Backbone.Model.prototype.fetch.call(this, options);
            },
        }),

        /**
         * The `app.Collection` class is the base class that all collections in
         * the application should extend from, to share common functionality.
         *
         * @extends {Backbone.Collection}
         */
        Collection: Backbone.Collection.extend({

            /**
             * Proxies the `fetch` method on the collection to use the
             * `onFetchError` method if none is supplied in `options`.
             *
             * @param {Object} options The options passed to `fetch`.
             */
            fetch: function(options) {
                if (!options.error) {
                    options.error = onFetchError;
                }
                Backbone.Collection.prototype.fetch.call(this, options);
            },
        }),

        /**
         * Contains model instances.
         *
         * @type {Object}
         */
        models: {},
    });

    $(document).ready(function() {

        /**
         * Success callback to trigger after successfully fetching the
         * configuration data for the application. Starts the application.
         *
         * @param {Object} config The configuration data object.
         */
        var onConfigSuccess = function(config) {
            app.config.setConfigs(config);
            app.router = new app.Router();
            Backbone.history.start();
        };

        /**
         * Error callback to trigger when there is an error while fetching the
         * configuration data for the application. Updates the message bar
         * container with an error message.
         *
         * @param {jQuery.Deferred} xhr The error response object.
         * @param {String} type The type of error (e.g. 'error').
         * @param {String} msg The error message (e.g. 'Not Found').
         */
        var onConfigError = function(xhr, type, msg) {
            var template = Handlebars.templates['error.hbs'];
            var el = template({xhr: xhr, msg: msg});
            $('.message-bar').html(el);
        };

        app.api.get('configuration', onConfigSuccess, onConfigError);
    });

})();
