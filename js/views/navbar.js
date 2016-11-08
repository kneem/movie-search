var app = app || {};

(function() {

    /**
     * The `NavbarView` is a top-level view that displays the navigation bar,
     * and handles search-related functionality.
     *
     * @extends {app.View}
     */
    app.View.NavbarView = app.View.extend({

        /**
         * Where this view will be rendered.
         *
         * @type {String}
         */
        el: '.nav-container',

        /**
         * The base template to use.
         *
         * @type {String}
         */
        templateName: 'navbar.hbs',

        /**
         * Selector for the search bar.
         *
         * @type {String}
         */
        searchBarSelector: '[data-searchbar]',

        /**
         * Backbone events hash.
         *
         * @type {Object}
         */
        events: {
            'submit': 'search',
        },

        /**
         * Sets up event listeners and renders the view.
         *
         * @param {Object} options Options hash.
         */
        initialize: function(options) {
            this.listenTo(app.models.appModel, 'navbar:update', this.updateSearchBar);
            this.render();
        },

        /**
         * Updates the search bar with the given `query`. This method is called
         * when the user navigates to a search page via the URL.
         *
         * @param {String} query The search term.
         */
        updateSearchBar: function(query) {
            var value = this.$(this.searchBarSelector).val();

            if (!value && query.length) {
                this.$(this.searchBarSelector).val(query);
            }
        },

        /**
         * Initiates the search, by routing to the `movies/search/{query}`
         * route.
         *
         * @param {Event} evt The form `submit` event.
         */
        search: function(evt) {
            // Prevent form from refreshing the page.
            evt.preventDefault();

            var query = this.$(this.searchBarSelector).val().trim();

            if (_.isEmpty(query)) {
                return;
            }

            // Not using app.router.navigate here, since Backbone decodes the
            // fragment and updates the URL with the decoded fragment.
            window.location.hash = 'movies/search/' + encodeURIComponent(query);
        },
    });

})();
