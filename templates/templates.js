(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['credits.hbs'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"credits row\" data-order=\"3\">\n        <h3><i class=\"fa "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></i>"
    + alias4(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h3>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.itemRows || (depth0 && depth0.itemRows) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.list : depth0),5,{"name":"itemRows","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.escapeExpression;

  return "                <div class=\"credits-member col-sm-2\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.profile_path : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                    <p class=\"name ellipsis\" title=\""
    + alias2(helpers.lookup.call(alias1,depth0,(depths[1] != null ? depths[1].primary : depths[1]),{"name":"lookup","hash":{},"data":data}))
    + "\">"
    + alias2(helpers.lookup.call(alias1,depth0,(depths[1] != null ? depths[1].primary : depths[1]),{"name":"lookup","hash":{},"data":data}))
    + "</p>\n                    <p class=\"ellipsis\" title=\""
    + alias2(helpers.lookup.call(alias1,depth0,(depths[1] != null ? depths[1].secondary : depths[1]),{"name":"lookup","hash":{},"data":data}))
    + "\">"
    + alias2(helpers.lookup.call(alias1,depth0,(depths[1] != null ? depths[1].secondary : depths[1]),{"name":"lookup","hash":{},"data":data}))
    + "</p>\n                </div>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=depth0 != null ? depth0 : {}, alias2=container.escapeExpression;

  return "                            <img src=\""
    + alias2((helpers.getImageUrl || (depth0 && depth0.getImageUrl) || helpers.helperMissing).call(alias1,"profile",(depth0 != null ? depth0.profile_path : depth0),{"name":"getImageUrl","hash":{},"data":data}))
    + "\" class=\"img-responsive\" alt=\""
    + alias2(helpers.lookup.call(alias1,depth0,(depths[1] != null ? depths[1].primary : depths[1]),{"name":"lookup","hash":{},"data":data}))
    + "\">\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"credits-profile flex-center\">\n                            <i class=\"fa fa-user-circle\"></i>\n                        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <div class=\"text-center\">No "
    + container.escapeExpression(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"header","hash":{},"data":data}) : helper)))
    + " information found at this time.</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
templates['detail.hbs'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression, alias4=helpers.helperMissing, alias5="function";

  return "    <div class=\"detail\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.backdrop_path : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"content container\">\n            <h1 class=\"title\" data-order=\"1\">"
    + alias3(alias2((depths[1] != null ? depths[1].titleLabel : depths[1]), depth0))
    + "</h1>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tagline : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"movie-info row\" data-order=\"2\">\n                <div class=\"poster col-md-4\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.poster_path : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"info col-md-8 flex-column\">\n                    <div class=\"overview\">\n                        <h3>Overview</h3>\n                        <p class=\"ellipsis-big\" title=\""
    + alias3(((helper = (helper = helpers.overview || (depth0 != null ? depth0.overview : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"overview","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.overview || (depth0 != null ? depth0.overview : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"overview","hash":{},"data":data}) : helper)))
    + "</p>\n                    </div>\n                    <div class=\"movie-attributes row\">\n                        <div class=\"col-md-4\">\n                            <h3>Rating</h3>\n                            <p><i class=\"fa fa-star\"></i>"
    + alias3(alias2((depths[1] != null ? depths[1].voteLabel : depths[1]), depth0))
    + "</p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].voteUsers : depths[1]),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </div>\n                        <div class=\"col-md-4\">\n                            <h3>Budget</h3>\n                            <p><i class=\"fa fa-money\"></i>"
    + alias3(alias2((depths[1] != null ? depths[1].budget : depths[1]), depth0))
    + "</p>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <h3>Runtime</h3>\n                            <p><i class=\"fa fa-clock-o\"></i>"
    + alias3(alias2((depths[1] != null ? depths[1].runtime : depths[1]), depth0))
    + "</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"credits\"></div>\n        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"backdrop\">\n                <img src=\""
    + container.escapeExpression((helpers.getImageUrl || (depth0 && depth0.getImageUrl) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"backdrop",(depth0 != null ? depth0.backdrop_path : depth0),{"name":"getImageUrl","hash":{},"data":data}))
    + "\">\n            </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <h2 class=\"tagline\" data-order=\"4\">"
    + container.escapeExpression(((helper = (helper = helpers.tagline || (depth0 != null ? depth0.tagline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"tagline","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                            <img src=\""
    + container.escapeExpression((helpers.getImageUrl || (depth0 && depth0.getImageUrl) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"poster",(depth0 != null ? depth0.poster_path : depth0),{"name":"getImageUrl","hash":{},"data":data}))
    + "\">\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"poster-container\">\n                            <i class=\"fa fa-film\"></i>\n                        </div>\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "                                <p class=\"vote-count\">"
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1].voteUsers : depths[1]), depth0))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.attributes : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
templates['error.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "<p><i class=\"fa fa-exclamation-triangle\"></i>Error: \""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.xhr : depth0)) != null ? stack1.status : stack1), depth0))
    + " "
    + alias1(((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"msg","hash":{},"data":data}) : helper)))
    + "\".</p>\n<p>An error occurred. Please try again later.</p>\n";
},"useData":true});
templates['list.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.attributes : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "            <li class=\"item\">\n                <a href=\"#movies/"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.poster_path : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "                </a>\n            </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <img src=\""
    + container.escapeExpression((helpers.getImageUrl || (depth0 && depth0.getImageUrl) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"poster",(depth0 != null ? depth0.poster_path : depth0),{"name":"getImageUrl","hash":{},"data":data}))
    + "\">\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "                        <div class=\"movie-container\">\n                            <i class=\"fa fa-film\"></i>\n                            <p class=\"ellipsis\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.release_year : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                <p class=\"ellipsis\">"
    + container.escapeExpression(((helper = (helper = helpers.release_year || (depth0 != null ? depth0.release_year : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"release_year","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"movie-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.collection : depth0)) != null ? stack1.models : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
templates['loading.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\n    <i class=\"fa fa-refresh fa-spin fa-fw\"></i>\n    <span>Loading…</span>\n</div>\n";
},"useData":true});
templates['navbar.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-fixed-top\">\n    <div class=\"brand\"><a href=\"#movies\"><i class=\"fa fa-video-camera\"></i></a></div>\n    <div class=\"container-fluid\">\n        <form>\n            <div class=\"input-group\">\n                <input class=\"form-control\" data-searchbar=\"true\" placeholder=\"Search for a movie…\">\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-default btn-search\" data-searchbutton=\"true\" type=\"submit\">\n                        <i class=\"fa fa-search\"></i>\n                    </button>\n                </span>\n            </div>\n        </form>\n    </div>\n</nav>\n";
},"useData":true});
templates['results-list.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <p>Showing "
    + alias4(((helper = (helper = helpers.length || (depth0 != null ? depth0.length : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"length","hash":{},"data":data}) : helper)))
    + " film(s) matching: \""
    + alias4(((helper = (helper = helpers.query || (depth0 != null ? depth0.query : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"query","hash":{},"data":data}) : helper)))
    + "\".</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <p>No results found for: \""
    + container.escapeExpression(((helper = (helper = helpers.query || (depth0 != null ? depth0.query : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"query","hash":{},"data":data}) : helper)))
    + "\".</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.length : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
templates['results-popular.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <p>Showing "
    + container.escapeExpression(((helper = (helper = helpers.length || (depth0 != null ? depth0.length : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"length","hash":{},"data":data}) : helper)))
    + " popular film(s).</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <p>No popular films to show at this time. Please check again later.</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.length : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
})();