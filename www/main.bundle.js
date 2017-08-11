webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__("../../../../ionic-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/auth/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("../../../../../src/app/auth/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/auth/components/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* IonicModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_5__components_settings_settings_component__["a" /* SettingsComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_5__components_settings_settings_component__["a" /* SettingsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-navbar color=\"primary\">\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n\n    <br>\n    <button (click)=\"onLogin()\" ion-button outline block>Login</button>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "../../../../../src/app/auth/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Parse = __webpack_require__("../../../../parse/index.js");
var LoginComponent = (function () {
    function LoginComponent() {
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        Parse.User.logIn(this.username, this.password, {
            success: function (user) {
                alert('welcome: ' + user.get('username'));
            },
            error: function (user, error) {
                alert(error.message);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/auth/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/components/login/login.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-navbar color=\"primary\">\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n\n    <br>\n    <button (click)=\"onRegister()\" ion-button outline block>Register</button>\n  </ion-list>\n  \n</ion-content>"

/***/ }),

/***/ "../../../../../src/app/auth/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_components_home_home_component__ = __webpack_require__("../../../../../src/app/home/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__("../../../../ionic-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Parse = __webpack_require__("../../../../parse/index.js");
var RegisterComponent = (function () {
    function RegisterComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.username = '';
        this.email = '';
        this.password = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var self = this;
        var user = new Parse.User();
        user.set("username", this.username);
        user.set("email", this.email);
        user.set("password", this.password);
        user.signUp(null, {
            success: function (user) {
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_components_home_home_component__["a" /* HomeComponent */]);
            },
            error: function (user, error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/auth/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/components/register/register.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === 'function' && _a) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-navbar color=\"primary\">\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-avatar item-left>\n        <img src=\"{{user.get('picture').url()}}\">\n      </ion-avatar>\n      <h2>{{user.get('username')}}</h2>\n      <p>{{user.get('email')}}</p>\n    </ion-item>\n\n    <ion-item>\n      <input type=\"file\" id=\"inputFile\" class=\"inputFile\" accept=\"image/*\" (change)=\"onChange($event)\" />\n      <label for=\"inputFile\" class=\"labelFile\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17\" viewBox=\"0 0 20 17\"><path d=\"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z\"/></svg> \n             <span>Photo</span>\n        </label>\n    </ion-item>\n\n    <button (click)=\"onSave()\" ion-button outline block>Save</button>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "../../../../../src/app/auth/components/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inputFile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.labelFile {\n  padding: 0.625rem 1.25rem;\n  color: #722040;\n  border: 2px solid currentColor;\n  font-size: 1.25rem;\n  font-weight: 700;\n  display: inline-block;\n  cursor: pointer;\n  width: 100%; }\n  .labelFile svg {\n    width: 1em;\n    height: 1em;\n    vertical-align: middle;\n    fill: currentColor;\n    margin-top: -0.25em;\n    margin-right: 0.25em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Parse = __webpack_require__("../../../../parse/index.js");
var SettingsComponent = (function () {
    function SettingsComponent(zone) {
        this.zone = zone;
        this.user = {};
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.user = Parse.User.current();
    };
    SettingsComponent.prototype.onSave = function () {
        var _this = this;
        var parseFile = new Parse.File(this.file.name, this.file);
        var user = Parse.User.current();
        user.set('picture', parseFile);
        user.save().then(function (user) {
            _this.zone.run(function () { _this.user = Parse.User.current(); });
        });
    };
    SettingsComponent.prototype.onChange = function (event) {
        this.file = event.srcElement.files[0];
        console.log(this.file);
    };
    SettingsComponent.prototype.ionViewCanEnter = function () {
        return Parse.User.current() != null;
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/auth/components/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/components/settings/settings.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* NgZone */]) === 'function' && _a) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/auth/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../src/app/auth/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__ = __webpack_require__("../../../../../src/app/auth/components/register/register.component.ts");



var authRoutes = [
    { component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */], name: 'Login', segment: 'login', menu: true },
    { component: __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__["a" /* RegisterComponent */], name: 'Register', segment: 'register', menu: true },
    { component: __WEBPACK_IMPORTED_MODULE_0__components_settings_settings_component__["a" /* SettingsComponent */], name: 'Settings', segment: 'settings', menu: true }
];
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/router.js.map

/***/ }),

/***/ "../../../../../src/app/duffades/components/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-navbar color=\"primary\">\r\n    <button ion-button menuToggle>\r\n      <ion-icon name=\"menu\"></ion-icon>\r\n    </button>\r\n    <ion-title>New</ion-title>\r\n  </ion-navbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n\r\n    <form id=\"form-duffade\" novalidate (submit)=\"onSubmit()\">\r\n\r\n      <ion-item>\r\n        <ion-input name=\"title\" type=\"text\" placeholder=\"Titre\" [(ngModel)]=\"duffade.title\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-input name=\"description\" type=\"text\" placeholder=\"Description\" [(ngModel)]=\"duffade.description\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <input type=\"file\" id=\"inputFile\" class=\"inputFile\" accept=\"image/*\" (change)=\"onChangePhoto($event)\" />\r\n        <label for=\"inputFile\" class=\"labelFile\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17\" viewBox=\"0 0 20 17\"><path d=\"M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z\"/></svg> \r\n             <span>Photo</span>\r\n        </label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <button type=\"submit\" ion-button block outline>Save</button>\r\n      </ion-item>\r\n    </form>\r\n\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "../../../../../src/app/duffades/components/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#form-duffade {\n  margin: 5px 0; }\n  #form-duffade .inputFile {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1; }\n  #form-duffade .labelFile {\n    padding: 0.625rem 1.25rem;\n    color: #722040;\n    border: 2px solid currentColor;\n    font-size: 1.25rem;\n    font-weight: 700;\n    display: inline-block;\n    cursor: pointer;\n    width: 100%; }\n    #form-duffade .labelFile svg {\n      width: 1em;\n      height: 1em;\n      vertical-align: middle;\n      fill: currentColor;\n      margin-top: -0.25em;\n      margin-right: 0.25em; }\n  #form-duffade .inputfile:focus + label,\n  #form-duffade .inputfile.has-focus + label,\n  #form-duffade .inputfile + label:hover {\n    color: #722040; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/duffades/components/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_duffades_models_duffade__ = __webpack_require__("../../../../../src/app/duffades/models/duffade.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Parse = __webpack_require__("../../../../parse/index.js");
var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
        this.duffade = new __WEBPACK_IMPORTED_MODULE_1_app_duffades_models_duffade__["a" /* Duffade */]();
    };
    FormComponent.prototype.onChangePhoto = function (event) {
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.duffade.picture = files[0];
    };
    FormComponent.prototype.onSubmit = function () {
        var self = this;
        var duffade = new Parse.Object('Duffade');
        duffade.set("title", this.duffade.title);
        duffade.set("description", this.duffade.description);
        duffade.set('author', Parse.User.current());
        if (this.duffade.picture) {
            var parseFile = new Parse.File(this.duffade.picture.name, this.duffade.picture);
            duffade.set("picture", parseFile);
        }
        duffade.save().then(function () { return alert('save'); });
    };
    FormComponent.prototype.ionViewCanEnter = function () {
        return Parse.User.current() != null;
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("../../../../../src/app/duffades/components/form/form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/duffades/components/form/form.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/form.component.js.map

/***/ }),

/***/ "../../../../../src/app/duffades/components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-navbar color=\"primary\">\r\n    <button ion-button menuToggle>\r\n      <ion-icon name=\"menu\"></ion-icon>\r\n    </button>\r\n    <ion-title>Mur</ion-title>\r\n  </ion-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding text-center>\r\n\r\n  <ion-refresher (ionRefresh)=\"activate($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-fab right bottom>\r\n    <a href=\"#/duffades/new\" ion-fab color=\"primary\"><ion-icon name=\"add\"></ion-icon></a>\r\n  </ion-fab>\r\n\r\n  <ion-list>\r\n    <ion-card *ngFor=\"let item of duffades\">\r\n\r\n      <ion-item>\r\n        <ion-avatar item-left>\r\n          <img src=\"{{item.get('target').get('picture').url()}}\" title=\"{{item.get('target').get('username')}}\">\r\n        </ion-avatar>\r\n        <h2>{{item.get('title')}}</h2>\r\n        <p>By {{item.get('author').get('username')}}</p>\r\n      </ion-item>\r\n\r\n      <ion-card-content>\r\n        <p>{{item.get('description')}}</p>\r\n        <img src=\"{{item.get('picture').url()}}\">\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-list>\r\n\r\n</ion-content>"

/***/ }),

