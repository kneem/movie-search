(function() {
    var helpers = {
        log: function(val) {
            console.log(val);
        },

        getImageUrl: function(type, path) {
            var base;
            switch (type) {
                case 'poster':
                    base = app.config.images.basePosterUrl;
                    break;
                case 'backdrop':
                    base = app.config.images.baseBackdropUrl;
                    break;
                case 'profile':
                    base = app.config.images.baseProfileUrl;
                    break;
                default:
                    base = app.config.images.basePosterUrl;
            }
            return base + path;
        },

        itemRows: function(context, length, options) {
            var ret = '<div class="container">';
            var applyClass = options.hash.applyClass || '';
            var row = applyClass ? '<div class="row ' + applyClass + '">' : '<div class="row">';

            _.each(context, function(item, key, list) {
                var tpl = options.fn(item);
                var isLast = key === list.length - 1;
                var newRow = key % length === 0;
                var close = key > 0 ? '</div>' : '';

                if (newRow && !isLast) {
                    ret += close + row + tpl;
                } else if (isLast) {
                    ret += tpl + close;
                } else {
                    ret += tpl;
                }
            });

            return ret + '</div>';
        },
    };

    _.each(helpers, function(method, name) {
        Handlebars.registerHelper(name, method);
    });
})();
