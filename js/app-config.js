var app = app || {};

(function() {

    /**
     * Contains configuration information for the application, such as API keys,
     * URLs, picture sizes, etc.
     *
     * @type {Object}
     */
    app.config = {
        apiKey: 'YOUR_API_KEY_GOES_HERE',
        apiUrl: 'https://api.themoviedb.org/3/',

        /**
         * Sets configuration information for picture sizes.
         *
         * @param {Object} config The configuration data.
         */
        setConfigs: function(config) {
            var backdrops = config.images.backdrop_sizes;
            var posters = config.images.poster_sizes;
            var profiles = config.images.profile_sizes;

            var backdropSize = backdrops.length > 1 ? backdrops[backdrops.length - 2] : backdrops[0];
            var posterSize = posters.length > 1 ? posters[posters.length - 2] : posters[0];
            var profileSize = profiles.length > 1 ? profiles[profiles.length - 2] : profiles[0];

            this.images = {
                baseUrl: config.images.secure_base_url,
                posterSize: posterSize,
                backdropSize: backdropSize,
                profileSize: profileSize,
                basePosterUrl: config.images.secure_base_url + posterSize,
                baseBackdropUrl: config.images.secure_base_url + backdropSize,
                baseProfileUrl: config.images.secure_base_url + profileSize,
            };
        },
    };

})();
