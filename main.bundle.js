webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppConfig = (function () {
    function AppConfig() {
        this.appConfig = {
            apiUrl: 'http://api3-dev.panono.com',
            timestampFormat: 'dd-MM-yyyy hh:mm'
        };
    }
    AppConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n  width: 100%\n}\n\n.content-area {\n  padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container container\">\n  <app-main-header></app-main-header>\n  <div class=\"content-area container-fluid\">\n    <div class=\"row\">\n      <div class=\"sidebar-container col-xs-3 col-sm-3 col-md-3 col-lg-3\" [ngClass]='{\"hide\": !sidebarVisibility}'>\n        <app-main-sidebar></app-main-sidebar>\n      </div>\n      <div class=\"content-container\" [ngClass]='sidebarVisibility ? \"col-xs-9 col-sm-9 col-md-9 col-lg-9\" : \"\"'>\n        <app-main-content></app-main-content>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(settingsService) {
        this.settingsService = settingsService;
        this.subscriptions = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.settingsService.sidebarVisibilityBehaviorSubject.subscribe(function (val) {
            _this.sidebarVisibility = val;
        }));
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panoramas_panoramas_module__ = __webpack_require__("../../../../../src/app/panoramas/panoramas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_header_main_header_component__ = __webpack_require__("../../../../../src/app/components/main-header/main-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_main_sidebar_main_sidebar_component__ = __webpack_require__("../../../../../src/app/components/main-sidebar/main-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_main_content_main_content_component__ = __webpack_require__("../../../../../src/app/components/main-content/main-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__panoramas_panorama_service__ = __webpack_require__("../../../../../src/app/panoramas/panorama.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_main_header_main_header_component__["a" /* MainHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_main_sidebar_main_sidebar_component__["a" /* MainSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_main_content_main_content_component__["a" /* MainContentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__panoramas_panoramas_module__["a" /* PanoramasModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_9__panoramas_panorama_service__["a" /* PanoramaService */], __WEBPACK_IMPORTED_MODULE_10__services_settings_service__["a" /* SettingsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/main-content/main-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-content/main-content.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template ngFor let-panorama [ngForOf]=\"filteredPanoramas\">\n  <app-grid-item *ngIf=\"isGrid()\" [item]='panorama' (favouriteChange)=\"favouriteChange()\"></app-grid-item>\n  <app-list-item *ngIf=\"isList()\" [item]='panorama' (favouriteChange)=\"favouriteChange()\"></app-list-item>\n</ng-template>\n<div class='no-data-label col-md-12 text-center' *ngIf=\"!filteredPanoramas.length\">\n  <h3>No data! <small>Please try again with new filter.</small></h3>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/main-content/main-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__difinitions__ = __webpack_require__("../../../../../src/app/difinitions/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panoramas_panorama_service__ = __webpack_require__("../../../../../src/app/panoramas/panorama.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panoramas_pipes_favorite_panoramas_pipe__ = __webpack_require__("../../../../../src/app/panoramas/pipes/favorite-panoramas.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainContentComponent = (function () {
    function MainContentComponent(panoramaService, settingsService, favoritePanoramasPipe) {
        this.panoramaService = panoramaService;
        this.settingsService = settingsService;
        this.favoritePanoramasPipe = favoritePanoramasPipe;
        this.filteredPanoramas = [];
        this.panoramas = [];
        this.subscriptions = [];
    }
    MainContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.panoramaService.getPanoramas().subscribe(function (next) {
            _this.panoramas = _this.panoramaService.preparePanoramas(next);
            _this.updateFiltredList();
        }));
        this.subscriptions.push(this.settingsService.viewBehaviorSubject.subscribe(function (next) {
            _this.viewSetting = next;
        }));
        this.subscriptions.push(this.settingsService.filterBehaviorSubject.subscribe(function (next) {
            _this.filterSetting = next;
            _this.updateFiltredList();
        }));
    };
    MainContentComponent.prototype.isGrid = function () {
        return this.viewSetting === __WEBPACK_IMPORTED_MODULE_1__difinitions__["b" /* ViewSetting */].Grid;
    };
    MainContentComponent.prototype.isList = function () {
        return this.viewSetting === __WEBPACK_IMPORTED_MODULE_1__difinitions__["b" /* ViewSetting */].List;
    };
    MainContentComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    MainContentComponent.prototype.favouriteChange = function () {
        this.updateFiltredList();
    };
    MainContentComponent.prototype.updateFiltredList = function () {
        this.filteredPanoramas = this.favoritePanoramasPipe.transform(this.panoramas, this.filterSetting);
    };
    MainContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-main-content',
            template: __webpack_require__("../../../../../src/app/components/main-content/main-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main-content/main-content.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__panoramas_pipes_favorite_panoramas_pipe__["a" /* FavoritePanoramasPipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__panoramas_panorama_service__["a" /* PanoramaService */],
            __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_4__panoramas_pipes_favorite_panoramas_pipe__["a" /* FavoritePanoramasPipe */]])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main-header/main-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand img {\n  display: inline-block;\n  height: auto;\n  padding-right: 15px;\n  width: 100px;\n}\n\n.nav-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-header/main-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\"><img alt=\"Brand\" src=\"/assets/img/brand-logo.png\"> {{ title }}</a>\n    </div>\n    <div class=\"nav-flex\" [ngClass]=\"{'hide': !isButtonAvailable}\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)='showSidebar()'>Show sidebar</button>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/main-header/main-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainHeaderComponent = (function () {
    function MainHeaderComponent(settingsService) {
        this.settingsService = settingsService;
        this.title = 'Favourite 360';
        this.subscriptions = [];
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.settingsService.sidebarVisibilityBehaviorSubject.subscribe(function (val) {
            _this.isButtonAvailable = !val;
        }));
    };
    MainHeaderComponent.prototype.showSidebar = function () {
        this.settingsService.sidebarVisibility = true;
    };
    MainHeaderComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    MainHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-main-header',
            template: __webpack_require__("../../../../../src/app/components/main-header/main-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main-header/main-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main-sidebar/main-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-heading span {\n  font-weight: 600;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-sidebar/main-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <span class=\"text-success\">{{ title }}</span>\n    <div class=\"pull-right\">\n      <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)='hideSidebar()' >Hide</button>\n    </div>\n  </div>\n  <div class=\"panel-body\">\n    <form [formGroup]=\"sidebarForm\">\n      <div class=\"form-group\">\n        <label>View</label>\n        <select formControlName=\"view\" class=\"form-control\" id=\"view\">\n          <option *ngFor=\"let view of viewKeys\">\n            {{view}}\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Filter</label>\n        <select formControlName=\"filter\" class=\"form-control\" id=\"filter\">\n          <option *ngFor=\"let filter of filterKeys\">\n            {{filter}}\n          </option>\n        </select>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main-sidebar/main-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__difinitions_setting__ = __webpack_require__("../../../../../src/app/difinitions/setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainSidebarComponent = (function () {
    function MainSidebarComponent(settingsService) {
        this.settingsService = settingsService;
        this.title = 'Sidebar';
        this.filters = __WEBPACK_IMPORTED_MODULE_2__difinitions_setting__["a" /* FilterSetting */];
        this.views = __WEBPACK_IMPORTED_MODULE_2__difinitions_setting__["b" /* ViewSetting */];
        this.subscriptions = [];
        this.filterKeys = Object.keys(this.filters).filter(function (key) { return key !== undefined; });
        this.viewKeys = Object.keys(this.views).filter(function (key) { return key !== undefined; });
    }
    MainSidebarComponent.prototype.ngOnInit = function () {
        this.sidebarForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            filter: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.settingsService.filterSetting),
            view: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.settingsService.viewSetting)
        });
        this.onChanges();
    };
    MainSidebarComponent.prototype.onChanges = function () {
        var _this = this;
        this.subscriptions.push(this.sidebarForm.get('filter').valueChanges.subscribe(function (val) {
            _this.settingsService.filterSetting = val;
        }));
        this.subscriptions.push(this.sidebarForm.get('view').valueChanges.subscribe(function (val) {
            _this.settingsService.viewSetting = val;
        }));
    };
    MainSidebarComponent.prototype.hideSidebar = function () {
        this.settingsService.sidebarVisibility = false;
    };
    MainSidebarComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    MainSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-main-sidebar',
            template: __webpack_require__("../../../../../src/app/components/main-sidebar/main-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main-sidebar/main-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */]])
    ], MainSidebarComponent);
    return MainSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/difinitions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__panorama__ = __webpack_require__("../../../../../src/app/difinitions/panorama.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setting__ = __webpack_require__("../../../../../src/app/difinitions/setting.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__setting__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__setting__["b"]; });