/***/ "../../../../../src/app/duffades/components/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ion-content {\n  background-color: #F5F5F5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/duffades/components/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__("../../../../ionic-angular/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Parse = __webpack_require__("../../../../parse/index.js");
var ListComponent = (function () {
    function ListComponent(zone, loadingCtrl) {
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.duffades = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.activate(null);
    };
    ListComponent.prototype.activate = function (refresher) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Please wait..." });
        loading.present();
        var q = new Parse.Query('Duffade');
        q.find().then(function (duffades) {
            _this.zone.run(function () {
                _this.duffades = duffades;
                loading.dismiss();
                if (refresher) {
                    refresher.complete();
                }
            });
        });
    };
    ListComponent.prototype.ionViewCanEnter = function () {
        return Parse.User.current() != null;
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/duffades/components/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/duffades/components/list/list.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* NgZone */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === 'function' && _b) || Object])
    ], ListComponent);
    return ListComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/list.component.js.map

/***/ }),

/***/ "../../../../../src/app/duffades/duffades.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuffadesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_list_list_component__ = __webpack_require__("../../../../../src/app/duffades/components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_form_form_component__ = __webpack_require__("../../../../../src/app/duffades/components/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__("../../../../ionic-angular/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DuffadesModule = (function () {
    function DuffadesModule() {
    }
    DuffadesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_list_list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_3__components_form_form_component__["a" /* FormComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__components_list_list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_3__components_form_form_component__["a" /* FormComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DuffadesModule);
    return DuffadesModule;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/duffades.module.js.map

/***/ }),

/***/ "../../../../../src/app/duffades/models/duffade.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Duffade; });
var Duffade = (function () {
    function Duffade() {
    }
    return Duffade;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/duffade.js.map

/***/ }),

/***/ "../../../../../src/app/duffades/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return duffadesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_list_list_component__ = __webpack_require__("../../../../../src/app/duffades/components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_form_form_component__ = __webpack_require__("../../../../../src/app/duffades/components/form/form.component.ts");


var duffadesRoutes = [
    { component: __WEBPACK_IMPORTED_MODULE_0__components_list_list_component__["a" /* ListComponent */], name: 'Duffades', segment: 'duffades', menu: true },
    { component: __WEBPACK_IMPORTED_MODULE_1__components_form_form_component__["a" /* FormComponent */], name: 'Form', segment: 'duffades/new' }
];
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/router.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-navbar color=\"primary\">\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n    This is about page\n  </p>\n\n  <button ion-button (click)=\"presentLoading()\">Loading</button>\n</ion-content>"

/***/ }),

