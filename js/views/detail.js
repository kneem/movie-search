var app = app || {};

(function() {

    /**
     * The `DetailView` is a view that displays information about a particular
     * movie, using the {@link app.Model.MovieModel movie model}.
     *
     * @extends {app.View}
     */
    app.View.DetailView = app.View.extend({

        /**
         * The base template to use.
         *
         * @type {String}
         */
        templateName: 'detail.hbs',

        /**
         * A list of child views created by {@link #this this view}.
         *
         * @type {Array}
         */
        subviews: [],


        /**
         * Instantiates, and fetches the
         * {@link app.Model.MovieModel movie model}, and displays the
         * results.
         *
         * @param {Object} options Options hash.
         */
        initialize: function(options) {
            // Show loading template.
            app.models.appModel.trigger('message:update', {name: 'loading.hbs'});

            this.model = new app.Model.MovieModel({id: options.id});
            this.model.fetch({
                success: _.bind(function(model) {
                    app.models.appModel.trigger('message:clear');

                    var templateData = this.getTemplateData();
                    this.render({data: _.extend({}, this, templateData)});

                    var creditsView = new app.View.CreditsView({
                        id: options.id,
                        success: _.bind(function() {
                            this.fadeInSubViews();
                        }, this)
                    });
                    this.subviews.push(creditsView);
                }, this)
            });
        },

        /**
         * Builds a data object to be passed to the template, which will be used
         * during template compilation/rendering.
         *
         * Obtains the year of the movie, the average vote and count of votes,
         * a nicely-formatted string representing the movie's runtime, and a
         * currency-formatted string for the movie's budget.
         */
        getTemplateData: function() {
            var data = {
                titleLabel: this.model.get('title'),
                voteLabel: 'N/A',
                runtime: 'N/A',
                budget: 'N/A',
            };

            var releaseDate = this.model.get('release_date');
            if (releaseDate) {
                var date = new Date(releaseDate);
                data.titleLabel += ' (' + date.getFullYear() + ')';
            }

            var count = this.model.get('vote_count');
            if (count > 0) {
                var avgVote = this.model.get('vote_average');
                data.voteLabel = avgVote.toFixed(1) + '/10';
                data.voteUsers = '(from ' + count.toLocaleString('en-US') + ' users)';
            }

            var runtime = this.model.get('runtime');
            if (runtime > 0) {
                var numHours = Math.floor(runtime / 60);
                var numMins = runtime % 60;
                var formattedRuntime = numHours + 'h ';
                data.runtime = numMins ? formattedRuntime + numMins + 'm' : formattedRuntime;
            }

            var budget = this.model.get('budget');
            if (budget > 0) {
                data.budget = '$' + this.model.get('budget').toLocaleString('en-US');
            }

            return data;
        },

        /**
         * Inspects the given `view` for the `[data-order]` attribute, orders
         * the matched elements, and fades (in) each element in order, 450ms
         * apart from each other.
         *
         * @param {app.View} view The view to inspect.
         */
        fadeInOrder: function(view) {
            var $els = view.$('[data-order]');

            $els = _.orderBy($els, function($el) {
                return $($el).data('order');
            });

            _.each($els, _.bind(function($el, key) {
                var $el = $($el);
                var order = $el.data('order');

                $el.delay(order * 450).fadeTo(1000, 1);
            }, this));
        },

        /**
         * Calls {@link #fadeInOrder} on each of the {@link #subviews}.
         */
        fadeInSubViews: function() {
            _.each(this.subviews, _.bind(function(view) {
                this.fadeInOrder(view);
            }, this));
        },

        /**
         * Renders this view, and fades in its elements by calling
         * {@link #fadeInOrder}.
         *
         * @param {Object} templateOptions Data passed to the template.
         * @return {app.View.DetailView} This instance.
         */
        render: function(templateOptions) {
            app.View.prototype.render.call(this, templateOptions);
            this.fadeInOrder(this);

            return this;
        },

        /**
         * Extends the {@link app.View#remove} method to clean up the subviews
         * that were created in this view.
         */
        remove: function() {
            _.each(this.subviews, function(view) {
                view.remove();
            });
            app.View.prototype.remove.call(this);
        },
    });

})();
