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
            declarations: [__WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-navbar color=\"primary\">\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n</ion-content>"

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

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-navbar color=\"primary\">\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n\n    <br>\n    <button (click)=\"onRegister()\" ion-button outline block>Register</button>\n  </ion-list>\n\n\n\n</ion-content>"

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
<<<<<<< HEAD
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
=======
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

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/auth/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/components/register/register.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/register.component.js.map
>>>>>>> ea3e7696712c537eb9edaeef5cf261f88dcb27d6

/***/ }),

/***/ "../../../../../src/app/auth/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__ = __webpack_require__("../../../../../src/app/auth/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_register_register_component__ = __webpack_require__("../../../../../src/app/auth/components/register/register.component.ts");


var authRoutes = [
    { component: __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__["a" /* LoginComponent */], name: 'Login', segment: 'login' },
    { component: __WEBPACK_IMPORTED_MODULE_1__components_register_register_component__["a" /* RegisterComponent */], name: 'Register', segment: 'register' }
];
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/router.js.map

/***/ }),

/***/ "../../../../../src/app/duffades/components/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-navbar color=\"primary\">\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>New</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-list>\n\n  <form novalidate ng-submit=\"onSubmit()\">\n\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Titre\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Description\" required></ion-input>\n    </ion-item>\n\n   <button type=\"file\" ion-button color=\"secondary\">Photo</button>\n    <button type=\"submit\" ion-button block>Ajouter</button>\n  </form>\n\n</ion-list>"

/***/ }),

/***/ "../../../../../src/app/duffades/components/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/duffades/components/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
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

var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/form.component.js.map

/***/ }),

/***/ "../../../../../src/app/duffades/components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-navbar color=\"primary\">\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Duffades</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<button ion-button icon-only>\n  New\n  <ion-icon name=\"home\"></ion-icon>\n</button>\n\n<ion-list>\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src=\"img/thumbnail-totoro.png\">\n    </ion-thumbnail>\n    <h2>My Neighbor Totoro</h2>\n    <p>Hayao Miyazaki • 1988</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n</ion-list>"

/***/ }),

/***/ "../../../../../src/app/duffades/components/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/duffades/components/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
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

var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/duffades/components/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/duffades/components/list/list.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/list.component.js.map

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
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_list_list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_3__components_form_form_component__["a" /* FormComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DuffadesModule);
    return DuffadesModule;
}());
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/duffades.module.js.map

/***/ }),

/***/ "../../../../../src/app/duffades/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return duffadesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_list_list_component__ = __webpack_require__("../../../../../src/app/duffades/components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_form_form_component__ = __webpack_require__("../../../../../src/app/duffades/components/form/form.component.ts");


var duffadesRoutes = [
    { component: __WEBPACK_IMPORTED_MODULE_0__components_list_list_component__["a" /* ListComponent */], name: 'Duffades', segment: 'duffades' },
    { component: __WEBPACK_IMPORTED_MODULE_1__components_form_form_component__["a" /* FormComponent */], name: 'Form', segment: 'form' }
];
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/router.js.map

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
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/about.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-navbar color=\"primary\">\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  Bienvenue dans Duffades\n\n  <br/>\n\n  <a ion-button icon-only href=\"#/duffades\">\n    Duffades\n</a>\n</ion-content>"

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
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/home.component.js.map

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
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/home.module.js.map

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
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/router.js.map

/***/ }),

/***/ "../../../../../src/app/root/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-menu [content]=\"content\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor=\"let p of test\" (click)=\"openPage(p)\">\n        {{p.name}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]=\"rootPage\" #content swipeBackEnabled=\"true\"></ion-nav>\n"

/***/ }),

/***/ "../../../../../src/app/root/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__("../../../../../src/app/root/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__("../../../../ionic-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__("../../../../ionic-native/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_components_home_home_component__ = __webpack_require__("../../../../../src/app/home/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_components_about_about_component__ = __webpack_require__("../../../../../src/app/home/components/about/about.component.ts");
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__home_components_home_home_component__["a" /* HomeComponent */];
        this.test = __WEBPACK_IMPORTED_MODULE_0__router__["a" /* appRoutes */];
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__home_components_home_home_component__["a" /* HomeComponent */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__home_components_about_about_component__["a" /* AboutComponent */] }
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        Parse.initialize("duffade");
        Parse.serverURL = 'https://duffades.herokuapp.com/parse';
        this.platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_3_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Splashscreen */].hide();
        });
    };
    AppComponent.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */]) === 'function' && _a) || Object)
    ], AppComponent.prototype, "nav", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Component */])({
            template: __webpack_require__("../../../../../src/app/root/components/app.component.html")
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/app.component.js.map

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
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/root.module.js.map

/***/ }),

/***/ "../../../../../src/app/root/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_router__ = __webpack_require__("../../../../../src/app/auth/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_router__ = __webpack_require__("../../../../../src/app/home/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duffades_router__ = __webpack_require__("../../../../../src/app/duffades/router.ts");



var appRoutes = __WEBPACK_IMPORTED_MODULE_1__home_router__["a" /* homeRoutes */].concat(__WEBPACK_IMPORTED_MODULE_2__duffades_router__["a" /* duffadesRoutes */], __WEBPACK_IMPORTED_MODULE_0__auth_router__["a" /* authRoutes */]);
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/router.js.map

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
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/environment.js.map

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
//# sourceMappingURL=C:/Users/ta/Documents/Thomas/Workspace/Github/duffades-front/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map