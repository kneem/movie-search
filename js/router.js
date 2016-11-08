var app = app || {};

(function() {

    /**
     * The router class for the application.
     *
     * @extends {Backbone.Router}
     */
    app.Router = Backbone.Router.extend({
        routes: {
            'movies/search/*query': 'list',
            'movies/:id': 'detail',
            'movies': 'popular',
            '*any': 'redirect',
        },

        /**
         * Initializes the global `AppModel` instance, and any top-level views
         * such as `NavbarView`, and `MessageBarView`.
         *
         * @param {Object} options Options hash.
         */
        initialize: function(options) {
            app.models.appModel = new app.Model.AppModel();
            // No need to call `loadView` since these views will always remain.
            var nav = new app.View.NavbarView();
            var messageBar = new app.View.MessageBarView();
        },

        /**
         * Redirects the user to the `popular` route, if the URL given doesn't
         * match anything in {@link #routes}.
         */
        redirect: function() {
            this.navigate('movies', {
                trigger: true,
                replace: true
            });
        },

        /**
         * Removes the current {@link #view} (to clean memory leaks), and sets
         * the given `view` in {@link #view}.
         *
         * @param {app.View} view The view to be set on {@link #view}.
         */
        loadView: function(view) {
            this.view && this.view.remove();
            this.view = view;
        },

        /**
         * Loads the `PopularView`.
         */
        popular: function() {
            this.loadView(new app.View.PopularView());
        },

        /**
         * Loads the `ListView`.
         */
        list: function(query) {
            this.loadView(new app.View.ListView({query: query}));
        },

        /**
         * Loads the `DetailView`.
         */
        detail: function(id, params) {
            this.loadView(new app.View.DetailView({id: id}));
        },
    });

})();
