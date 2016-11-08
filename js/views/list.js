var app = app || {};

(function() {

    /**
     * The `ListView` is a view that displays up to 20 search results returned
     * from the {@link app.Collection.MovieList collection}, which match against
     * a given query from the user.
     *
     * @extends {app.View}
     */
    app.View.ListView = app.View.extend({

        /**
         * The base template to use.
         *
         * @type {String}
         */
        templateName: 'list.hbs',

        /**
         * Instantiates, and fetches the
         * {@link app.Collection.MovieList collection}, and displays the
         * results.
         *
         * @param {Object} options Options hash.
         */
        initialize: function(options) {
            // Update navbar if we're loading this view from the URL.
            app.models.appModel.trigger('navbar:update', options.query);

            // Show loading template.
            app.models.appModel.trigger('message:update', {name: 'loading.hbs'});

            this.query = options.query;
            this.collection = new app.Collection.MovieList();
            this.collection.fetch({
                data: {
                    query: this.query,
                },
                success: _.bind(function(collection) {
                    app.models.appModel.trigger('message:update', {
                        name: 'results-list.hbs',
                        data: {
                            length: collection.length,
                            query: this.query,
                        }
                    });
                    this.render();
                }, this)
            });
        },
    });

})();
