var app = app || {};

(function() {

    /**
     * The `MovieModel` is the model representing the data returned from the
     * `/movie/{movie_id}` endpoint. It will include information about a
     * particular movie.
     *
     * @extends {app.Model}
     */
    app.Model.MovieModel = app.Model.extend({

        /**
         * Sets the given `id` on the model.
         *
         * @param {Object} options Options hash.
         */
        initialize: function(options) {
            if (options && options.id) {
                this.set('id', options.id);
            }
        },

        /**
         * Returns the URL for the `/movie/{movie_id}` endpoint.
         *
         * @return {String} The request URL.
         */
        url: function() {
            var id = this.get('id');
            return app.api.getApiUrl('movie/' + id);
        },
    });

})();
