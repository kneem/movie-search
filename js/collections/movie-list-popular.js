var app = app || {};

(function() {

    /**
     * The `PopularMovieList` is a collection representing the data returned
     * from the `/movie/popular` endpoint. It will contain several
     * {@link app.Model.MovieModel movie models}.
     *
     * @extends {app.Collection.MovieList}
     */
    app.Collection.PopularMovieList = app.Collection.MovieList.extend({

        /**
         * The request URL.
         *
         * @type {String}
         */
        url: app.api.getApiUrl('movie/popular')
    });

})();
