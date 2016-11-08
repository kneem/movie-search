var app = app || {};

(function() {

    /**
     * The `MovieList` is a collection representing the data returned from the
     * `/search/movie` endpoint. It will contain several
     * {@link app.Model.MovieModel movie models}, matching a given search query.
     *
     * @extends {app.Collection}
     */
    app.Collection.MovieList = app.Collection.extend({

        /**
         * Populates the collection with
         * {@link app.Model.MovieModel movie models}.
         *
         * @type {app.Model}
         */
        model: app.Model.MovieModel,


        /**
         * The request URL.
         *
         * @type {String}
         */
        url: app.api.getApiUrl('search/movie'),

        /**
         * [parse description]
         *
         * @param {Object} data The data object returned from the server.
         * @return {Array} An array of model attributes.
         */
        parse: function(data) {
            _.each(data.results, function(attrs) {
                var releaseDate = attrs.release_date;
                if (releaseDate) {
                    var date = new Date(releaseDate);
                    attrs.release_year = ' (' + date.getFullYear() + ')';
                }
            });
            return data.results;
        },
    });

})();
