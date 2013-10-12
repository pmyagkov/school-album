/* global define */
define(['BaseView', 'jquery.validate'], function (BaseView, $) {
    "use strict";

    var parent = BaseView;
    return parent.extend({
        constructor: function StudentView() {
            parent.prototype.constructor.apply(this, arguments);
        },
        initialize: function () {
            parent.prototype.initialize.apply(this, arguments);

        },

        render: function () {
            parent.prototype.render.apply(this, arguments);
            this.$form = this.$("form");
            if (this._command === "edit") {
                $.validator.messages.required = "Нужно хоть что-то ввести";
                this.$form.validate();
            }
        },

        events: {
            "click .student-edit_link-save": "save",
            "click .student-edit_link-discard": "discard",
            "input #userpic": "loadImage"
        },
        save: function() {

            if (this.$form && this.$form.valid()) {
                var $elems = this.$("[name]");
                var obj = {};
                $elems.each(function (i, e) {
                    var $e = $(e);
                    var attr = $e.attr("name");

                    var parts = attr.split(".");
                    var currObj = obj;
                    if ($e.val()) {
                        for (var i = 0; i < parts.length; i++) {
                            var currPart = parts[i];
                            if (i < parts.length - 1) {
                                if (!obj[currPart]) {
                                    obj[currPart] = {};
                                }
                                currObj = obj[currPart];
                            }
                            else {
                                currObj[currPart] = $e.val();
                            }
                        }
                    }

                });

                this.model.save(obj);
                this.trigger("navigate", "#!/students/" + this.model.id);

            }

            return false;
        },

        discard: function () {
            if (confirm("Уверены, что хотите отменить редактирование?\nВсе несохраненные данные потеряются.")) {
                this.trigger("navigate", "#!/students/" + this.model.id);
            }
            return false;
        },

        loadImage: function () {
            if (!this.$userpic || !this.regex) {
                this.$userpic = this.$("#userpic");
                this.$shadow = this.$(".student-card_photo_shadow");
                this.regex = /(jpeg|jpg|gif|png)$/;
            }

            var val = this.$userpic.val();

            if (this.regex.test(val)) {
                this.$shadow.css("background-image", "url(" + val + ")");
            }
        }
    });
});
