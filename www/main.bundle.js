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
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/auth.module.js.map

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
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-navbar color=\"primary\">\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n</ion-content>"

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
//# sourceMappingURL=D:/Profiles/bheintz/Documents/workspace/github/duffades/duffades-front/src/register.component.js.map

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

module.exports = "<ion-header>\n  <ion-navbar color=\"primary\">\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\nBienvenue dans Duffades\n\n</ion-content>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_app_component__ = __webpack_require__("../../../../../src/app/root/components/app.component.ts");
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
            declarations: [__WEBPACK_IMPORTED_MODULE_5__components_app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__home_home_module__["a" /* HomeModule */], __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__["a" /* AuthModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__components_app_component__["a" /* AppComponent */], { mode: 'md' }, { links: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* appRoutes */] })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__components_app_component__["a" /* AppComponent */]],
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


var appRoutes = __WEBPACK_IMPORTED_MODULE_1__home_router__["a" /* homeRoutes */].concat(__WEBPACK_IMPORTED_MODULE_0__auth_router__["a" /* authRoutes */]);
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