/***/ "../../../../../src/app/home/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__("../../../../ionic-angular/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    AboutComponent.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({ content: 'Please wait...', duration: 3000 });
        loader.present();
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            template: __webpack_require__("../../../../../src/app/home/components/about/about.component.html")
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === 'function' && _b) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/about.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-navbar color=\"primary\">\r\n    <button ion-button menuToggle>\r\n      <ion-icon name=\"menu\"></ion-icon>\r\n    </button>\r\n    <ion-title>Home</ion-title>\r\n  </ion-navbar>\r\n</ion-header>\r\n\r\n<ion-content padding text-center>\r\n  Bienvenue dans Duffades\r\n\r\n  <br/>\r\n\r\n  <a ion-button icon-only href=\"#/duffades\">\r\n    Duffades\r\n</a>\r\n</ion-content>"

/***/ }),

/***/ "../../../../../src/app/home/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__("../../../../ionic-angular/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            template: __webpack_require__("../../../../../src/app/home/components/home/home.component.html")
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__("../../../../ionic-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_components_home_home_component__ = __webpack_require__("../../../../../src/app/home/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_components_about_about_component__ = __webpack_require__("../../../../../src/app/home/components/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__home_components_about_about_component__["a" /* AboutComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__home_components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__home_components_about_about_component__["a" /* AboutComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__ = __webpack_require__("../../../../../src/app/home/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_about_component__ = __webpack_require__("../../../../../src/app/home/components/about/about.component.ts");


var homeRoutes = [
    { component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */], name: 'Home', segment: 'home' },
    { component: __WEBPACK_IMPORTED_MODULE_1__components_about_about_component__["a" /* AboutComponent */], name: 'About', segment: 'about' }
];
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/router.js.map

/***/ }),

