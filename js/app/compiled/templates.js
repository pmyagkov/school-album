define(['handlebars'], function(Handlebars) {

this["templates"] = this["templates"] || {};

this["templates"]["about"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div class=\"about\">\r\n    ";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["templates"]["header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <div class=\"header__links__item header__links__item_";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-layout=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                <a class=\"header__links__item_link\" href=\"#";
  if (stack1 = helpers.route) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.route; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n            </div>\r\n        ";
  return buffer;
  }

  buffer += "<h1 class=\"header__title\">\r\n    <a class=\"link header__title-link\" href=\"#\">\r\n        <span class=\"header__title-link__first-letter\">В</span>ыпускной альбом ШРИ 2013\r\n    </a>\r\n</h1>\r\n<div class=\"header__links\">\r\n    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["templates"]["lecture"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n            <div class=\"lecture__others\">\r\n                <div class=\"caption caption_v\">Другие лекции автора:</div>\r\n                <ul class=\"lecture__others-list\">\r\n                    ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.lecturer),stack1 == null || stack1 === false ? stack1 : stack1.lectures), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n                </ul>\r\n            </div>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        ";
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                            <li class=\"lecture__others-list__item\">\r\n                                <a href=\"#!/lectures/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n                            </li>\r\n                        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <iframe class=\"lecture__slides player\" frameborder=\"0\" src=\"";
  if (stack1 = helpers.slides) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.slides; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></iframe>\r\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <div class=\"lecture__video\">\r\n            <div class=\"lecture__video_presentation\">\r\n                <iframe src=\"";
  if (stack1 = helpers.video) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.video; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: 100%; height: 320px;\"></iframe>\r\n            </div>\r\n        </div>\r\n    ";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "\r\n    ";
  }

  buffer += "<div class=\"lecture\">\r\n    <div class=\"lecture__info\">\r\n        <h2 class=\"lecture__info_title\">\r\n            ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n        </h2>\r\n        <div class=\"lecture__lecturer\">\r\n            <span class=\"caption\">Лекцию читает&nbsp;</span>\r\n            <a href=\"#!/lecturers/"
    + escapeExpression(((stack1 = ((stack1 = depth0.lecturer),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\"Посмотреть информацию про лектора\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.lecturer),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.lecturer),stack1 == null || stack1 === false ? stack1 : stack1.lastName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n        </div>\r\n        ";
  options = {hash:{
    'compare': (1)
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_gt || depth0.if_gt),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.lecturer),stack1 == null || stack1 === false ? stack1 : stack1.lectures)),stack1 == null || stack1 === false ? stack1 : stack1.length), options) : helperMissing.call(depth0, "if_gt", ((stack1 = ((stack1 = depth0.lecturer),stack1 == null || stack1 === false ? stack1 : stack1.lectures)),stack1 == null || stack1 === false ? stack1 : stack1.length), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n\r\n    </div>\r\n\r\n    ";
  stack2 = helpers['if'].call(depth0, depth0.slides, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n    ";
  stack2 = helpers['if'].call(depth0, depth0.video, {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["templates"]["lecturer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                <a class=\"lecturer__info_tech-link link link_i\" target=\"_blank\" href=\"http://tech.yandex.ru/people/";
  if (stack1 = helpers.nativeId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nativeId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"Профиль на tech.yandex.ru\"><i class=\"icon-ya\"></i></a>\r\n            ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <div class=\"caption caption_v\">\r\n                О себе:\r\n            </div>\r\n            <div class=\"lecturer__info_about\">\r\n                ";
  if (stack1 = helpers.about) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.about; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n            </div>\r\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                    <li class=\"lecturer__lecture-list__item\">\r\n                        <a href=\"#!/lectures/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n                    </li>\r\n                ";
  return buffer;
  }

  buffer += "<div class=\"lecturer\">\r\n    <div class=\"lecturer__info\">\r\n        <h2 class=\"lecturer__info_name\">\r\n            ";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "&nbsp;";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n            ";
  stack1 = helpers['if'].call(depth0, depth0.nativeId, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        </h2>\r\n\r\n        ";
  stack1 = helpers['if'].call(depth0, depth0.about, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n        <div class=\"lecturer__userpic\">\r\n            <img class=\"lecturer__userpic_img\" src=\"";
  if (stack1 = helpers.userpic) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.userpic; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n        </div>\r\n\r\n        <div class=\"lecturer__lectures\">\r\n            <div class=\"caption caption_v\">Лекции автора:</div>\r\n            <ul class=\"lecturer__lecture-list\">\r\n                ";
  stack1 = helpers.each.call(depth0, depth0.lectures, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>";
  return buffer;
  });

this["templates"]["lecturers"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li class=\"entity-list__item entity-list__item_s ";
  stack1 = helpers['if'].call(depth0, depth0.isNew, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n                <a class=\"link_i\" href=\"#!/lecturers/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                <span class=\"student-list__item__userpic\" style=\"background-image: url('";
  if (stack1 = helpers.userpic) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.userpic; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "');\">\r\n\r\n                </span>\r\n                </a>\r\n\r\n                <span class=\"student-list__item__name\">\r\n                    <a class=\"link\" href=\"#!/lecturers/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "&nbsp;";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n                </span>\r\n\r\n            </li>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "entity-list__item_colored";
  }

  buffer += "<div class=\"students\">\r\n    <h2 class=\"header-title\">\r\n        В этом году в школе преподавали:\r\n    </h2>\r\n\r\n    <ul class=\"entity-list\">\r\n        ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </ul>\r\n</div>\r\n";
  return buffer;
  });

this["templates"]["lectures"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n            <li class=\"entity-list__item entity-list__item_m entity-list__item_";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                <ul class=\"lecture-list__item_icons\">\r\n                    ";
  stack1 = helpers['if'].call(depth0, depth0.video, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                    ";
  stack1 = helpers['if'].call(depth0, depth0.slides, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </ul>\r\n                <div class=\"lecture-list__item_title\">\r\n                    <a href=\"#!/lectures/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"for-search\" title=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n                </div>\r\n                <div class=\"lecture-list__item_name\">\r\n                    <span class=\"caption\">Лекцию читал";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.lecturer),stack1 == null || stack1 === false ? stack1 : stack1.sex), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "&nbsp;&nbsp;</span>\r\n                    <a href=\"#!/lecturers/"
    + escapeExpression(((stack1 = ((stack1 = depth0.lecturer),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"for-search\" title=\"Посмотреть информацию про лектора\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.lecturer),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.lecturer),stack1 == null || stack1 === false ? stack1 : stack1.lastName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n                </div>\r\n                <div class=\"lecture-list__item-date\">\r\n                    <span class=\"caption\">Лекция проходила&nbsp;&nbsp;</span>\r\n                    <span class=\"lecture-list__item_date\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formatDate || depth0.formatDate),stack1 ? stack1.call(depth0, depth0.date, options) : helperMissing.call(depth0, "formatDate", depth0.date, options)))
    + "</span>\r\n                </div>\r\n\r\n            </li>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\r\n                        <li class=\"lecture-list__item_icons__item\">\r\n                            <i class=\"icon-video\"></i>\r\n                        </li>\r\n                    ";
  }

function program4(depth0,data) {
  
  
  return "\r\n                        <li class=\"lecture-list__item_icons__item\">\r\n                            <i class=\"icon-slides\"></i>\r\n                        </li>\r\n                    ";
  }

function program6(depth0,data) {
  
  
  return "a";
  }

  buffer += "<div class=\"lectures\">\r\n    <h2>\r\n        Лекции этого года:\r\n        <div class=\"search\">\r\n            <i class=\"icon-search\"></i>\r\n            <input type=\"text\" class=\"search-control\">\r\n        </div>\r\n    </h2>\r\n    <ul class=\"entity-list\">\r\n        ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </ul>\r\n</div>";
  return buffer;
  });

this["templates"]["student"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n                        <li class=\"student-card_socials__item\">\r\n                            <a target=\"_blank\" class=\"link link_i student-card_socials__item_link student-card_socials__item_link_"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\r\n                               title=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" href=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">\r\n                                <i class=\"icon-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i>\r\n                            </a>\r\n                        </li>\r\n                    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <div class=\"student-card_about\">\r\n                <div class=\"caption caption_v\">О себе:</div>\r\n                ";
  if (stack1 = helpers.about) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.about; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n\r\n            </div>\r\n            ";
  return buffer;
  }

function program5(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.userpic) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.userpic; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);
  }

function program7(depth0,data) {
  
  
  return "img/default.png";
  }

  buffer += "<div class=\"student\">\r\n    <h2 class=\"header-title\">\r\n        Карточка студента\r\n        <a class=\"link link_i\" href=\"#!/students/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/edit\" title=\"Редактировать карточку\">\r\n            <span class=\"student_edit-icon\"><i class=\"icon-edit\"></i></span>\r\n        </a>\r\n    </h2>\r\n    <div class=\"student-card\">\r\n        <div class=\"student-card_info\">\r\n            <div class=\"student-card_name-wrapper\">\r\n                <span class=\"student-card_name\">";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "&nbsp;";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                <span class=\"caption\">из города</span>\r\n                <span class=\"student-card_city\">";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n                <ul class=\"student-card_socials\">\r\n                    ";
  stack1 = helpers.each.call(depth0, depth0.links, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n                </ul>\r\n            </div>\r\n            ";
  stack1 = helpers['if'].call(depth0, depth0.about, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n            <div class=\"student-card_favourite-lectures\">\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"student-card_photo\" style=\"background-image: url('";
  stack1 = helpers['if'].call(depth0, depth0.userpic, {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "')\">\r\n        </div>\r\n\r\n    </div>\r\n</div>";
  return buffer;
  });

this["templates"]["studentEdit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.userpic) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.userpic; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  
  return "img/default.png";
  }

  buffer += "<div class=\"student-edit\">\r\n    <form>\r\n        <h2 class=\"header-title\">\r\n            Карточка студента\r\n            <button type=\"submit\" class=\"student-edit_button-save\">\r\n                <i class=\"icon-save\"></i>\r\n            </button>\r\n            <button type=\"reset\" class=\"student-edit_button-reset\">\r\n                <i class=\"icon-remove\"></i>\r\n            </button>\r\n\r\n        </h2>\r\n        <div class=\"student-card\">\r\n\r\n            <div class=\"student-card_info\">\r\n                <div class=\"student-card_name-wrapper\">\r\n                    <div class=\"control-wrapper\">\r\n                        <input type=\"text\" id=\"firstName\" name=\"firstName\" placeholder=\"Имя\" value=\"";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" required>\r\n                    </div>\r\n\r\n                    <div class=\"control-wrapper\">\r\n                        <input type=\"text\" id=\"lastName\" name=\"lastName\" placeholder=\"Фамилия\" value=\"";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" required>\r\n                    </div>\r\n\r\n                    <span class=\"caption\">из города</span>\r\n\r\n                    <div class=\"control-wrapper\">\r\n                        <input type=\"text\" id=\"city\" name=\"city\" placeholder=\"Город\" value=\"";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" required>\r\n                    </div>\r\n\r\n\r\n\r\n                </div>\r\n\r\n                <div class=\"student-card_userpic\">\r\n                    <div class=\"caption caption_v\">\r\n                        Ссылка на фото:\r\n                    </div>\r\n                    <div class=\"student-card_userpic-control-wrapper control-wrapper\">\r\n                        <input class=\"student-card_userpic-control\" type=\"text\" id=\"userpic\" name=\"userpic\" placeholder=\"\" value=\"";
  if (stack1 = helpers.userpic) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.userpic; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                        <span class=\"hint\">Поддерживаются форматы jpg, png, gif</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"student-card_socials student-card_socials_edit\">\r\n                    <div class=\"caption caption_v\">\r\n                        Ссылки на профили:\r\n                    </div>\r\n                    <ul class=\"student-card_socials-list student-card_socials-list_edit\">\r\n                        <li class=\"student-card_socials-list__item student-card_socials-list__item_edit\">\r\n                            <input class=\"student-card_socials-list__item_control\" type=\"text\" name=\"links.vk\" placeholder=\"http://vk.com\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.links),stack1 == null || stack1 === false ? stack1 : stack1.vk)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n                            <i class=\"icon-vk\"></i>\r\n                        </li>\r\n                        <li class=\"student-card_socials-list__item student-card_socials-list__item_edit\">\r\n                            <input class=\"student-card_socials-list__item_control\" type=\"text\" name=\"links.facebook\" placeholder=\"http://facebook.com\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.links),stack1 == null || stack1 === false ? stack1 : stack1.facebook)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n                            <i class=\"icon-facebook\"></i>\r\n                        </li>\r\n                        <li class=\"student-card_socials-list__item student-card_socials-list__item_edit\">\r\n                            <input class=\"student-card_socials-list__item_control\" type=\"text\" name=\"links.github\" placeholder=\"http://github.com\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.links),stack1 == null || stack1 === false ? stack1 : stack1.github)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n                            <i class=\"icon-github\"></i>\r\n                        </li>\r\n                        <li class=\"student-card_socials-list__item student-card_socials-list__item_edit\">\r\n                            <input class=\"student-card_socials-list__item_control\" type=\"text\" name=\"links.ya\" placeholder=\"http://ya.ru\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.links),stack1 == null || stack1 === false ? stack1 : stack1.ya)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n                            <i class=\"icon-ya\"></i>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"student-card_about\">\r\n                    <div class=\"caption caption_v\">О себе:</div>\r\n                    <textarea name=\"about\" class=\"student-card_about-control\">";
  if (stack2 = helpers.about) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.about; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</textarea>\r\n                </div>\r\n\r\n                <div class=\"student-card_favourite-lectures\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"student-card_photo\" style=\"background-image: url('";
  stack2 = helpers['if'].call(depth0, depth0.userpic, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "');\">\r\n                <div class=\"student-card_photo_shadow\"></div>\r\n            </div>\r\n\r\n        </div>\r\n    </form>\r\n\r\n</div>";
  return buffer;
  });

this["templates"]["students"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <li class=\"entity-list__item entity-list__item_s entity-list__item_";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                <a class=\"entity-list__item_remove link link_i\" href=\"#\"><i class=\"icon-remove\"></i></a>\r\n                <div class=\"item_left\">\r\n                    <a class=\"link_i\" href=\"#!/students/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n                        <span class=\"student-list__item__userpic\" style=\"background-image: url('";
  stack1 = helpers['if'].call(depth0, depth0.userpic, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "');\">\r\n                        </span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"item_right\">\r\n                    <span class=\"student-list__item__name\">\r\n                        <a class=\"link for-search\" href=\"#!/students/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n                    </span>\r\n                    <span class=\"student-list__item__city-wrapper\">\r\n                        <span class=\"caption\">из города&nbsp;</span>\r\n                        <span class=\"student-list__item__city for-search\">\r\n                            ";
  if (stack1 = helpers.city) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.city; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\r\n                        </span>\r\n                    </span>\r\n                </div>\r\n\r\n\r\n\r\n\r\n            </li>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.userpic) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.userpic; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);
  }

function program4(depth0,data) {
  
  
  return "img/default.png";
  }

  buffer += "<div class=\"students\">\r\n    <h2 class=\"header-title\">\r\n        В этом году в школе учились:\r\n        <a class=\"link link_i\" href=\"#!/students/add\" title=\"Добавить студента\">\r\n            <span class=\"students_add-icon\"><i class=\"icon-user-add\"></i></span>\r\n        </a>\r\n        <div class=\"search\">\r\n            <i class=\"icon-search\"></i>\r\n            <input type=\"text\" class=\"search-control\">\r\n        </div>\r\n    </h2>\r\n\r\n    <ul class=\"entity-list\">\r\n        ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </ul>\r\n</div>\r\n";
  return buffer;
  });

this["templates"]["twitter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"twitter-wrapper\">\r\n    <a class=\"twitter-timeline\" href=\"https://twitter.com/search?q=%23%D1%88%D1%80%D0%B8\" data-widget-id=\"388997199356370945\" accesskey=\"\"\r\n        data-chrome=\"nofooter noscrollbar\" data-tweet-limit=\"5\">\r\n        Tweets about \"#shri\"\r\n    </a>\r\n    <script></script>\r\n</div>\r\n";
  });

return this["templates"];

});