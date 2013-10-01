/* global Backbone, Handlebars */
var App = App || {};
App.StudentCollection = Backbone.Collection.extend({
    model: App.StudentModel
});