/***/ "../../../../../src/app/root/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-menu [content]=\"content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list *ngIf=\"isAuthenticated\">\n      <button menuClose ion-item (click)=\"logout()\">Logout</button>\n    </ion-list>\n\n    <ion-list>\n      <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n        {{p.name}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]=\"rootPage\" #content swipeBackEnabled=\"true\"></ion-nav>"

/***/ }),

/***/ "../../../../../src/app/root/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__duffades_components_list_list_component__ = __webpack_require__("../../../../../src/app/duffades/components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__("../../../../../src/app/root/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__("../../../../ionic-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_native__ = __webpack_require__("../../../../ionic-native/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Parse = __webpack_require__("../../../../parse/index.js");
var AppComponent = (function () {
    function AppComponent(platform) {
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__duffades_components_list_list_component__["a" /* ListComponent */];
        this.connectedUsername = '';
        this.isAuthenticated = false;
        this.pages = __WEBPACK_IMPORTED_MODULE_1__router__["a" /* appRoutes */].filter(function (item) { return item.menu == true; });
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        Parse.initialize("duffade");
        Parse.serverURL = 'https://duffades.herokuapp.com/parse';
        if (Parse.User.current()) {
            this.isAuthenticated = true;
            this.connectedUsername = Parse.User.current().get('username');
        }
        this.platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_4_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_4_ionic_native__["a" /* Splashscreen */].hide();
        });
    };
    AppComponent.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    AppComponent.prototype.logout = function () {
        Parse.User.logOut().then(function () {
            alert('you disconnected');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_17" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */]) === 'function' && _a) || Object)
    ], AppComponent.prototype, "nav", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* Component */])({
            template: __webpack_require__("../../../../../src/app/root/components/app.component.html")
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Platform */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Platform */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/root/root.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__("../../../../ionic-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("../../../../../src/app/root/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__duffades_duffades_module__ = __webpack_require__("../../../../../src/app/duffades/duffades.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_component__ = __webpack_require__("../../../../../src/app/root/components/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__components_app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__home_home_module__["a" /* HomeModule */], __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__["a" /* AuthModule */], __WEBPACK_IMPORTED_MODULE_5__duffades_duffades_module__["a" /* DuffadesModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__components_app_component__["a" /* AppComponent */], { mode: 'md' }, { links: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* appRoutes */] })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__components_app_component__["a" /* AppComponent */]],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/root.module.js.map

/***/ }),

/***/ "../../../../../src/app/root/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_router__ = __webpack_require__("../../../../../src/app/auth/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_router__ = __webpack_require__("../../../../../src/app/home/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duffades_router__ = __webpack_require__("../../../../../src/app/duffades/router.ts");



var appRoutes = __WEBPACK_IMPORTED_MODULE_1__home_router__["a" /* homeRoutes */].concat(__WEBPACK_IMPORTED_MODULE_2__duffades_router__["a" /* duffadesRoutes */], __WEBPACK_IMPORTED_MODULE_0__auth_router__["a" /* authRoutes */]);
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/router.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_root_root_module__ = __webpack_require__("../../../../../src/app/root/root.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_25" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_root_root_module__["a" /* AppModule */])
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map