/***/ }),

/***/ "../../../../../src/app/difinitions/panorama.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PanoramaAuthorType */
/* unused harmony export PanoramaType */
var PanoramaAuthorType;
(function (PanoramaAuthorType) {
    PanoramaAuthorType["user"] = "user";
    // TODO: can add another types of authors
})(PanoramaAuthorType || (PanoramaAuthorType = {}));
var PanoramaType;
(function (PanoramaType) {
    PanoramaType["panorama"] = "panorama";
    // TODO: can add another types of panoramas
})(PanoramaType || (PanoramaType = {}));


/***/ }),

/***/ "../../../../../src/app/difinitions/setting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterSetting; });
var ViewSetting;
(function (ViewSetting) {
    ViewSetting["Grid"] = "Grid";
    ViewSetting["List"] = "List";
})(ViewSetting || (ViewSetting = {}));
var FilterSetting;
(function (FilterSetting) {
    FilterSetting["All"] = "All";
    FilterSetting["OnlyFavorites"] = "Only Favorites";
})(FilterSetting || (FilterSetting = {}));


/***/ }),

/***/ "../../../../../src/app/panoramas/components/items/default-item/default-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/panoramas/components/items/default-item/default-item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  default-item works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/panoramas/components/items/default-item/default-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__panorama_service__ = __webpack_require__("../../../../../src/app/panoramas/panorama.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultItemComponent = (function () {
    function DefaultItemComponent(panoramaService) {
        this.panoramaService = panoramaService;
        this.favouriteChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    DefaultItemComponent.prototype.ngOnInit = function () {
        this.timestampFormat = this.panoramaService.getTimestampFormat();
    };
    DefaultItemComponent.prototype.addToFavorites = function (id) {
        this.panoramaService.addFavorite(id);
        this.item.isFavorite = true;
        this.favouriteChange.emit(this.item.isFavorite);
    };
    DefaultItemComponent.prototype.removeFromFavorites = function (id) {
        this.panoramaService.removeFavorite(id);
        this.item.isFavorite = false;
        this.favouriteChange.emit(this.item.isFavorite);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], DefaultItemComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], DefaultItemComponent.prototype, "favouriteChange", void 0);
    DefaultItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-default-item',
            template: __webpack_require__("../../../../../src/app/panoramas/components/items/default-item/default-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/panoramas/components/items/default-item/default-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__panorama_service__["a" /* PanoramaService */]])
    ], DefaultItemComponent);
    return DefaultItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/panoramas/components/items/grid-item/grid-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes scroll {\n  0% {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(-100%, 0);\n    transform: translate(-100%, 0)\n  }\n}\n\n@keyframes scroll {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(-100%, 0);\n            transform: translate(-100%, 0)\n  }\n}\n\n.panorama-grid-element {\n  padding-right: 0;\n}\n\n.panorama-grid-element .well {\n  color: azure;\n  font-size: 12px;\n  height: 150px;\n  padding: 30px;\n}\n\n.margin-40 {\n  margin-bottom: 40px;\n}\n\n.grid-title {\n  cursor: pointer;\n  display: block;\n  font-weight: 600;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 49%;\n}\n\n.grid-date {\n  text-align: right;\n  width: 49%;\n}\n\n.grid-title span:hover {\n  display: inline-block;\n  padding-left: 100%;\n  -webkit-animation: scroll 5s infinite linear;\n  animation: scroll 5s infinite linear;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/panoramas/components/items/grid-item/grid-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panorama-grid-element col-xs-6 col-sm-4 col-md-4 col-lg-3\" *ngIf=\"item\">\n  <div class=\"well\" [ngStyle]=\"{'background-image':'url(' + item.data.images.thumbnails[0].url +')', 'background-size': 'cover'}\">\n    <div class=\"row\">\n      <div class=\"pull-right\">\n        <button type=\"button\" class=\"btn btn-success btn-md\" *ngIf='!item.isFavorite' (click)='addToFavorites(item.id)'>Add</button>\n        <button type=\"button\" class=\"btn btn-primary btn-md\" *ngIf='item.isFavorite' (click)='removeFromFavorites(item.id)'>Favorite</button>\n      </div>\n    </div>\n    <div class=\"margin-40\"></div>\n    <div class=\"row\">\n      <div class=\"grid-title pull-left\"><span>{{ item.data.title }}</span></div>\n      <div class=\"grid-date pull-right\"> {{ item.data.created_at | date: timestampFormat }} </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/panoramas/components/items/grid-item/grid-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_item_default_item_component__ = __webpack_require__("../../../../../src/app/panoramas/components/items/default-item/default-item.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GridItemComponent = (function (_super) {
    __extends(GridItemComponent, _super);
    function GridItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-grid-item',
            template: __webpack_require__("../../../../../src/app/panoramas/components/items/grid-item/grid-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/panoramas/components/items/grid-item/grid-item.component.css")]
        })
    ], GridItemComponent);
    return GridItemComponent;
}(__WEBPACK_IMPORTED_MODULE_1__default_item_default_item_component__["a" /* DefaultItemComponent */]));



