var app = app || {};

(function() {

    /**
     * `AppModel` is a global model that all views share in the application.
     * Typically used as an event hub to publish/subscribe events between views.
     *
     * @singleton
     * @extends {Backbone.Model}
     */
    app.Model.AppModel = Backbone.Model.extend({

        /**
         * Gets the `app.models.appModel` instance, otherwise, proxies the
         * `Backbone.Model` constructor to continue creating this instance.
         *
         * @return {app.Model.AppModel} The `app.Model.AppModel` instance.
         */
        constructor: function() {
            return this.getInstance() || Backbone.Model.prototype.constructor.apply(this, arguments);
        },

        /**
         * Gets the `app.models.appModel` instance.
         *
         * @return {app.Model.AppModel} The `app.Model.AppModel` instance.
         */
        getInstance: function() {
            return app.models.appModel;
        },
    });

})();
