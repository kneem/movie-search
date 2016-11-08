var app = app || {};

(function() {

    /**
     * Contains helper methods for initiating HTTP requests.
     *
     * @type {Object}
     */
    app.api = {
        /**
         * Takes an API endpoint and returns a URL formatted with information
         * from the `app.config` instance.
         *
         * @param {String} endpoint The API endpoint to construct the URL for.
         * @return {String} The formatted request URL.
         */
        getApiUrl: function(endpoint) {
            return app.config.apiUrl + endpoint + '?api_key=' + app.config.apiKey;
        },

        /**
         * Performs a `GET` request on the given endpoint.
         *
         * @param {string} endpoint The endpoint to trigger the `GET` request.
         * @param {Function} success Callback to be executed on success.
         * @param {Function} error Callback to be executed on error.
         * @return {jQuery.Deferred} The jQuery Deferred object.
         */
        get: function(endpoint, onSuccess, onError) {
            var url = this.getApiUrl(endpoint);
            return $.get(url, onSuccess).fail(onError);
        },
    };

})();