/***/ }),

/***/ "../../../../../src/app/panoramas/components/items/list-item/list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  padding: 5px 19px;\n}\n\n.content .flex-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.content .list-title {\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 45%;\n}\n\n.content .list-date {\n  width: 30%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/panoramas/components/items/list-item/list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panorama-list-element col-sm-12\">\n  <div class=\"well content\">\n    <div class=\"flex-container\">\n      <div class=\"list-title\"> {{ item.data.title }} </div>\n      <div class=\"list-date\"> {{ item.data.created_at | date: timestampFormat }} </div>\n      <div class=\"list-button\">\n        <button type=\"button\" class=\"btn btn-success btn-sm\" *ngIf='!item.isFavorite' (click)='addToFavorites(item.id)'>Add</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" *ngIf='item.isFavorite' (click)='removeFromFavorites(item.id)'>Favorite</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/panoramas/components/items/list-item/list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__default_item_default_item_component__ = __webpack_require__("../../../../../src/app/panoramas/components/items/default-item/default-item.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ListItemComponent = (function (_super) {
    __extends(ListItemComponent, _super);
    function ListItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-list-item',
            template: __webpack_require__("../../../../../src/app/panoramas/components/items/list-item/list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/panoramas/components/items/list-item/list-item.component.css")]
        })
    ], ListItemComponent);
    return ListItemComponent;
}(__WEBPACK_IMPORTED_MODULE_1__default_item_default_item_component__["a" /* DefaultItemComponent */]));



