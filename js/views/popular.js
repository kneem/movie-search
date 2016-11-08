var app = app || {};

(function() {

    /**
     * The `PopularView` is an extended {@link app.View.ListView}. It displays
     * up to 20 popular movies returned from the
     * {@link app.Collection.PopularMovieList collection}.
     *
     * @extends {app.View.ListView}
     */
    app.View.PopularView = app.View.ListView.extend({

        /**
         * Instantiates, and fetches the
         * {@link app.Collection.PopularMovieList collection}, and displays the
         * results.
         *
         * @param {Object} options Options hash.
         */
        initialize: function(options) {
            app.models.appModel.trigger('message:update', {name: 'loading.hbs'});

            this.collection = new app.Collection.PopularMovieList();
            this.collection.fetch({
                success: _.bind(function(collection) {
                    app.models.appModel.trigger('message:update', {
                        name: 'results-popular.hbs',
                        data: {
                            length: collection.length,
                        }
                    });
                    this.render();
                }, this)
            });
        }
    });

})();
