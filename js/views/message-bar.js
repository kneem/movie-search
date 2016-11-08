var app = app || {};

(function() {

    /**
     * The `MessageBarView` is a top-level view that displays high-level
     * messages to the user, such as loading, search results, or error
     * information.
     *
     * @extends {app.View}
     */
    app.View.MessageBarView = app.View.extend({

        /**
         * Where this view will be rendered.
         *
         * @type {String}
         */
        el: '.message-bar',

        /**
         * Sets up event listeners and handlers to update this view.
         *
         * @param {Object} options Options hash.
         */
        initialize: function(options) {
            this.listenTo(app.models.appModel, 'message:update', this.updateMessageBar);
            this.listenTo(app.models.appModel, 'message:clear', this.clearMessageBar);
        },

        /**
         * Renders the message bar with the given `templateOptions`.
         *
         * @param {Object} templateOptions Data to pass to the template.
         */
        updateMessageBar: function(templateOptions) {
            this.render(templateOptions);
        },

        /**
         * Clears the message bar.
         */
        clearMessageBar: function() {
            this.render();
        }
    });

})();