/***/ }),

/***/ "../../../../../src/app/panoramas/panorama.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanoramaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_publishReplay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/publishReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PanoramaService = (function () {
    function PanoramaService(config, http) {
        this.config = config;
        this.http = http;
        this.favorites = localStorage.getItem('Favorites') ? localStorage.getItem('Favorites').split(',') : [];
        this.panoramasCache$ = this.http.get(this.config.appConfig.apiUrl + "/explore")
            .map(function (res) { return res.items; })
            .publishReplay(1)
            .refCount();
    }
    PanoramaService.prototype.getPanoramas = function () {
        return this.panoramasCache$;
    };
    PanoramaService.prototype.getFavorites = function () {
        this.favorites = localStorage.getItem('Favorites') ? localStorage.getItem('Favorites').split(',') : [];
        return this.favorites;
    };
    PanoramaService.prototype.addFavorite = function (id) {
        this.favorites.push(id);
        localStorage.setItem('Favorites', this.favorites.join(','));
    };
    PanoramaService.prototype.removeFavorite = function (id) {
        var it = this.favorites.indexOf(id);
        if (it !== -1) {
            this.favorites.splice(it, 1);
            localStorage.setItem('Favorites', this.favorites.join(','));
        }
    };
    PanoramaService.prototype.getTimestampFormat = function () {
        return this.config.appConfig.timestampFormat || 'dd-mm-yyyy';
    };
    PanoramaService.prototype.preparePanoramas = function (panoramas) {
        var _this = this;
        var checkedPanoramas = [];
        if (!Object(__WEBPACK_IMPORTED_MODULE_5_util__["isNullOrUndefined"])(panoramas)) {
            this.getFavorites();
            panoramas.map(function (item) {
                item.isFavorite = _this.favorites.indexOf(item.id) !== -1;
                checkedPanoramas.push(item);
            });
        }
        return checkedPanoramas;
    };
    PanoramaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PanoramaService);
    return PanoramaService;
}());



