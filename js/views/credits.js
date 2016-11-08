var app = app || {};

(function() {

    /**
     * The `CreditsView` is a view that displays up to 10 Cast members, and up
     * to 10 Crew members, for a given movie, using the
     * {@link app.Model.CreditsModel credits model}.
     *
     * @extends {app.View}
     */
    app.View.CreditsView = app.View.extend({

        /**
         * Where this view will be rendered.
         *
         * @type {String}
         */
        el: '.credits',

        /**
         * The base template to use.
         *
         * @type {String}
         */
        templateName: 'credits.hbs',

        /**
         * Instantiates, and fetches the
         * {@link app.Model.CreditsModel credits model}, and displays the
         * results.
         *
         * @param {Object} options Options hash.
         */
        initialize: function(options) {
            this.model = new app.Model.CreditsModel({id: options.id});
            this.model.fetch({
                success: _.bind(function(model) {
                    var templateData = this.getTemplateData();
                    this.render({data: templateData});
                    options.success && options.success();
                }, this)
            });
        },

        /**
         * Builds a data object to be passed to the template, which will be used
         * during template compilation/rendering.
         */
        getTemplateData: function() {
            var data = {
                cast: {
                    header: 'Cast',
                    icon: 'fa-film',
                    primary: 'name',
                    secondary: 'character',
                    list: [],
                },
                crew: {
                    header: 'Crew',
                    icon: 'fa-bullhorn',
                    primary: 'name',
                    secondary: 'job',
                    list: [],
                }
            };

            data.cast.list = this.model.get('cast');
            data.crew.list = this.model.get('crew');

            // Display top 10 of Crew and Cast.
            if (!_.isEmpty(data.cast.list)) {
                data.cast.list = _.slice(data.cast.list, 0, 10);
            }

            if (!_.isEmpty(data.crew.list)) {
                data.crew.list = _.slice(_.uniqBy(data.crew.list, 'id'), 0, 10);
            }

            return data;
        },
    });

})();