/***/ }),

/***/ "../../../../../src/app/panoramas/panoramas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanoramasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_items_grid_item_grid_item_component__ = __webpack_require__("../../../../../src/app/panoramas/components/items/grid-item/grid-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_items_list_item_list_item_component__ = __webpack_require__("../../../../../src/app/panoramas/components/items/list-item/list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_items_default_item_default_item_component__ = __webpack_require__("../../../../../src/app/panoramas/components/items/default-item/default-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_favorite_panoramas_pipe__ = __webpack_require__("../../../../../src/app/panoramas/pipes/favorite-panoramas.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PanoramasModule = (function () {
    function PanoramasModule() {
    }
    PanoramasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_items_grid_item_grid_item_component__["a" /* GridItemComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_items_list_item_list_item_component__["a" /* ListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_items_default_item_default_item_component__["a" /* DefaultItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_favorite_panoramas_pipe__["a" /* FavoritePanoramasPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_items_grid_item_grid_item_component__["a" /* GridItemComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_items_list_item_list_item_component__["a" /* ListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_items_default_item_default_item_component__["a" /* DefaultItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_favorite_panoramas_pipe__["a" /* FavoritePanoramasPipe */]
            ],
            providers: []
        })
    ], PanoramasModule);
    return PanoramasModule;
}());



/***/ }),

/***/ "../../../../../src/app/panoramas/pipes/favorite-panoramas.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePanoramasPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__difinitions__ = __webpack_require__("../../../../../src/app/difinitions/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FavoritePanoramasPipe = (function () {
    function FavoritePanoramasPipe() {
    }
    FavoritePanoramasPipe.prototype.transform = function (value, filterType) {
        if (filterType === __WEBPACK_IMPORTED_MODULE_1__difinitions__["a" /* FilterSetting */].All) {
            return value;
        }
        else {
            return value.filter((function (panorama) {
                return panorama.isFavorite === true;
            }));
        }
    };
    FavoritePanoramasPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'favoritePanoramas'
        })
    ], FavoritePanoramasPipe);
    return FavoritePanoramasPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__difinitions_setting__ = __webpack_require__("../../../../../src/app/difinitions/setting.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsService = (function () {
    function SettingsService() {
        this.filterBehaviorSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](__WEBPACK_IMPORTED_MODULE_2__difinitions_setting__["a" /* FilterSetting */].All);
        this.viewBehaviorSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](__WEBPACK_IMPORTED_MODULE_2__difinitions_setting__["b" /* ViewSetting */].Grid);
        this.sidebarVisibilityBehaviorSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
        this.filter = __WEBPACK_IMPORTED_MODULE_2__difinitions_setting__["a" /* FilterSetting */].All;
        this.view = __WEBPACK_IMPORTED_MODULE_2__difinitions_setting__["b" /* ViewSetting */].Grid;
        this.isFormVisible = true;
    }
    Object.defineProperty(SettingsService.prototype, "filterSetting", {
        get: function () {
            return this.filter;
        },
        set: function (val) {
            if (val !== this.filter) {
                this.filter = val;
                this.filterBehaviorSubject.next(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "viewSetting", {
        get: function () {
            return this.view;
        },
        set: function (val) {
            if (val !== this.view) {
                this.view = val;
                this.viewBehaviorSubject.next(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "sidebarVisibility", {
        get: function () {
            return this.isFormVisible;
        },
        set: function (val) {
            if (val !== this.isFormVisible) {
                this.isFormVisible = val;
                this.sidebarVisibilityBehaviorSubject.next(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map