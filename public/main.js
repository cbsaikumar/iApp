(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        // The query function has three params.
        // First is the event, so this will apply on entering or when the element is added to the DOM.
        // Second is a list of styles or animations to apply.
        // Third we add a config object with optional set to true, this is to signal
        // angular that the animation may not apply as it may or may not be in the DOM.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', 
        // here we apply a style and use the animate function to apply the style over 0.3 seconds
        [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main [@fadeAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\r\n    <router-outlet #o=\"outlet\"></router-outlet>\r\n    <div class=\"text-center m-auto position-relative\"><i class=\"fa fa-spinner fa-spin\" style=\"font-size:48px;\"></i></div>\r\n</main>\r\n<flash-messages class=\"container\" style=\"position: relative;\"></flash-messages>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] // register the animation
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sales/sales.component */ "./src/app/components/sales/sales.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_estimation_estimation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/estimation/estimation.component */ "./src/app/components/estimation/estimation.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ "./src/app/components/side-nav/side-nav.component.ts");
/* harmony import */ var _components_new_lead_new_lead_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/new-lead/new-lead.component */ "./src/app/components/new-lead/new-lead.component.ts");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/roles/roles.component */ "./src/app/components/roles/roles.component.ts");
/* harmony import */ var _components_sales_details_sales_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/sales-details/sales-details.component */ "./src/app/components/sales-details/sales-details.component.ts");
/* harmony import */ var _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/quote/quote.component */ "./src/app/components/quote/quote.component.ts");
/* harmony import */ var _components_fabricator_fabricator_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/fabricator/fabricator.component */ "./src/app/components/fabricator/fabricator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_13__["SalesComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_estimation_estimation_component__WEBPACK_IMPORTED_MODULE_16__["EstimationComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_17__["UsersComponent"],
                _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_20__["SideNavComponent"],
                _components_new_lead_new_lead_component__WEBPACK_IMPORTED_MODULE_21__["NewLeadComponent"],
                _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_22__["RolesComponent"],
                _components_sales_details_sales_details_component__WEBPACK_IMPORTED_MODULE_23__["SalesDetailsComponent"],
                _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_24__["QuoteComponent"],
                _components_fabricator_fabricator_component__WEBPACK_IMPORTED_MODULE_25__["FabricatorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__["FlashMessagesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_15__["FlashMessagesService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_18__["AdminGuard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["PathLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/roles/roles.component */ "./src/app/components/roles/roles.component.ts");
/* harmony import */ var _components_estimation_estimation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/estimation/estimation.component */ "./src/app/components/estimation/estimation.component.ts");
/* harmony import */ var _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sales/sales.component */ "./src/app/components/sales/sales.component.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_new_lead_new_lead_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/new-lead/new-lead.component */ "./src/app/components/new-lead/new-lead.component.ts");
/* harmony import */ var _components_sales_details_sales_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sales-details/sales-details.component */ "./src/app/components/sales-details/sales-details.component.ts");
/* harmony import */ var _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/quote/quote.component */ "./src/app/components/quote/quote.component.ts");
/* harmony import */ var _components_fabricator_fabricator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/fabricator/fabricator.component */ "./src/app/components/fabricator/fabricator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'sales', component: _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_6__["SalesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'sales/:bid_number', component: _components_sales_details_sales_details_component__WEBPACK_IMPORTED_MODULE_10__["SalesDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'new-lead', component: _components_new_lead_new_lead_component__WEBPACK_IMPORTED_MODULE_9__["NewLeadComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'estimation/:bid_number', component: _components_estimation_estimation_component__WEBPACK_IMPORTED_MODULE_5__["EstimationComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'fabricator', component: _components_fabricator_fabricator_component__WEBPACK_IMPORTED_MODULE_12__["FabricatorComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'quote/:bid_number', component: _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_11__["QuoteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"]] },
    { path: 'roles', component: _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"]] },
    { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/estimation/estimation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/estimation/estimation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header,\r\n.marketing,\r\n.footer {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n/* Custom page header */\r\n\r\n.header {\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n/* Make the masthead heading the same height as the navigation */\r\n\r\n.header h3 {\r\n  padding-bottom: 19px;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  line-height: 40px;\r\n}\r\n\r\n/* Custom page footer */\r\n\r\n.footer {\r\n  padding-top: 19px;\r\n  color: #777;\r\n  border-top: 1px solid #e5e5e5;\r\n}\r\n\r\n/* Customize container */\r\n\r\n@media (min-width: 768px) {\r\n  .container {\r\n    max-width: 730px;\r\n  }\r\n}\r\n\r\n.container-narrow > hr {\r\n  margin: 30px 0;\r\n}\r\n\r\n/* Main marketing message and sign up button */\r\n\r\n.jumbotron {\r\n  text-align: center;\r\n  border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n.jumbotron .btn {\r\n  padding: 14px 24px;\r\n  font-size: 21px;\r\n}\r\n\r\n/* Supporting marketing content */\r\n\r\n.marketing {\r\n  margin: 40px 0;\r\n}\r\n\r\n.marketing p + h4 {\r\n  margin-top: 28px;\r\n}\r\n\r\n/* Responsive: Portrait tablets and up */\r\n\r\n@media screen and (min-width: 768px) {\r\n  /* Remove the padding we set earlier */\r\n  .header,\r\n  .marketing,\r\n  .footer {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n  /* Space out the masthead */\r\n  .header {\r\n    margin-bottom: 30px;\r\n  }\r\n  /* Remove the bottom border on the jumbotron for visual effect */\r\n  .jumbotron {\r\n    border-bottom: 0;\r\n  }\r\n}\r\n\r\n.submit-btn{\r\n    background-color: #33679a;\r\n}\r\n\r\ninput[type=radio] {\r\n    box-sizing: border-box;\r\n    margin-right: 8px;\r\n}\r\n\r\n.well {\r\n  min-height: 20px;\r\n  padding: 19px;\r\n  margin-bottom: 20px;\r\n  background-color: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n}\r\n\r\nlabel {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  font-size: 0.7rem;\r\n  margin-bottom: 5px;\r\n  font-weight: 700;\r\n}\r\n\r\n.inclusions p{\r\n  display: inline;\r\n}\r\n\r\n.inclusions{\r\n  padding-left: 0px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/estimation/estimation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/estimation/estimation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n    <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n        <div class=\"login-info\">\n            <span>\n                <!-- User image size is adjusted inside CSS, it should stay as it -->\n                <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n                    <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n                    <span>\n                        john.doe\n                    </span>\n                </a>\n            </span>\n        </div>\n        <ul>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n                    <span class=\"menu-item-parent\">Sales</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n                    <span class=\"menu-item-parent\">Users</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n                    <span class=\"menu-item-parent\">Roles</span>\n                </a>\n            </li>\n        </ul>\n\n        <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n            <i class=\"fa fa-arrow-circle-left hit\"></i>\n        </span>\n    </div>\n</aside>\n\n<div id=\"main\" #main>\n    <div id=\"ribbon\">\n        <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n        <span class=\"ribbon-button-alignment\">\n            <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n                data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n                data-html=\"true\">\n                <i class=\"fa fa-refresh\"></i>\n            </span>\n        </span>\n\n        <!-- breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li>Home</li>\n            <li>{{title}}</li>\n        </ol>\n        <div id=\"logout\" class=\"btn-header transparent pull-right\">\n            <span>\n                <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n                    <i class=\"fa fa-sign-out\"></i>\n                </a>\n            </span>\n        </div>\n        <!-- end breadcrumb -->\n    </div>\n    <app-navbar></app-navbar>\n\n    <div id=\"estimation\" #estimation class=\"container\" *ngIf=\"!submitSuccess || submitted \">\n        <div class=\"col-lg-12 well\">\n            <div class=\"row\">\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                    <p>Bid Number</p>\n                </div>\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                    <input type=\"text\" value=\"{{bid_number}}\" disabled placeholder=\"Enter Bid Number Here..\" class=\"form-control\">\n                </div>\n                <form [formGroup]=\"estimationInfoForm\">\n                    <h5 class=\"col-sm-6 form-group\">Estimation Info</h5>\n                    <div class=\"col-sm-12\">\n                        <div class=\"row\" id=\"print-section\">\n                            <div class=\"col-sm-6 col-lg-6 \">\n                                <label>Main Steel Hours</label>\n                                <input type=\"number\" formControlName=\"main_steel_hours\" required placeholder=\"Enter Main Steel Hours Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-6 col-lg-6 \">\n                                <label>Main Steel Estimated Schedule</label>\n                                <input type=\"date\" formControlName=\"main_steel_est_schedule\" required placeholder=\"Enter Main Steel Estimated Schedule Here..\"\n                                    class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-6 col-lg-6 \">\n                                <label>Misc Steel Hours</label>\n                                <input type=\"number\" formControlName=\"misc_steel_hours\" required placeholder=\"Enter Misc Steel Hours Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-6 col-lg-6\">\n                                <label>Misc Steel Estimated Schedule</label>\n                                <input type=\"date\" formControlName=\"misc_steel_est_schedule\" required placeholder=\"Enter Misc Steel Estimated Schedule Here..\"\n                                    class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-12 col-lg-12 col-md-12\">\n                                <label>Inclusions</label>\n                                <p *ngFor=\"let inclusion of misc_inclusions\">\n                                    <input type=\"checkbox\" #inc (change)=\"addInclusion(inc, $event)\" value=\"{{inclusion.misc_inc_desc}}\">{{inclusion.misc_inc_desc}}\n                                </p>\n                            </div>\n                            <div class=\"col-sm-12 col-lg-12 col-md-12\">\n                                <label>Exclusions</label>\n                                <p *ngFor=\"let exclusion of misc_exclusions\">\n                                    <input type=\"checkbox\" #exc (change)=\"addExclusion(exc, $event)\" value=\"{{exclusion.misc_exc_desc}}\">{{exclusion.misc_exc_desc}}\n                                </p>\n                            </div>\n                            <div class=\"col-sm-12 col-lg-12 col-md-12\">\n                                <label>Remarks/Comments</label>\n                                <textarea placeholder=\"Enter Remarks/Comments Here..\" required formControlName=\"comments\" rows=\"3\" class=\"form-control\" name=\"comments\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <button type=\"button\" (click)=\"save(estimationInfoForm.value, false)\" [disabled]=\"!estimationInfoForm.valid\" class=\"btn btn-sm btn-info submit-btn m-2 col-lg-3 col-md-3 col-sm-5\">Save</button>\n                            <button type=\"button\" (click)=\"save(estimationInfoForm.value, true)\" [disabled]=\"!estimationInfoForm.valid\" class=\"btn btn-sm btn-info submit-btn m-2 col-lg-3 col-md-3 col-sm-5\">Publish</button>\n                            <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-sm btn-info submit-btn m-2 col-lg-3 col-md-3 col-sm-5\">Cancel</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-100 container well\" *ngIf=\"submitSuccess\">\n        <div class=\"text-center\">\n            <i class=\"fa fa-5x fa-check-circle\" style=\"color: green;\"></i>\n        </div>\n        <div class=\"\">\n            <span class=\"text-center\">\n                <h6>Added Quotation data.</h6>\n            </span>\n        </div>\n        <div class=\"alert alert-success text-center\">\n            <strong>Success!</strong> Added Successfully.\n        </div>\n    </div>\n    <div class=\"container well\" *ngIf=\"submitted\">\n        <div class=\"text-center\">\n            <i class=\"fa fa-5x fa-frown\" style=\"color: orangered;\"></i>\n        </div>\n        <div class=\"\">\n            <span class=\"text-center\">\n                <h6>Try again. You can either try again or go back.</h6>\n            </span>\n        </div>\n        <div class=\"alert alert-danger text-center\">\n            <strong>Error!</strong> Unsuccessful.\n        </div>\n    </div>\n    <div *ngIf=\"submitted && !submitSuccess\" class=\"text-center\">\n        <button type=\"button\" (click)=\"tryAgain()\" class=\"btn btn-info btn-md mt-4 button-custom\" style=\"background-color:#33679a; border-color:#33679a;\">Try Again</button>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/estimation/estimation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/estimation/estimation.component.ts ***!
  \***************************************************************/
/*! exports provided: Estimation, EstimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estimation", function() { return Estimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimationComponent", function() { return EstimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var dt = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
var Estimation = /** @class */ (function () {
    function Estimation(main_steel_hours, main_steel_est_schedule, misc_steel_hours, misc_steel_est_schedule, status, comments, sales_id, inclusion, exclusion) {
        if (main_steel_hours === void 0) { main_steel_hours = 0; }
        if (misc_steel_hours === void 0) { misc_steel_hours = 0; }
        if (status === void 0) { status = ''; }
        if (comments === void 0) { comments = ''; }
        if (sales_id === void 0) { sales_id = ''; }
        if (inclusion === void 0) { inclusion = ''; }
        if (exclusion === void 0) { exclusion = ''; }
        this.main_steel_hours = main_steel_hours;
        this.main_steel_est_schedule = main_steel_est_schedule;
        this.misc_steel_hours = misc_steel_hours;
        this.misc_steel_est_schedule = misc_steel_est_schedule;
        this.status = status;
        this.comments = comments;
        this.sales_id = sales_id;
        this.inclusion = inclusion;
        this.exclusion = exclusion;
    }
    return Estimation;
}());

var EstimationComponent = /** @class */ (function () {
    function EstimationComponent(fb, authService, flashMessage, router, activateRoute) {
        this.fb = fb;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.activateRoute = activateRoute;
        this.title = "Estimation";
        this.inclusions = [];
        this.exclusions = [];
        this.bidTypes = ['Structural', 'Miscellaneous', 'Engineering'];
        this.selectBidTypes = [];
    }
    EstimationComponent.prototype.save = function (estimationForm, canPublish) {
        var _this = this;
        console.log("estimationForm", estimationForm);
        var sales_id = sessionStorage.getItem('sales_id');
        console.log('sales_id', sales_id);
        var newEstimationForm;
        newEstimationForm = estimationForm;
        if (canPublish) {
            newEstimationForm.status = "Estimate Received";
        }
        else {
            newEstimationForm.status = "Estimate Pending";
        }
        newEstimationForm.sales_id = sales_id;
        newEstimationForm.inclusion = this.inclusions.toString();
        newEstimationForm.exclusion = this.exclusions.toString();
        console.log("newEstimationForm", newEstimationForm);
        this.authService.addEstimation(newEstimationForm).subscribe(function (data) {
            console.log("subscribe", data);
            if (data.affectedRows > 0) {
                _this.submitSuccess = !_this.submitSuccess;
            }
            else {
                _this.submitted = !_this.submitted;
            }
        });
    };
    EstimationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getInclusions().subscribe(function (data) {
            _this.misc_inclusions = data.data;
        });
        this.authService.getExclusions().subscribe(function (data) {
            _this.misc_exclusions = data.data;
        });
        var bid_number = this.activateRoute.snapshot.params['bid_number'];
        console.log("got bid number as", bid_number);
        this.bid_number = bid_number;
        this.estimationInfoForm = this.fb.group({
            main_steel_hours: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            main_steel_est_schedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            misc_steel_hours: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            misc_steel_est_schedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        //this.quoteInfoForm.disable();
    };
    ;
    EstimationComponent.prototype.addInclusion = function (inc, event) {
        if (event.target.checked === true) {
            this.inclusions.push(inc.value);
        }
        else {
            var index = this.inclusions.indexOf(inc.value);
            this.inclusions.splice(index, 1);
        }
        console.log(this.inclusions);
    };
    EstimationComponent.prototype.cancel = function () {
        history.back();
    };
    EstimationComponent.prototype.tryAgain = function () {
        this.submitSuccess = false;
        this.submitted = false;
    };
    EstimationComponent.prototype.addExclusion = function (exc, event) {
        if (event.target.checked === true) {
            this.exclusions.push(exc.value);
        }
        else {
            var index = this.exclusions.indexOf(exc.value);
            this.exclusions.splice(index, 1);
        }
        console.log(this.exclusions);
    };
    EstimationComponent.prototype.openNav = function () {
        this.showMenu = false;
        this.mySideNav.nativeElement.style.width = "250px";
        this.main.nativeElement.style.marginLeft = "250px";
    };
    EstimationComponent.prototype.closeNav = function () {
        this.showMenu = true;
        this.mySideNav.nativeElement.style.width = "0";
        this.main.nativeElement.style.marginLeft = "0";
    };
    EstimationComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success text-center', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mySidenav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EstimationComponent.prototype, "mySideNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('main'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EstimationComponent.prototype, "main", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('estimation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EstimationComponent.prototype, "estimation", void 0);
    EstimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estimation',
            template: __webpack_require__(/*! ./estimation.component.html */ "./src/app/components/estimation/estimation.component.html"),
            styles: [__webpack_require__(/*! ../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css */ "./node_modules/datatables.net-dt/css/jquery.dataTables.css"), __webpack_require__(/*! ./estimation.component.css */ "./src/app/components/estimation/estimation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EstimationComponent);
    return EstimationComponent;
}());



/***/ }),

/***/ "./src/app/components/fabricator/fabricator.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/fabricator/fabricator.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n  <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n      <div class=\"login-info\">\n          <span>\n              <!-- User image size is adjusted inside CSS, it should stay as it -->\n              <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n                  <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n                  <span>\n                      john.doe\n                  </span>\n              </a>\n          </span>\n      </div>\n      <ul>\n          <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n                  <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n                  <span class=\"menu-item-parent\">Sales</span>\n              </a>\n          </li>\n          <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n                  <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n                  <span class=\"menu-item-parent\">Users</span>\n              </a>\n          </li>\n          <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n                  <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n                  <span class=\"menu-item-parent\">Roles</span>\n              </a>\n          </li>\n      </ul>\n\n      <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n          <i class=\"fa fa-arrow-circle-left hit\"></i>\n      </span>\n  </div>\n</aside>\n\n<div id=\"main\" #main>\n  <div id=\"ribbon\">\n      <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n      <span class=\"ribbon-button-alignment\">\n          <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n              data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n              data-html=\"true\">\n              <i class=\"fa fa-refresh\"></i>\n          </span>\n      </span>\n\n      <!-- breadcrumb -->\n      <ol class=\"breadcrumb\">\n          <li>Home</li>\n          <li>{{title}}</li>\n      </ol>\n      <div id=\"logout\" class=\"btn-header transparent pull-right\">\n          <span>\n              <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n                  <i class=\"fa fa-sign-out\"></i>\n              </a>\n          </span>\n      </div>\n      <!-- end breadcrumb -->\n  </div>\n  <app-navbar></app-navbar>\n\n  <div id=\"fabricator\" class=\"container\" *ngIf=\"!submitted && !submitSuccess\">\n      <div class=\"col-lg-12 well\">\n          <div class=\"row\">\n              <form [formGroup]=\"fabricatorInfoForm\" (ngSubmit)=\"addFabricator(fabricatorInfoForm.value)\">\n                  <h5 class=\"col-sm-6 form-group\">Add Fabricator Info</h5>\n                  <div class=\"col-sm-12\">\n                      <div class=\"row\">\n                          <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                              <label>Fabricator</label>\n                              <input type=\"text\" formControlName=\"fabricator_name\" required placeholder=\"Enter Fabricator Name Here..\" class=\"form-control\">\n                              <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['fabricator_name'].valid && fabricatorInfoForm.controls['fabricator_name'].touched\">Fabricator is required</div>\n                          </div>\n                          <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                              <label>Contact Name</label>\n                              <input type=\"text\" formControlName=\"fabricator_contact_name\" required placeholder=\"Enter Contact Name Here..\" class=\"form-control\">\n                              <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['fabricator_contact_name'].valid && fabricatorInfoForm.controls['fabricator_contact_name'].touched\">Contact Name is required</div>\n                          </div>\n                          <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                              <label>E-Mail</label>\n                              <input type=\"email\" formControlName=\"fabricator_email\" required placeholder=\"Enter Email Here..\"\n                                  class=\"form-control\">\n                                <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['fabricator_email'].valid && fabricatorInfoForm.controls['fabricator_email'].touched\">Enter valid email id.</div>\n                          </div>\n                          <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                              <label>Phone</label>\n                              <input type=\"tel\" formControlName=\"fabricator_phone\" required placeholder=\"Enter Phone Here..\" class=\"form-control\">\n                              <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['fabricator_phone'].valid && fabricatorInfoForm.controls['fabricator_phone'].touched\">Phone is required</div>\n                          </div>\n                          <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                              <label>Website</label>\n                              <input type=\"url\" formControlName=\"fabricator_website\" required placeholder=\"Enter Website Here..\" class=\"form-control\">\n                              <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['fabricator_website'].valid && fabricatorInfoForm.controls['fabricator_website'].touched\">Website is required</div>\n                          </div>\n                          <div class=\"col-sm-12 col-lg-12 col-md-12\">\n                              <label>Address</label>\n                              <textarea placeholder=\"Enter Address Here..\"  required formControlName=\"fabricator_address\" rows=\"3\" class=\"form-control\" name=\"address\"></textarea>\n                              <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['fabricator_address'].valid && fabricatorInfoForm.controls['fabricator_address'].touched\">Address is required</div>\n                          </div>\n                        </div>\n                      <div class=\"row\">\n                          <button type=\"submit\" [disabled]=\"!fabricatorInfoForm.valid\" class=\"btn btn-sm btn-info submit-btn m-3 ml-auto mr-auto col-lg-4 col-md-4 col-sm-12\">Add</button>\n                      </div>\n                  </div>\n              </form>\n          </div>\n      </div>\n  </div>\n  <div class=\"p-100 m-10 container well\" *ngIf=\"submitSuccess\">\n      <div class=\"text-center\">\n          <i class=\"fa fa-5x fa-check-circle\" style=\"color: green;\"></i>\n      </div>\n      <div class=\"\">\n          <span class=\"text-center\">\n              <h6>Added Fabricator data.</h6>\n          </span>\n      </div>\n      <div class=\"alert alert-success text-center\">\n          <strong>Success!</strong> Added Successfully.\n      </div>\n  </div>\n  <div class=\"container well\" *ngIf=\"submitted\">\n      <div class=\"text-center\">\n          <i class=\"fa fa-5x fa-frown\" style=\"color: orangered;\"></i>\n      </div>\n      <div class=\"\">\n          <span class=\"text-center\">\n              <h6>Try again. You can either try again or go back.</h6>\n          </span>\n      </div>\n      <div class=\"alert alert-danger text-center\">\n          <strong>Error!</strong> Unsuccessful.\n      </div>\n  </div>\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/fabricator/fabricator.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/fabricator/fabricator.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header,\n.marketing,\n.footer {\n  padding-right: 15px;\n  padding-left: 15px; }\n\n/* Custom page header */\n\n.header {\n  border-bottom: 1px solid #e5e5e5; }\n\n/* Make the masthead heading the same height as the navigation */\n\n.header h3 {\n  padding-bottom: 19px;\n  margin-top: 0;\n  margin-bottom: 0;\n  line-height: 40px; }\n\n/* Custom page footer */\n\n.footer {\n  padding-top: 19px;\n  color: #777;\n  border-top: 1px solid #e5e5e5; }\n\n/* Customize container */\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 730px; } }\n\n.container-narrow > hr {\n  margin: 30px 0; }\n\n/* Main marketing message and sign up button */\n\n.jumbotron {\n  text-align: center;\n  border-bottom: 1px solid #e5e5e5; }\n\n.jumbotron .btn {\n  padding: 14px 24px;\n  font-size: 21px; }\n\n/* Supporting marketing content */\n\n.marketing {\n  margin: 40px 0; }\n\n.marketing p + h4 {\n  margin-top: 28px; }\n\n/* Responsive: Portrait tablets and up */\n\n@media screen and (min-width: 768px) {\n  /* Remove the padding we set earlier */\n  .header,\n  .marketing,\n  .footer {\n    padding-right: 0;\n    padding-left: 0; }\n  /* Space out the masthead */\n  .header {\n    margin-bottom: 30px; }\n  /* Remove the bottom border on the jumbotron for visual effect */\n  .jumbotron {\n    border-bottom: 0; } }\n\n.submit-btn {\n  background-color: #33679a; }\n\ninput[type=radio] {\n  box-sizing: border-box;\n  margin-right: 8px; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  font-size: 0.7rem;\n  margin-bottom: 5px;\n  font-weight: 700; }\n\n.inclusions p {\n  display: inline; }\n\n.inclusions {\n  padding-left: 0px; }\n"

/***/ }),

/***/ "./src/app/components/fabricator/fabricator.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/fabricator/fabricator.component.ts ***!
  \***************************************************************/
/*! exports provided: Fabricator, FabricatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fabricator", function() { return Fabricator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricatorComponent", function() { return FabricatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Fabricator = /** @class */ (function () {
    function Fabricator(fabricator_name, fabricator_contact_name, fabricator_email, fabricator_phone, fabricator_website, fabricator_address) {
        if (fabricator_name === void 0) { fabricator_name = ''; }
        if (fabricator_contact_name === void 0) { fabricator_contact_name = ''; }
        if (fabricator_email === void 0) { fabricator_email = ''; }
        if (fabricator_phone === void 0) { fabricator_phone = ''; }
        if (fabricator_website === void 0) { fabricator_website = ''; }
        if (fabricator_address === void 0) { fabricator_address = ''; }
        this.fabricator_name = fabricator_name;
        this.fabricator_contact_name = fabricator_contact_name;
        this.fabricator_email = fabricator_email;
        this.fabricator_phone = fabricator_phone;
        this.fabricator_website = fabricator_website;
        this.fabricator_address = fabricator_address;
    }
    return Fabricator;
}());

var FabricatorComponent = /** @class */ (function () {
    function FabricatorComponent(fb, authService, flashMessage, router, activateRoute) {
        this.fb = fb;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.activateRoute = activateRoute;
        this.title = "Fabricator";
    }
    FabricatorComponent.prototype.ngOnInit = function () {
        this.fabricatorInfoForm = this.fb.group({
            fabricator_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            fabricator_contact_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            fabricator_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            fabricator_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            fabricator_website: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            fabricator_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    FabricatorComponent.prototype.addFabricator = function (fabricatorInfoForm) {
        var _this = this;
        console.log("Fabricator", fabricatorInfoForm);
        this.authService.addFabricator(fabricatorInfoForm).subscribe(function (data) {
            console.log("subscribe", data);
            if (data.affectedRows > 0) {
                _this.submitSuccess = !_this.submitSuccess;
            }
            else {
                _this.submitted = !_this.submitted;
            }
        });
    };
    FabricatorComponent.prototype.openNav = function () {
        this.showMenu = false;
        this.mySideNav.nativeElement.style.width = "250px";
        this.main.nativeElement.style.marginLeft = "250px";
    };
    FabricatorComponent.prototype.closeNav = function () {
        this.showMenu = true;
        this.mySideNav.nativeElement.style.width = "0";
        this.main.nativeElement.style.marginLeft = "0";
    };
    FabricatorComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success text-center', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mySidenav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FabricatorComponent.prototype, "mySideNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('main'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FabricatorComponent.prototype, "main", void 0);
    FabricatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fabricator',
            template: __webpack_require__(/*! ./fabricator.component.html */ "./src/app/components/fabricator/fabricator.component.html"),
            styles: [__webpack_require__(/*! ./fabricator.component.scss */ "./src/app/components/fabricator/fabricator.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FabricatorComponent);
    return FabricatorComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \r\n  .footer {\r\n    position: relative;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 60px;\r\n    background-color: #33679a;\r\n    text-align: center;\r\n  }\r\n  i{\r\n    padding-top: 20px;\r\n  }\r\n  .fa-2x {\r\n    font-size: 1.5em;\r\n  }\r\n  .fa-twitter {\r\n      color: #fff;\r\n  }\r\n  .fa-facebook {\r\n      color: #fff;\r\n  }\r\n  .fa-youtube-play {\r\n      color: #fff;\r\n  }\r\n  .fa-rss {\r\n      color: #fff;\r\n  }\r\n  .fa-vine {\r\n      color: #fff;\r\n  }\r\n  .fa-flickr {\r\n      color: #fff;\r\n  }\r\n  .fa-twitch {\r\n      color: #fff;\r\n  }\r\n  .fa-linkedin {\r\n      color: #fff;\r\n  }\r\n  .fa {\r\n      opacity: 0.7;\r\n      transition: 1s;\r\n      -webkit-transition: 1s;\r\n  }\r\n  .fa:hover{\r\n      opacity: 1;\r\n      transition: 1s;\r\n      -webkit-transition: 1s;\r\n  }"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  \n          <a href='#'><i class=\"fa fa-twitch fa-2x fa-fw\"></i></a>\n          <a href='#'><i class=\"fa fa-facebook fa-2x fa-fw\"></i></a>\n          <a href='#'><i class=\"fa fa-twitter fa-2x fa-fw\"></i></a>\n          <a href='#'><i class=\"fa fa-youtube-play fa-2x fa-fw\"></i></a>\n          <a href='#'><i class=\"fa fa-rss fa-2x fa-fw\"></i></a>\n          <a href='#'><i class=\"fa fa-vine fa-2x fa-fw\"></i></a>\n          <a href='#'><i class=\"fa fa-flickr fa-2x fa-fw\"></i></a>\n          <a href='#'><i class=\"fa fa-linkedin fa-2x fa-fw\"></i></a>\n\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var dt = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(rootNode, authService) {
        this.authService = authService;
        this.rootNode = rootNode;
    }
    HomeComponent.prototype.ngOnInit = function () {
        $('#example').DataTable();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css */ "./node_modules/datatables.net-dt/css/jquery.dataTables.css"), __webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-heading {\r\n    padding: 5px 15px;\r\n}\r\n\r\n.panel-footer {\r\n\tpadding: 1px 15px;\r\n\tcolor: #A0A0A0;\r\n}\r\n\r\n.profile-img {\r\n\twidth: 96px;\r\n\theight: 96px;\r\n\tmargin: 0 auto 10px;\r\n\tdisplay: block;\r\n\tborder-radius: 50%;\r\n}\r\n\r\nbody {\r\n    padding-top: 15px;\r\n    font-size: 12px\r\n  }\r\n\r\n.main {\r\n    max-width: 320px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.login-or {\r\n    position: relative;\r\n    font-size: 18px;\r\n    color: #aaa;\r\n    margin-top: 10px;\r\n            margin-bottom: 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n.span-or {\r\n    display: block;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: -2px;\r\n    margin-left: -25px;\r\n    background-color: #fff;\r\n    width: 50px;\r\n    text-align: center;\r\n  }\r\n\r\n.hr-or {\r\n    background-color: #cdcdcd;\r\n    height: 1px;\r\n    margin-top: 0px !important;\r\n    margin-bottom: 0px !important;\r\n  }\r\n\r\nh3 {\r\n    text-align: center;\r\n    line-height: 300%;\r\n  }"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"container\">\n  <div class=\"row well\">\n    <div class=\"main\">\n      <h3>Please Log In, or\n        <a href=\"#\">Sign Up</a>\n      </h3>\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-6 col-md-6\">\n          <a href=\"#\" class=\"btn btn-lg btn-primary btn-block\">Facebook</a>\n        </div>\n        <div class=\"col-xs-6 col-sm-6 col-md-6\">\n          <a href=\"#\" class=\"btn btn-lg btn-info btn-block\">Google</a>\n        </div>\n      </div>\n      <div class=\"login-or\">\n        <hr class=\"hr-or\">\n        <span class=\"span-or\">or</span>\n      </div>\n\n      <form role=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm);\">\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-user\"></i>\n            </span>\n            <input class=\"form-control\" ngModel #nameField=\"ngModel\" placeholder=\"Username\" name=\"username\" type=\"text\" required autofocus>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"glyphicon glyphicon-lock\"></i>\n            </span>\n            <input class=\"form-control\" ngModel #nameField=\"ngModel\" placeholder=\"Password\" name=\"password\" type=\"password\" value=\"\"\n              required>\n          </div>\n        </div>\n        <div class=\"checkbox pull-right\">\n          <label>\n            <input type=\"checkbox\" ngModel #nameField=\"ngModel\" name=\"remember\"> Remember me </label>\n        </div>\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn btn-primary\">\n          Log In\n        </button>\n      </form>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (loginForm) {
        var _this = this;
        var username = loginForm.value.username;
        var password = loginForm.value.password;
        this.authService.login(username, password).subscribe(function (data) {
            if (data && data.user_token) {
                _this.flashMessage.show("You are now logged in", { cssClass: 'alert-success text-center', timeout: 3000 });
                sessionStorage.setItem("user_role_code", data.user_role_code);
                sessionStorage.setItem("user_token", data.user_token);
                _this.router.navigate(['sales']);
            }
            else {
                _this.flashMessage.show("You are not authorized!", { cssClass: 'alert-danger text-center', timeout: 3000 });
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand-custom{\r\n    margin: 5px;\r\n    padding-right: 100px;\r\n    color:white !important;\r\n    padding-bottom: 0px !important;\r\n}\r\n.navbar-custom{\r\n    padding-left: 0px;\r\n}\r\n.bg-dark {\r\n    background-color: #33679a!important;\r\n}\r\n.navbar-brand {\r\n    padding: 0px;\r\n  }\r\n.navbar-brand>img {\r\n    height: 100%;\r\n    padding-left: 14px;\r\n    width: 75%;\r\n  }\r\n/* The side navigation menu */\r\n.sidenav {\r\n    height: 100%; /* 100% Full-height */\r\n    width: 0; /* 0 width - change this with JavaScript */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Stay on top */\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111; /* Black*/\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    padding-top: 60px; /* Place content 60px from the top */\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\r\n}\r\n/* The navigation menu links */\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n/* When you mouse over the navigation links, change their color */\r\n.sidenav a:hover{\r\n    color: #f1f1f1;\r\n}\r\n/* Position and style the close button (top right corner) */\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\r\n#main {\r\n    transition: margin-left .5s;\r\n    padding: 20px;\r\n}\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark navbar-custom\">\n    <button class=\"navbar-toggler\" (click)=\"collapse=!collapse\" type=\"button\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div style=\"display: inline !important;\" class=\"navbar-collapse\" (click)=\"collapse=false\" [hidden]=\"!collapse\">\n      <ul class=\"navbar-nav mr-auto pull-right\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink] = \"['/sales']\">Sales\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink] = \"['/users']\">Users</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink] = \"['/roles']\">Roles</a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"\" (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authService, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success text-center', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-lead/new-lead.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/new-lead/new-lead.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n    <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n        <div class=\"login-info\">\n            <span>\n                <!-- User image size is adjusted inside CSS, it should stay as it -->\n                <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n                    <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n                    <span>\n                        john.doe\n                    </span>\n                </a>\n            </span>\n        </div>\n        <ul>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n                    <span class=\"menu-item-parent\">Sales</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n                    <span class=\"menu-item-parent\">Users</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n                    <span class=\"menu-item-parent\">Roles</span>\n                </a>\n            </li>\n        </ul>\n\n        <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n            <i class=\"fa fa-arrow-circle-left hit\"></i>\n        </span>\n    </div>\n</aside>\n\n<div id=\"main\" #main>\n    <div id=\"ribbon\">\n        <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n        <span class=\"ribbon-button-alignment\">\n            <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n                data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n                data-html=\"true\">\n                <i class=\"fa fa-refresh\"></i>\n            </span>\n        </span>\n\n        <!-- breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li>Home</li>\n            <li>{{title}}</li>\n        </ol>\n        <div id=\"logout\" class=\"btn-header transparent pull-right\">\n            <span>\n                <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n                    <i class=\"fa fa-sign-out\"></i>\n                </a>\n            </span>\n        </div>\n        <!-- end breadcrumb -->\n    </div>\n    <app-navbar></app-navbar>\n\n    <div class=\"m-5\" *ngIf=\"!submitted && !submitSuccess\">\n        <div class=\"col-lg-12 well\">\n            <div class=\"row\">\n                <form [formGroup]=\"newLeadForm\" style=\"width: 100%;\" autocomplete=\"on\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"row\" formGroupName=\"fabricatorInfoForm\">\n                            <div class=\"col-sm-6 col-lg-6 col-md-6 form-group\">\n                                <p>Select a fabricator</p>\n                            </div>\n                            <div class=\"col-sm-6 col-lg-6 col-md-6 form-group\">\n                                <select name=\"fabricator\" class=\"form-control\" (change)=\"onChange($event)\" formControlName=\"fabricator_name\">\n                                    <option value=\"\" selected>Choose an option</option>\n                                    <option *ngFor=\"let fabricator of fabricators\" value=\"{{fabricator.fabricator_name}}\">{{fabricator.fabricator_name}}</option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"showFabricatorInfo\" class=\"row m-1\">\n                                <h5 class=\"col-sm-12 col-lg-12 col-md-12\">Fabricator Info</h5>\n                                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                                    <label>Contact Name</label>\n                                    <input type=\"text\" formControlName=\"fabricator_contact_name\" placeholder=\"Enter Contact Name Here..\" class=\"form-control\">\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['contact_name'].valid && fabricatorInfoForm.controls['contact_name'].touched\">Contact Name is required</div> -->\n                                </div>\n                                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                                    <label>E-Mail</label>\n                                    <input type=\"email\" formControlName=\"fabricator_email\" placeholder=\"Enter Email Here..\" class=\"form-control\">\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['email'].valid && fabricatorInfoForm.controls['email'].touched\">Enter valid email id.</div> -->\n                                </div>\n                                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                                    <label>Phone</label>\n                                    <input type=\"tel\" formControlName=\"fabricator_phone\" placeholder=\"Enter Phone Here..\" class=\"form-control\">\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['phone'].valid && fabricatorInfoForm.controls['phone'].touched\">Phone is required</div> -->\n                                </div>\n                                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                                    <label>Website</label>\n                                    <input type=\"url\" formControlName=\"fabricator_website\" placeholder=\"Enter Website Here..\" class=\"form-control\">\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['website'].valid && fabricatorInfoForm.controls['website'].touched\">Website is required</div> -->\n                                </div>\n                                <div class=\"col-sm-12 col-lg-12 col-md-12\">\n                                    <label>Address</label>\n                                    <textarea placeholder=\"Enter Address Here..\" formControlName=\"fabricator_address\" rows=\"3\" class=\"form-control\" name=\"address\"></textarea>\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['address'].valid && fabricatorInfoForm.controls['address'].touched\">Address is required</div> -->\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"showFabricatorInfo\" formGroupName=\"bidInfoForm\" style=\"border-left: none;\">\n                            <h5 class=\"col-sm-12 col-lg-12 col-md-12\">Bid Info</h5>\n                            <div class=\"row m-1\">\n                                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                                    <label>Project Name</label>\n                                    <input type=\"text\" formControlName=\"project_name\" required placeholder=\"Enter Project Name Here..\" class=\"form-control\">\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['contact_name'].valid && fabricatorInfoForm.controls['contact_name'].touched\">Contact Name is required</div> -->\n                                </div>\n                                <div class=\"col-sm-12 col-lg-12 col-md-12\">\n                                    <label>Project Address</label>\n                                    <textarea placeholder=\"Enter Project Address Here..\" required formControlName=\"project_address\" rows=\"3\" class=\"form-control\"\n                                        name=\"address\"></textarea>\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['address'].valid && fabricatorInfoForm.controls['address'].touched\">Address is required</div> -->\n                                </div>\n                                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                                    <label>Bid Received Date</label>\n                                    <input type=\"date\" formControlName=\"bid_received_date\" required placeholder=\"Enter Bid Received Date Here..\" class=\"form-control\">\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['email'].valid && fabricatorInfoForm.controls['email'].touched\">Enter valid email id.</div> -->\n                                </div>\n                                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                                    <label>Bid Due Date</label>\n                                    <input type=\"date\" formControlName=\"bid_due_date\" required placeholder=\"Enter Bid Due Date Here..\" class=\"form-control\">\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['phone'].valid && fabricatorInfoForm.controls['phone'].touched\">Phone is required</div> -->\n                                </div>\n                                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                                    <label>Bid Received From</label>\n                                    <input type=\"text\" formControlName=\"bid_received_from\" required placeholder=\"Enter Document Received Here..\" class=\"form-control\">\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['website'].valid && fabricatorInfoForm.controls['website'].touched\">Website is required</div> -->\n                                </div>\n                                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                                    <label>Document Received</label>\n                                    <input type=\"text\" formControlName=\"document_received\" required placeholder=\"Enter Document Received Here..\" class=\"form-control\" maxlength=\"5\">\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['website'].valid && fabricatorInfoForm.controls['website'].touched\">Website is required</div> -->\n                                </div>\n                                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                                    <label>Document Path</label>\n                                    <input type=\"text\" formControlName=\"document_path\" required placeholder=\"Enter Document Path Here..\" class=\"form-control\">\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['website'].valid && fabricatorInfoForm.controls['website'].touched\">Website is required</div> -->\n                                </div>\n                                <div class=\"col-sm-12 col-lg-12 col-md-12\">\n                                    <label>Executive</label>\n                                    <input type=\"text\" formControlName=\"executive\" required placeholder=\"Enter Executive Here..\" class=\"form-control\">\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['website'].valid && fabricatorInfoForm.controls['website'].touched\">Website is required</div> -->\n                                </div>\n\n                                <label class=\"col-sm-12 col-lg-12 col-md-12 mt-4\">Requirements</label>\n                                <div class=\"col-sm-12 col-lg-12 col-md-12 text-center\">\n                                    <p *ngFor=\"let requirement of defaultRequirements\" class=\"d-inline mr-4\">\n                                        <input type=\"checkbox\" formControlName=\"requirements\" #req (change)=\"addRequirement(req, $event)\" value=\"{{requirement}}\"> {{requirement}}\n                                    </p>\n                                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['website'].valid && fabricatorInfoForm.controls['website'].touched\">Website is required</div> -->\n                                </div>\n                                <div class=\"col-sm-12 col-md-12 col-lg-12 mt-4\">\n                                    <button type=\"button\" [disabled]=\"!newLeadForm.valid\" (click)=\"publish(newLeadForm.value, false)\" class=\"btn btn-sm btn-info submit-btn mr-4 col-lg-3 col-md-3 col-sm-5\">Save</button>\n                                    <button type=\"button\" [disabled]=\"!newLeadForm.valid\" (click)=\"publish(newLeadForm.value, true)\" class=\"btn btn-sm btn-info submit-btn mr-4 col-lg-3 col-md-3 col-sm-5\">Publish</button>\n                                    <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-sm btn-info submit-btn mr-4 col-lg-3 col-md-3 col-sm-5\">Cancel</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div>\n        <div class=\"p-100 container well\" *ngIf=\"submitSuccess\">\n            <div class=\"text-center\">\n                <i class=\"fa fa-5x fa-check-circle\" style=\"color: green;\"></i>\n            </div>\n            <div class=\"\">\n                <span class=\"text-center\">\n                    <h6>You have Successfully submitted the form. You can either add another or go to home.</h6>\n                </span>\n            </div>\n            <div class=\"alert alert-success text-center\">\n                <strong>Success!</strong> Added Successfully.\n            </div>\n        </div>\n        <div class=\"container well\" *ngIf=\"submitted\">\n            <div class=\"text-center\">\n                <i class=\"fa fa-5x fa-frown\" style=\"color: orangered;\"></i>\n            </div>\n            <div class=\"\">\n                <span class=\"text-center\">\n                    <h6>Try again. You can either try again or go back.</h6>\n                </span>\n            </div>\n            <div class=\"alert alert-danger text-center\">\n                <strong>Error!</strong> Unsuccessful.\n            </div>\n        </div>\n        <div *ngIf=\"submitted && !submitSuccess\" class=\"text-center\">\n            <button type=\"button\" (click)=\"tryAgain()\" class=\"btn btn-info btn-md mt-4 button-custom\" style=\"background-color:#33679a; border-color:#33679a;\">Try Again</button>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/new-lead/new-lead.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/new-lead/new-lead.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header,\n.marketing,\n.footer {\n  padding-right: 15px;\n  padding-left: 15px; }\n\n/* Custom page header */\n\n.header {\n  border-bottom: 1px solid #e5e5e5; }\n\n/* Make the masthead heading the same height as the navigation */\n\n.header h3 {\n  padding-bottom: 19px;\n  margin-top: 0;\n  margin-bottom: 0;\n  line-height: 40px; }\n\n/* Custom page footer */\n\n.footer {\n  padding-top: 19px;\n  color: #777;\n  border-top: 1px solid #e5e5e5; }\n\n/* Customize container */\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 730px; } }\n\n.container-narrow > hr {\n  margin: 30px 0; }\n\n/* Main marketing message and sign up button */\n\n.jumbotron {\n  text-align: center;\n  border-bottom: 1px solid #e5e5e5; }\n\n.jumbotron .btn {\n  padding: 14px 24px;\n  font-size: 21px; }\n\n/* Supporting marketing content */\n\n.marketing {\n  margin: 40px 0; }\n\n.marketing p + h4 {\n  margin-top: 28px; }\n\n/* Responsive: Portrait tablets and up */\n\n@media screen and (min-width: 768px) {\n  /* Remove the padding we set earlier */\n  .header,\n  .marketing,\n  .footer {\n    padding-right: 0;\n    padding-left: 0; }\n  /* Space out the masthead */\n  .header {\n    margin-bottom: 30px; }\n  /* Remove the bottom border on the jumbotron for visual effect */\n  .jumbotron {\n    border-bottom: 0; } }\n\n.submit-btn {\n  background-color: #33679a; }\n\ninput[type=radio] {\n  box-sizing: border-box;\n  margin-right: 8px; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  font-size: 0.7rem;\n  margin-bottom: 5px;\n  font-weight: 700; }\n"

/***/ }),

/***/ "./src/app/components/new-lead/new-lead.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/new-lead/new-lead.component.ts ***!
  \***********************************************************/
/*! exports provided: LeadData, NewLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadData", function() { return LeadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLeadComponent", function() { return NewLeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var dt = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
var LeadData = /** @class */ (function () {
    function LeadData(bid_number, bid_received_date, bid_received_from, bid_sent_date, bid_type, document_path, document_received, exclusion, executive, fabricator, fabricator_Url, fabricator_address, fabricator_phone, inclusion, main_steel_est_schedule, main_steel_hours, misc_steel_est_schedule, misc_steel_hours, status) {
        if (bid_number === void 0) { bid_number = 0; }
        if (bid_received_date === void 0) { bid_received_date = null; }
        if (bid_received_from === void 0) { bid_received_from = ''; }
        if (bid_sent_date === void 0) { bid_sent_date = null; }
        if (bid_type === void 0) { bid_type = ''; }
        if (document_path === void 0) { document_path = ''; }
        if (document_received === void 0) { document_received = ''; }
        if (exclusion === void 0) { exclusion = ''; }
        if (executive === void 0) { executive = ''; }
        if (fabricator === void 0) { fabricator = ''; }
        if (fabricator_Url === void 0) { fabricator_Url = ''; }
        if (fabricator_address === void 0) { fabricator_address = ''; }
        if (fabricator_phone === void 0) { fabricator_phone = ''; }
        if (inclusion === void 0) { inclusion = ''; }
        if (main_steel_est_schedule === void 0) { main_steel_est_schedule = null; }
        if (main_steel_hours === void 0) { main_steel_hours = 0; }
        if (misc_steel_est_schedule === void 0) { misc_steel_est_schedule = null; }
        if (misc_steel_hours === void 0) { misc_steel_hours = 0; }
        if (status === void 0) { status = ''; }
        this.bid_number = bid_number;
        this.bid_received_date = bid_received_date;
        this.bid_received_from = bid_received_from;
        this.bid_sent_date = bid_sent_date;
        this.bid_type = bid_type;
        this.document_path = document_path;
        this.document_received = document_received;
        this.exclusion = exclusion;
        this.executive = executive;
        this.fabricator = fabricator;
        this.fabricator_Url = fabricator_Url;
        this.fabricator_address = fabricator_address;
        this.fabricator_phone = fabricator_phone;
        this.inclusion = inclusion;
        this.main_steel_est_schedule = main_steel_est_schedule;
        this.main_steel_hours = main_steel_hours;
        this.misc_steel_est_schedule = misc_steel_est_schedule;
        this.misc_steel_hours = misc_steel_hours;
        this.status = status;
    }
    return LeadData;
}());

var NewLeadComponent = /** @class */ (function () {
    function NewLeadComponent(fb, authService, flashMessage, router, activateRoute) {
        this.fb = fb;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.activateRoute = activateRoute;
        this.title = "Add Lead";
        this.defaultRequirements = ["Structural", "Miscellaneous", "Engineering"];
        this.requirements = [];
    }
    NewLeadComponent.prototype.publish = function (newLeadForm, canPublish) {
        var _this = this;
        var bid_number = "ABCD".concat((this.salesCount + 1).toString());
        console.log("bid_number", bid_number);
        var merged = Object.assign(newLeadForm.bidInfoForm, this.selectedFabricator[0]);
        merged.bid_number = bid_number;
        merged.requirements = this.requirements.toString();
        if (canPublish) {
            merged.status = "RFQ";
        }
        else {
            merged.status = "Open";
        }
        console.log("newLeadForm", merged);
        this.authService.addLead(merged).subscribe(function (data) {
            console.log("subscribe", data);
            if (data.affectedRows > 0) {
                _this.submitSuccess = !_this.submitSuccess;
            }
            else {
                _this.submitted = !_this.submitted;
            }
        });
    };
    NewLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getCount("sales").subscribe(function (data) {
            if (data) {
                _this.salesCount = data.data[0]["count"];
            }
        });
        this.authService.getFabricators().subscribe(function (data) {
            if (data) {
                _this.fabricators = data.data;
                console.log("fabricators", _this.fabricators);
            }
        });
        this.newLeadForm = this.fb.group({
            fabricatorInfoForm: this.fb.group({
                fabricator_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                fabricator_contact_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                fabricator_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                fabricator_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                fabricator_website: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                fabricator_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            }),
            bidInfoForm: this.fb.group({
                project_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                project_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                bid_received_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
                bid_due_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
                document_received: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)),
                document_path: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                requirements: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                bid_received_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                executive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            }),
        });
        //this.newLeadForm.controls['bidInfoForm'].disable();
        this.newLeadForm.controls['fabricatorInfoForm'].disable();
        //@ts-ignore
        this.newLeadForm.controls['fabricatorInfoForm'].controls['fabricator_name'].enable();
    };
    ;
    NewLeadComponent.prototype.onChange = function (event) {
        var _this = this;
        this.selectedFabricatorName = event.target.value;
        console.log("selected", this.selectedFabricatorName);
        this.selectedFabricator = this.fabricators.filter(function (element, index, array) {
            return element.fabricator_name === _this.selectedFabricatorName;
        });
        console.log("elemtn", this.selectedFabricator);
        this.newLeadForm.setValue({
            fabricatorInfoForm: {
                fabricator_name: this.selectedFabricator[0]['fabricator_name'],
                fabricator_contact_name: this.selectedFabricator[0]['fabricator_contact_name'],
                fabricator_email: this.selectedFabricator[0]['fabricator_email'],
                fabricator_phone: this.selectedFabricator[0]['fabricator_phone'],
                fabricator_website: this.selectedFabricator[0]['fabricator_website'],
                fabricator_address: this.selectedFabricator[0]['fabricator_address'],
            },
            bidInfoForm: {
                project_name: '',
                project_address: '',
                bid_received_date: null,
                bid_due_date: null,
                bid_received_from: '',
                document_received: null,
                document_path: '',
                requirements: '',
                executive: ''
            },
        });
        this.showFabricatorInfo = true;
    };
    NewLeadComponent.prototype.cancel = function () {
        history.back();
    };
    NewLeadComponent.prototype.tryAgain = function () {
        this.submitSuccess = false;
        this.submitted = false;
    };
    NewLeadComponent.prototype.addRequirement = function (req, event) {
        if (event.target.checked === true) {
            this.requirements.push(req.value);
        }
        else {
            var index = this.requirements.indexOf(req.value);
            this.requirements.splice(index, 1);
        }
        console.log("reqs", this.requirements);
    };
    NewLeadComponent.prototype.openNav = function () {
        this.showMenu = false;
        this.mySideNav.nativeElement.style.width = "250px";
        this.main.nativeElement.style.marginLeft = "250px";
    };
    NewLeadComponent.prototype.closeNav = function () {
        this.showMenu = true;
        this.mySideNav.nativeElement.style.width = "0";
        this.main.nativeElement.style.marginLeft = "0";
    };
    NewLeadComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success text-center', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mySidenav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NewLeadComponent.prototype, "mySideNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('main'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NewLeadComponent.prototype, "main", void 0);
    NewLeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-lead',
            template: __webpack_require__(/*! ./new-lead.component.html */ "./src/app/components/new-lead/new-lead.component.html"),
            styles: [__webpack_require__(/*! ../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css */ "./node_modules/datatables.net-dt/css/jquery.dataTables.css"), __webpack_require__(/*! ./new-lead.component.scss */ "./src/app/components/new-lead/new-lead.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewLeadComponent);
    return NewLeadComponent;
}());



/***/ }),

/***/ "./src/app/components/quote/quote.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/quote/quote.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n    <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n        <div class=\"login-info\">\n            <span>\n                <!-- User image size is adjusted inside CSS, it should stay as it -->\n                <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n                    <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n                    <span>\n                        john.doe\n                    </span>\n                </a>\n            </span>\n        </div>\n        <ul>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n                    <span class=\"menu-item-parent\">Sales</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n                    <span class=\"menu-item-parent\">Users</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n                    <span class=\"menu-item-parent\">Roles</span>\n                </a>\n            </li>\n        </ul>\n\n        <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n            <i class=\"fa fa-arrow-circle-left hit\"></i>\n        </span>\n    </div>\n</aside>\n\n<div id=\"main\" #main>\n    <div id=\"ribbon\">\n        <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n        <span class=\"ribbon-button-alignment\">\n            <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n                data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n                data-html=\"true\">\n                <i class=\"fa fa-refresh\"></i>\n            </span>\n        </span>\n\n        <!-- breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li>Home</li>\n            <li>{{title}}</li>\n        </ol>\n        <div id=\"logout\" class=\"btn-header transparent pull-right\">\n            <span>\n                <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n                    <i class=\"fa fa-sign-out\"></i>\n                </a>\n            </span>\n        </div>\n        <!-- end breadcrumb -->\n    </div>\n    <app-navbar></app-navbar>\n\n    <div id=\"quote\" #quote class=\"container\" *ngIf=\"!submitSuccess || submitted \">\n        <div class=\"col-lg-12 well\">\n            <div class=\"row\">\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                    <p>Bid Number</p>\n                </div>\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                    <input type=\"text\" value=\"{{bid_number}}\" disabled placeholder=\"Enter Bid Number Here..\" class=\"form-control\">\n                </div>\n                <form [formGroup]=\"quoteInfoForm\">\n                    <h5 class=\"col-sm-6 form-group\">Quotation Info</h5>\n                    <div class=\"col-sm-12\">\n                        <div class=\"row\" id=\"print-section\">\n                            <div class=\"col-sm-4 col-lg-4\">\n                                <label>Quote Price</label>\n                                <input type=\"number\" formControlName=\"quote_price\" required placeholder=\"Enter Quote Price Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4\">\n                                <label>Engineering Price</label>\n                                <input type=\"number\" formControlName=\"engg_price\" required placeholder=\"Enter Engineering Price Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-12 col-lg-12 col-md-12\">\n                                <label>Remarks/Comments</label>\n                                <textarea placeholder=\"Enter Remarks/Comments Here..\" required formControlName=\"comments\" rows=\"3\" class=\"form-control\" name=\"comments\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <button type=\"button\" (click)=\"save(quoteInfoForm.value, false)\" [disabled]=\"!quoteInfoForm.valid\" class=\"btn btn-sm btn-info submit-btn m-2 col-lg-3 col-md-3 col-sm-5\">Save</button>\n                            <button type=\"button\" (click)=\"save(quoteInfoForm.value, true)\" [disabled]=\"!quoteInfoForm.valid\" class=\"btn btn-sm btn-info submit-btn m-2 col-lg-3 col-md-3 col-sm-5\">Generate Quote</button>\n                            <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-sm btn-info submit-btn m-2 col-lg-3 col-md-3 col-sm-5\">Cancel</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-100 container well\" *ngIf=\"submitSuccess\">\n        <div class=\"text-center\">\n            <i class=\"fa fa-5x fa-check-circle\" style=\"color: green;\"></i>\n        </div>\n        <div class=\"\">\n            <span class=\"text-center\">\n                <h6>Added Quotation data.</h6>\n            </span>\n        </div>\n        <div class=\"alert alert-success text-center\">\n            <strong>Success!</strong> Added Successfully.\n        </div>\n    </div>\n    <div class=\"container well\" *ngIf=\"submitted\">\n        <div class=\"text-center\">\n            <i class=\"fa fa-5x fa-frown\" style=\"color: orangered;\"></i>\n        </div>\n        <div class=\"\">\n            <span class=\"text-center\">\n                <h6>Try again. You can either try again or go back.</h6>\n            </span>\n        </div>\n        <div class=\"alert alert-danger text-center\">\n            <strong>Error!</strong> Unsuccessful.\n        </div>\n    </div>\n    <div *ngIf=\"submitted && !submitSuccess\" class=\"text-center\">\n        <button type=\"button\" (click)=\"tryAgain()\" class=\"btn btn-info btn-md mt-4 button-custom\" style=\"background-color:#33679a; border-color:#33679a;\">Try Again</button>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/quote/quote.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/quote/quote.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header,\n.marketing,\n.footer {\n  padding-right: 15px;\n  padding-left: 15px; }\n\n/* Custom page header */\n\n.header {\n  border-bottom: 1px solid #e5e5e5; }\n\n/* Make the masthead heading the same height as the navigation */\n\n.header h3 {\n  padding-bottom: 19px;\n  margin-top: 0;\n  margin-bottom: 0;\n  line-height: 40px; }\n\n/* Custom page footer */\n\n.footer {\n  padding-top: 19px;\n  color: #777;\n  border-top: 1px solid #e5e5e5; }\n\n/* Customize container */\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 730px; } }\n\n.container-narrow > hr {\n  margin: 30px 0; }\n\n/* Main marketing message and sign up button */\n\n.jumbotron {\n  text-align: center;\n  border-bottom: 1px solid #e5e5e5; }\n\n.jumbotron .btn {\n  padding: 14px 24px;\n  font-size: 21px; }\n\n/* Supporting marketing content */\n\n.marketing {\n  margin: 40px 0; }\n\n.marketing p + h4 {\n  margin-top: 28px; }\n\n/* Responsive: Portrait tablets and up */\n\n@media screen and (min-width: 768px) {\n  /* Remove the padding we set earlier */\n  .header,\n  .marketing,\n  .footer {\n    padding-right: 0;\n    padding-left: 0; }\n  /* Space out the masthead */\n  .header {\n    margin-bottom: 30px; }\n  /* Remove the bottom border on the jumbotron for visual effect */\n  .jumbotron {\n    border-bottom: 0; } }\n\n.submit-btn {\n  background-color: #33679a; }\n\ninput[type=radio] {\n  box-sizing: border-box;\n  margin-right: 8px; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  font-size: 0.7rem;\n  margin-bottom: 5px;\n  font-weight: 700; }\n\n.inclusions p {\n  display: inline; }\n\n.inclusions {\n  padding-left: 0px; }\n"

/***/ }),

/***/ "./src/app/components/quote/quote.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/quote/quote.component.ts ***!
  \*****************************************************/
/*! exports provided: Quote, QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var dt = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
var Quote = /** @class */ (function () {
    function Quote(quote_price, engg_price, comments, status, sales_id) {
        if (quote_price === void 0) { quote_price = 0; }
        if (engg_price === void 0) { engg_price = 0; }
        if (comments === void 0) { comments = ''; }
        if (status === void 0) { status = ''; }
        if (sales_id === void 0) { sales_id = ''; }
        this.quote_price = quote_price;
        this.engg_price = engg_price;
        this.comments = comments;
        this.status = status;
        this.sales_id = sales_id;
    }
    return Quote;
}());

var QuoteComponent = /** @class */ (function () {
    function QuoteComponent(fb, authService, flashMessage, router, activateRoute) {
        this.fb = fb;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.activateRoute = activateRoute;
        this.title = "Quote";
        this.inclusions = [];
        this.exclusions = [];
        this.bidTypes = ['Structural', 'Miscellaneous', 'Engineering'];
        this.selectBidTypes = [];
    }
    QuoteComponent.prototype.save = function (quoteForm, status) {
        var _this = this;
        console.log("quoteForm", quoteForm);
        var sales_id = sessionStorage.getItem('sales_id');
        console.log('sales_id', sales_id);
        var newQuoteForm;
        newQuoteForm = quoteForm;
        if (status) {
            newQuoteForm.status = "Quote Sent";
        }
        else {
            newQuoteForm.status = "Quote Pending";
        }
        newQuoteForm.sales_id = sales_id;
        console.log("newQuoteForm", newQuoteForm);
        this.authService.addQuote(newQuoteForm).subscribe(function (data) {
            console.log("subscribe", data);
            if (data.affectedRows > 0) {
                _this.submitSuccess = !_this.submitSuccess;
            }
            else {
                _this.submitted = !_this.submitted;
            }
        });
    };
    QuoteComponent.prototype.ngOnInit = function () {
        var bid_number = this.activateRoute.snapshot.params['bid_number'];
        console.log("got bid number as", bid_number);
        this.bid_number = bid_number;
        this.quoteInfoForm = this.fb.group({
            quote_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            engg_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        //this.quoteInfoForm.disable();
    };
    ;
    QuoteComponent.prototype.addInclusion = function (inc, event) {
        if (event.target.checked === true) {
            this.inclusions.push(inc.value);
        }
        else {
            var index = this.inclusions.indexOf(inc.value);
            this.inclusions.splice(index, 1);
        }
    };
    QuoteComponent.prototype.cancel = function () {
        history.back();
    };
    QuoteComponent.prototype.generateQuote = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__('p', 'pt', 'letter');
        doc.addImage("../../assets/imgs/report_header.png", 70, 10);
        // var options = {
        //   //'width': 800,
        //   };
        // doc.addHTML($("#print-section"),-1, 220, options, function(){
        //   doc.save("Report.pdf");
        // });
        doc.setLineWidth(0.05);
        doc.line(20, 30, 200, 30);
        doc.setFont("times");
        doc.setFontType("bold");
        doc.text(72, 40, 'PROPOSAL FOR DETAILING');
        doc.text(50, 45, 'THE GERING HIGH SCHOOL ADDITION JOB');
        doc.save("Report.pdf");
        // let printContents, popupWin;
        // printContents = document.getElementById('print-section').innerHTML;
        // popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        // popupWin.document.open();
        // popupWin.document.write(`
        //   <html>
        //     <head>
        //       <title>Print tab</title>
        //       <style>
        //       </style>
        //     </head>
        // <body onload="window.print();window.close()">${printContents}</body>
        //   </html>`
        // );
        // popupWin.document.close();
    };
    QuoteComponent.prototype.tryAgain = function () {
        this.submitSuccess = false;
        this.submitted = false;
    };
    QuoteComponent.prototype.addExclusion = function (exc, event) {
        if (event.target.checked === true) {
            this.exclusions.push(exc.value);
        }
        else {
            var index = this.exclusions.indexOf(exc.value);
            this.exclusions.splice(index, 1);
        }
    };
    QuoteComponent.prototype.openNav = function () {
        this.showMenu = false;
        this.mySideNav.nativeElement.style.width = "250px";
        this.main.nativeElement.style.marginLeft = "250px";
    };
    QuoteComponent.prototype.closeNav = function () {
        this.showMenu = true;
        this.mySideNav.nativeElement.style.width = "0";
        this.main.nativeElement.style.marginLeft = "0";
    };
    QuoteComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success text-center', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mySidenav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuoteComponent.prototype, "mySideNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('main'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuoteComponent.prototype, "main", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('quote'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuoteComponent.prototype, "quote", void 0);
    QuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/components/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css */ "./node_modules/datatables.net-dt/css/jquery.dataTables.css"), __webpack_require__(/*! ./quote.component.scss */ "./src/app/components/quote/quote.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/components/roles/roles.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/roles/roles.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n    <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n        <div class=\"login-info\">\n            <span>\n                <!-- User image size is adjusted inside CSS, it should stay as it -->\n                <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n                    <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n                    <span>\n                        john.doe\n                    </span>\n                </a>\n            </span>\n        </div>\n        <ul>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n                    <span class=\"menu-item-parent\">Sales</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n                    <span class=\"menu-item-parent\">Users</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n                    <span class=\"menu-item-parent\">Roles</span>\n                </a>\n            </li>\n        </ul>\n\n        <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n            <i class=\"fa fa-arrow-circle-left hit\"></i>\n        </span>\n    </div>\n</aside>\n\n<div id=\"main\" #main>\n    <div id=\"ribbon\">\n        <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n        <span class=\"ribbon-button-alignment\">\n            <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n                data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n                data-html=\"true\">\n                <i class=\"fa fa-refresh\"></i>\n            </span>\n        </span>\n\n        <!-- breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li>Home</li>\n            <li>{{title}}</li>\n        </ol>\n        <div id=\"logout\" class=\"btn-header transparent pull-right\">\n            <span>\n                <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n                    <i class=\"fa fa-sign-out\"></i>\n                </a>\n            </span>\n        </div>\n        <!-- end breadcrumb -->\n    </div>\n    <app-navbar></app-navbar>\n    <h4 style=\"display: inline; color:#33679a !important;\" class=\"ml-4 mt-1 text-primary\">Roles</h4>\n    <div class=\"container\">\n        <table id=\"example\" class=\"ml-10 table table-striped table-bordered dt-responsive nowrap\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th>Role Code</th>\n                    <th>Role Name</th>\n                </tr>\n            </thead>\n        </table>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/roles/roles.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/roles/roles.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting:after {\n  opacity: 0.2;\n  content: none; }\n\ntable.dataTable thead .sorting_asc:after {\n  content: none; }\n\ntable.dataTable thead .sorting_desc:after {\n  content: none; }\n"

/***/ }),

/***/ "./src/app/components/roles/roles.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/roles/roles.component.ts ***!
  \*****************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var dt = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
var RolesComponent = /** @class */ (function () {
    function RolesComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.title = "Roles";
    }
    RolesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getRoles().subscribe(function (data) {
            console.log("roles", data, typeof (data.data));
            _this.rolesData = data.data;
            $('#example').DataTable({
                data: _this.rolesData,
                columns: [
                    { data: 'role_code' },
                    {
                        data: 'role_name'
                    }
                ]
            });
        });
    };
    ;
    RolesComponent.prototype.openNav = function () {
        this.showMenu = false;
        this.mySideNav.nativeElement.style.width = "250px";
        this.main.nativeElement.style.marginLeft = "250px";
    };
    RolesComponent.prototype.closeNav = function () {
        this.showMenu = true;
        this.mySideNav.nativeElement.style.width = "0";
        this.main.nativeElement.style.marginLeft = "0";
    };
    RolesComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success text-center', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mySidenav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RolesComponent.prototype, "mySideNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('main'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RolesComponent.prototype, "main", void 0);
    RolesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roles',
            template: __webpack_require__(/*! ./roles.component.html */ "./src/app/components/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css */ "./node_modules/datatables.net-dt/css/jquery.dataTables.css"), __webpack_require__(/*! ./roles.component.scss */ "./src/app/components/roles/roles.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/components/sales-details/sales-details.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/sales-details/sales-details.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n  <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n    <div class=\"login-info\">\n      <span>\n        <!-- User image size is adjusted inside CSS, it should stay as it -->\n        <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n          <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n          <span>\n            john.doe\n          </span>\n        </a>\n      </span>\n    </div>\n    <ul>\n      <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n          <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n          <span class=\"menu-item-parent\">Sales</span>\n        </a>\n      </li>\n      <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n          <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n          <span class=\"menu-item-parent\">Users</span>\n        </a>\n      </li>\n      <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n          <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n          <span class=\"menu-item-parent\">Roles</span>\n        </a>\n      </li>\n    </ul>\n\n    <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n      <i class=\"fa fa-arrow-circle-left hit\"></i>\n    </span>\n  </div>\n</aside>\n\n<div id=\"main\" #main>\n  <div id=\"ribbon\">\n    <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n    <span class=\"ribbon-button-alignment\">\n      <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n        data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n        data-html=\"true\">\n        <i class=\"fa fa-refresh\"></i>\n      </span>\n    </span>\n\n    <!-- breadcrumb -->\n    <ol class=\"breadcrumb\">\n      <li>Home</li>\n      <li>{{title}}</li>\n    </ol>\n    <div id=\"logout\" class=\"btn-header transparent pull-right\">\n      <span>\n        <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n          <i class=\"fa fa-sign-out\"></i>\n        </a>\n      </span>\n    </div>\n    <!-- end breadcrumb -->\n  </div>\n  <app-navbar></app-navbar>\n\n  <div class=\"m-5\" *ngIf=\"!submitted && !submitSuccess\">\n    <div class=\"col-lg-12 well\">\n      <div class=\"row\">\n        <form *ngIf=\"dataLoaded\">\n          <div class=\"col-sm-12\">\n            <div class=\"row\" [formGroup]=\"fabricatorInfoForm\">\n              <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                <p>Bid Number</p>\n              </div>\n              <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                <input type=\"text\" value=\"{{bid_number}}\" disabled placeholder=\"Enter Bid Number Here..\" class=\"form-control\">\n              </div>\n              <div class=\"row m-1\">\n                <h5 class=\"col-sm-12 col-lg-12 col-md-12\">Fabricator Info</h5>\n                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                  <label>Fabricator Name</label>\n                  <input type=\"text\" formControlName=\"fabricator_name\" placeholder=\"Enter Fabricator Name Here..\" class=\"form-control\">\n                  <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['contact_name'].valid && fabricatorInfoForm.controls['contact_name'].touched\">Contact Name is required</div> -->\n                </div>\n                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                  <label>Contact Name</label>\n                  <input type=\"text\" formControlName=\"fabricator_contact_name\" placeholder=\"Enter Contact Name Here..\" class=\"form-control\">\n                  <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['contact_name'].valid && fabricatorInfoForm.controls['contact_name'].touched\">Contact Name is required</div> -->\n                </div>\n                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                  <label>E-Mail</label>\n                  <input type=\"email\" formControlName=\"fabricator_email\" placeholder=\"Enter Email Here..\" class=\"form-control\">\n                  <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['email'].valid && fabricatorInfoForm.controls['email'].touched\">Enter valid email id.</div> -->\n                </div>\n                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                  <label>Phone</label>\n                  <input type=\"tel\" formControlName=\"fabricator_phone\" placeholder=\"Enter Phone Here..\" class=\"form-control\">\n                  <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['phone'].valid && fabricatorInfoForm.controls['phone'].touched\">Phone is required</div> -->\n                </div>\n                <div class=\"col-sm-4 col-lg-6 col-md-6\">\n                  <label>Website</label>\n                  <input type=\"url\" formControlName=\"fabricator_website\" placeholder=\"Enter Website Here..\" class=\"form-control\">\n                  <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['website'].valid && fabricatorInfoForm.controls['website'].touched\">Website is required</div> -->\n                </div>\n                <div class=\"col-sm-12 col-lg-12 col-md-12\">\n                  <label>Address</label>\n                  <textarea placeholder=\"Enter Address Here..\" formControlName=\"fabricator_address\" rows=\"3\" class=\"form-control\" name=\"address\"></textarea>\n                  <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['address'].valid && fabricatorInfoForm.controls['address'].touched\">Address is required</div> -->\n                </div>\n              </div>\n            </div>\n            <hr class=\"border-top-1 border-dark\" />\n            <div class=\"row\">\n              <h5 class=\"col-sm-6 \">Bid Info</h5>\n            </div>\n            <div class=\"row\" [formGroup]=\"bidInfoForm\">\n              <div class=\"col-sm-4 col-lg-4 \">\n                <label>Received Date</label>\n                <input type=\"date\" formControlName=\"bid_received_date\" placeholder=\"Enter Received Date Here..\" class=\"form-control\">\n              </div>\n              <div class=\"col-sm-4 col-lg-4 \">\n                <label>Received From</label>\n                <input type=\"text\" formControlName=\"bid_received_from\" placeholder=\"Enter Received From Here..\" class=\"form-control\">\n              </div>\n              <div class=\"col-sm-4 col-lg-4 \">\n                <label>Send Date</label>\n                <input type=\"date\" formControlName=\"bid_sent_date\" placeholder=\"Enter Send Date Here..\" class=\"form-control\">\n              </div>\n              <div class=\"col-sm-4 col-lg-4 \">\n                <label>Document Received</label>\n                <input type=\"text\" formControlName=\"document_received\" placeholder=\"Enter Document Received Here..\" class=\"form-control\">\n              </div>\n              <div class=\"col-sm-4 col-lg-4 \">\n                <label>Document Path</label>\n                <input type=\"text\" formControlName=\"document_path\" placeholder=\"Enter Document Path Here..\" class=\"form-control\">\n              </div>\n              <div class=\"col-sm-4 col-lg-4 \">\n                <label>Bid Status</label>\n                <input type=\"text\" #bidStatus formControlName=\"status\" placeholder=\"Enter Bid Status Here..\" class=\"form-control\">\n              </div>\n              <div class=\"col-sm-4 col-lg-4 \">\n                <label>Executive</label>\n                <input type=\"text\" formControlName=\"executive\" placeholder=\"Enter Executive Here..\" class=\"form-control\">\n              </div>\n              <div class=\"col-sm-4 col-lg-4 \">\n                <label>Requirements</label>\n                <input type=\"text\" formControlName=\"requirements\" placeholder=\"Enter Requirements Here..\" class=\"form-control\">\n              </div>\n            </div>\n            <div *ngIf=\"bidStatus.value === 'Estimate Received' || bidStatus.value === 'Quote Pending' || bidStatus.value === 'Quote Sent'\">\n              <hr class=\"border-top-1 border-dark\" />\n              <div class=\"row\">\n                <h5 class=\"col-sm-6 \">Estimation Info</h5>\n              </div>\n              <div class=\"row\" [formGroup]=\"estimationInfoForm\" *ngIf=\"bidStatus.value === 'Estimate Received' || bidStatus.value === 'Quote Pending' || bidStatus.value === 'Quote Sent'\">\n                <div class=\"col-sm-6 col-lg-6 \">\n                  <label>Project</label>\n                  <input type=\"text\" formControlName=\"project_name\" placeholder=\"Enter Project Name Here..\" class=\"form-control\">\n                </div>\n                <div class=\"col-sm-6 col-lg-6 \">\n                  <label>Main Steel Hours</label>\n                  <input type=\"number\" formControlName=\"main_steel_hours\" placeholder=\"Enter Main Steel Hours Here..\" class=\"form-control\">\n                </div>\n                <div class=\"col-sm-6 col-lg-6 \">\n                  <label>Main Steel Estimated Schedule</label>\n                  <input type=\"date\" formControlName=\"main_steel_est_schedule\" placeholder=\"Enter Main Steel Estimated Schedule Here..\" class=\"form-control\">\n                </div>\n                <div class=\"col-sm-6 col-lg-6 \">\n                  <label>Misc Steel Hours</label>\n                  <input type=\"number\" formControlName=\"misc_steel_hours\" placeholder=\"Enter Misc Steel Hours Here..\" class=\"form-control\">\n                </div>\n                <div class=\"col-sm-6 col-lg-6\">\n                  <label>Misc Steel Estimated Schedule</label>\n                  <input type=\"date\" formControlName=\"misc_steel_est_schedule\" placeholder=\"Enter Misc Steel Estimated Schedule Here..\" class=\"form-control\">\n                </div>\n                <div class=\"col-sm-6 col-lg-6 \">\n                  <label>Inclusions</label>\n                  <input type=\"text\" formControlName=\"inclusions\" class=\"form-control\">\n                </div>\n                <div class=\"col-sm-6 col-lg-6 \">\n                  <label>Exclusions</label>\n                  <input type=\"text\" formControlName=\"exclusions\" class=\"form-control\">\n                </div>\n              </div>\n              <div *ngIf=\"bidStatus.value === 'Quote Sent' || bidStatus.value === 'Quote Pending'\">\n                <hr class=\"border-top-1 border-dark\" />\n                <div class=\"row\">\n                  <h5 class=\"col-sm-6 \">Quote Info</h5>\n                </div>\n                <div class=\"row\" [formGroup]=\"quoteInfoForm\" *ngIf=\"bidStatus.value === 'Quote Sent' || bidStatus.value === 'Quote Pending'\" >\n                  <div class=\"col-sm-6 col-lg-6 \">\n                    <label>Quote Price</label>\n                    <input type=\"text\" formControlName=\"quote_price\" placeholder=\"Enter Quote Price Here..\" class=\"form-control\">\n                  </div>\n                  <div class=\"col-sm-6 col-lg-6 \">\n                    <label>Engg Price</label>\n                    <input type=\"text\" formControlName=\"engg_price\" placeholder=\"Enter Engg Price Here..\" class=\"form-control\">\n                  </div>\n                  <div class=\"col-sm-12 col-lg-12 col-md-12\">\n                    <label>Comments</label>\n                    <textarea placeholder=\"Enter Comments Here..\" formControlName=\"comments\" rows=\"3\" class=\"form-control\" name=\"address\"></textarea>\n                    <!-- <div class=\"alert alert-danger\" *ngIf=\"!fabricatorInfoForm.controls['address'].valid && fabricatorInfoForm.controls['address'].touched\">Address is required</div> -->\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <button type=\"button\" *ngIf=\"bidStatus.value === 'Open'\" (click)=\"publishLead(fabricatorInfoForm.value, bidInfoForm.value)\" class=\"btn btn-sm btn-info submit-btn m-3 col-lg-4 col-md-4 col-sm-5\">Publish Lead</button>\n              <button type=\"button\" *ngIf=\"bidStatus.value === 'Estimate Received'\" (click)=\"prepareQuote()\" class=\"btn btn-sm btn-info submit-btn m-3 col-lg-4 col-md-4 col-sm-5\">Prepare Quote</button>\n              <button type=\"button\" *ngIf=\"bidStatus.value === 'Quote Sent' || bidStatus.value === 'Quote Pending'\" (click)=\"reQuote()\"\n                class=\"btn btn-sm btn-info submit-btn m-3 col-lg-4 col-md-4 col-sm-5\">Re-Quote</button>\n              <button type=\"button\" *ngIf=\"bidStatus.value === 'RFQ'\" (click)=\"sendForEstimation()\" class=\"btn btn-sm btn-info submit-btn m-3 col-lg-4 col-md-4 col-sm-5\">Send For Estimation</button>\n              <button type=\"button\" *ngIf=\"bidStatus.value === 'Estimate Pending'\" (click)=\"addEstimation()\" class=\"btn btn-sm btn-info submit-btn m-3 col-lg-4 col-md-4 col-sm-5\">Add Estimation Info</button>\n              <button type=\"button\" (click)=\"close()\" class=\"btn btn-sm btn-info submit-btn m-3 col-lg-2 col-md-3 col-sm-5\">Close</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div class=\"p-100 container well\" *ngIf=\"submitSuccess\">\n      <div class=\"text-center\">\n        <i class=\"fa fa-5x fa-check-circle\" style=\"color: green;\"></i>\n      </div>\n      <div class=\"\">\n        <span class=\"text-center\">\n          <h6>{{message}}</h6>\n        </span>\n      </div>\n      <div class=\"alert alert-success text-center\">\n        <strong>Success!</strong> Sent Successfully.\n      </div>\n    </div>\n    <div class=\"container well\" *ngIf=\"submitted\">\n      <div class=\"text-center\">\n        <i class=\"fa fa-5x fa-frown\" style=\"color: orangered;\"></i>\n      </div>\n      <div class=\"\">\n        <span class=\"text-center\">\n          <h6>{{message}}</h6>\n        </span>\n      </div>\n      <div class=\"alert alert-danger text-center\">\n        <strong>Error!</strong> Unsuccessful.\n      </div>\n    </div>\n    <div *ngIf=\"submitted && !submitSuccess\" class=\"text-center\">\n      <button type=\"button\" (click)=\"tryAgain()\" class=\"btn btn-info btn-md mt-4 button-custom\" style=\"background-color:#33679a; border-color:#33679a;\">Try Again</button>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/sales-details/sales-details.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/sales-details/sales-details.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header,\n.marketing,\n.footer {\n  padding-right: 15px;\n  padding-left: 15px; }\n\n/* Custom page header */\n\n.header {\n  border-bottom: 1px solid #e5e5e5; }\n\n/* Make the masthead heading the same height as the navigation */\n\n.header h3 {\n  padding-bottom: 19px;\n  margin-top: 0;\n  margin-bottom: 0;\n  line-height: 40px; }\n\n/* Custom page footer */\n\n.footer {\n  padding-top: 19px;\n  color: #777;\n  border-top: 1px solid #e5e5e5; }\n\n/* Customize container */\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 730px; } }\n\n.container-narrow > hr {\n  margin: 30px 0; }\n\n/* Main marketing message and sign up button */\n\n.jumbotron {\n  text-align: center;\n  border-bottom: 1px solid #e5e5e5; }\n\n.jumbotron .btn {\n  padding: 14px 24px;\n  font-size: 21px; }\n\n/* Supporting marketing content */\n\n.marketing {\n  margin: 40px 0; }\n\n.marketing p + h4 {\n  margin-top: 28px; }\n\n/* Responsive: Portrait tablets and up */\n\n@media screen and (min-width: 768px) {\n  /* Remove the padding we set earlier */\n  .header,\n  .marketing,\n  .footer {\n    padding-right: 0;\n    padding-left: 0; }\n  /* Space out the masthead */\n  .header {\n    margin-bottom: 30px; }\n  /* Remove the bottom border on the jumbotron for visual effect */\n  .jumbotron {\n    border-bottom: 0; } }\n\n.submit-btn {\n  background-color: #33679a; }\n\ninput[type=radio] {\n  box-sizing: border-box;\n  margin-right: 8px; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  font-size: 0.7rem;\n  margin-bottom: 5px;\n  font-weight: 700; }\n"

/***/ }),

/***/ "./src/app/components/sales-details/sales-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/sales-details/sales-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: SalesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesDetailsComponent", function() { return SalesDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var dt = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
var SalesDetailsComponent = /** @class */ (function () {
    function SalesDetailsComponent(fb, authService, flashMessage, router, activeRoute) {
        this.fb = fb;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.activeRoute = activeRoute;
        this.title = "Sales Data";
        this.dataLoaded = false;
        this.inclusions = [];
        this.exclusions = [];
    }
    SalesDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getInclusions().subscribe(function (data) {
            _this.misc_inclusions = data.data;
        });
        this.authService.getExclusions().subscribe(function (data) {
            _this.misc_exclusions = data.data;
        });
        this.bid_number = this.activeRoute.snapshot.params['bid_number'];
        console.log(this.activeRoute.snapshot.params['bid_number']);
        this.authService.getSalesDetails(this.bid_number).subscribe(function (data) {
            if (data) {
                _this.salesDetails = data.data[0];
                console.log(_this.salesDetails);
                _this.dataLoaded = true;
                sessionStorage.setItem("sales_id", _this.salesDetails.sales_id);
                _this.fabricatorInfoForm = _this.fb.group({
                    fabricator_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.fabricator_name),
                    fabricator_website: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.fabricator_website),
                    fabricator_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.fabricator_address),
                    fabricator_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.fabricator_phone),
                    fabricator_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.fabricator_email),
                    fabricator_contact_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.fabricator_contact_name)
                });
                _this.bidInfoForm = _this.fb.group({
                    bid_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.bid_number),
                    bid_received_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date(_this.salesDetails.bid_received_date).toISOString().substring(0, 10)),
                    bid_received_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.bid_received_from),
                    bid_sent_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date(_this.salesDetails.bid_sent_date).toISOString().substring(0, 10)),
                    requirements: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.requirements),
                    document_path: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.document_path),
                    document_received: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.document_received),
                    status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.status),
                    executive: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.executive)
                });
                _this.estimationInfoForm = _this.fb.group({
                    inclusions: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    exclusions: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    project_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.salesDetails.project_name),
                    main_steel_est_schedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
                    main_steel_hours: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
                    misc_steel_est_schedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
                    misc_steel_hours: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
                });
                _this.quoteInfoForm = _this.fb.group({
                    quote_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
                    engg_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
                    comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
                });
                _this.fabricatorInfoForm.disable();
                _this.bidInfoForm.disable();
                _this.estimationInfoForm.disable();
                _this.quoteInfoForm.disable();
                if (_this.salesDetails.status === 'Open') {
                    _this.bidInfoForm.enable();
                }
                // if(this.bidInfoForm.value['status'].value === 'Estimate Pending'){
                //   this.estimationInfoForm.enable();
                // }
                // console.log("status", this.bidInfoForm);
                // this.estimationInfoForm.disable();
            }
        });
        this.authService.getLatestQuote().subscribe(function (data) {
            console.log("latest", data, typeof (data.data));
            console.log("length", data.data.length);
            if (data.data.length > 0) {
                _this.quoteDetails = data.data[0];
                console.log("quotes", _this.quoteDetails);
                _this.quoteInfoForm = _this.fb.group({
                    quote_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.quoteDetails.quote_price),
                    engg_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.quoteDetails.engg_price),
                    comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.quoteDetails.comments),
                });
                _this.quoteInfoForm.disable();
            }
        });
        this.authService.getLatestEstimation().subscribe(function (data) {
            console.log("latest", data, typeof (data.data));
            console.log("length", data.data.length);
            if (data.data.length > 0) {
                _this.estimationDetails = data.data[0];
                console.log("estimationDetails", _this.estimationDetails);
                _this.estimationInfoForm = _this.fb.group({
                    inclusions: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.estimationDetails.inclusion),
                    exclusions: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.estimationDetails.exclusion),
                    main_steel_est_schedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date(_this.estimationDetails.main_steel_est_schedule).toISOString().substring(0, 10)),
                    main_steel_hours: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.estimationDetails.main_steel_hours),
                    misc_steel_est_schedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date(_this.estimationDetails.misc_steel_est_schedule).toISOString().substring(0, 10)),
                    misc_steel_hours: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.estimationDetails.misc_steel_hours),
                });
                _this.estimationInfoForm.disable();
            }
        });
    };
    ;
    SalesDetailsComponent.prototype.ngAfterViewChecked = function () {
    };
    SalesDetailsComponent.prototype.publishLead = function (fabricator, bid) {
        var _this = this;
        bid.status = "RFQ";
        var newLead = Object.assign(fabricator, bid);
        this.authService.publishLead(newLead).subscribe(function (data) {
            console.log("subscribe", data);
            if (data.affectedRows > 0) {
                _this.submitSuccess = !_this.submitSuccess;
                _this.message = "Lead has been published.";
            }
            else {
                _this.submitted = !_this.submitted;
                _this.message = "There has been an error while submitting Lead, Please try again.";
            }
        });
        ;
    };
    SalesDetailsComponent.prototype.addInclusion = function (inc, event) {
        if (event.target.checked === true) {
            this.inclusions.push(inc.value);
        }
        else {
            var index = this.inclusions.indexOf(inc.value);
            this.inclusions.splice(index, 1);
        }
        console.log("inc", this.inclusions);
    };
    SalesDetailsComponent.prototype.addExclusion = function (exc, event) {
        if (event.target.checked === true) {
            this.exclusions.push(exc.value);
        }
        else {
            var index = this.exclusions.indexOf(exc.value);
            this.exclusions.splice(index, 1);
        }
        console.log("inc", this.exclusions);
    };
    SalesDetailsComponent.prototype.reQuote = function () {
        this.prepareQuote();
    };
    SalesDetailsComponent.prototype.prepareQuote = function () {
        var bid_number = this.salesDetails.bid_number;
        console.log("sendForEst", bid_number);
        this.router.navigate(['quote', bid_number]);
    };
    SalesDetailsComponent.prototype.addEstimation = function () {
        var bid_number = this.salesDetails.bid_number;
        console.log("add estimation", bid_number);
        this.router.navigate(['estimation', bid_number]);
    };
    SalesDetailsComponent.prototype.sendForEstimation = function () {
        var _this = this;
        console.log("yes", this.bid_number);
        var status = "Estimate Pending";
        var response;
        this.authService.updateBidStatus(status, this.bid_number).subscribe(function (res) {
            response = res.json();
            console.log("res", response);
            if (response.data.changedRows == 1) {
                _this.submitSuccess = true;
                _this.message = "Bid has been sent for estimation.";
            }
            else {
                _this.submitted = true;
                _this.message = "Try again. You can either try again or go back.";
            }
        });
    };
    SalesDetailsComponent.prototype.tryAgain = function () {
        this.submitSuccess = false;
        this.submitted = false;
    };
    SalesDetailsComponent.prototype.close = function () {
        history.back();
    };
    SalesDetailsComponent.prototype.openNav = function () {
        this.showMenu = false;
        this.mySideNav.nativeElement.style.width = "250px";
        this.main.nativeElement.style.marginLeft = "250px";
    };
    SalesDetailsComponent.prototype.closeNav = function () {
        this.showMenu = true;
        this.mySideNav.nativeElement.style.width = "0";
        this.main.nativeElement.style.marginLeft = "0";
    };
    SalesDetailsComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success text-center', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mySidenav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SalesDetailsComponent.prototype, "mySideNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('main'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SalesDetailsComponent.prototype, "main", void 0);
    SalesDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-details',
            template: __webpack_require__(/*! ./sales-details.component.html */ "./src/app/components/sales-details/sales-details.component.html"),
            styles: [__webpack_require__(/*! ../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css */ "./node_modules/datatables.net-dt/css/jquery.dataTables.css"), __webpack_require__(/*! ./sales-details.component.scss */ "./src/app/components/sales-details/sales-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SalesDetailsComponent);
    return SalesDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/sales/sales.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/sales/sales.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting:after{\r\n    opacity: 0.2;\r\n    content: none;\r\n}\r\ntable.dataTable thead .sorting_asc:after{\r\n    content: none;\r\n}\r\ntable.dataTable thead .sorting_desc:after {\r\n    content: none;\r\n}\r\ntable.dataTable tbody td.bid_data_class{\r\n    color:blue;\r\n}"

/***/ }),

/***/ "./src/app/components/sales/sales.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/sales/sales.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n    <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n        <div class=\"login-info\">\n            <span>\n                <!-- User image size is adjusted inside CSS, it should stay as it -->\n                <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n                    <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n                    <span>\n                        john.doe\n                    </span>\n                </a>\n            </span>\n        </div>\n        <ul>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n                    <span class=\"menu-item-parent\">Sales</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n                    <span class=\"menu-item-parent\">Users</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n                    <span class=\"menu-item-parent\">Roles</span>\n                </a>\n            </li>\n        </ul>\n\n        <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n            <i class=\"fa fa-arrow-circle-left hit\"></i>\n        </span>\n    </div>\n</aside>\n\n<div id=\"main\" #main>\n    <div id=\"ribbon\">\n        <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n        <span class=\"ribbon-button-alignment\">\n            <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n                data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n                data-html=\"true\">\n                <i class=\"fa fa-refresh\"></i>\n            </span>\n        </span>\n\n        <!-- breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li>Home</li>\n            <li>{{title}}</li>\n        </ol>\n        <div id=\"logout\" class=\"btn-header transparent pull-right\">\n            <span>\n                <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n                    <i class=\"fa fa-sign-out\"></i>\n                </a>\n            </span>\n        </div>\n        <!-- end breadcrumb -->\n    </div>\n    <app-navbar></app-navbar>\n    <h4 style=\"display: inline; color:#33679a !important;\" class=\"ml-4 mt-1 text-primary\">Sales Dashboard</h4>\n    <a [routerLink]=\"['/new-lead']\" class=\"pull-right btn btn-info btn-md mt-1 button-custom\" style=\"background-color:#33679a; border-color:#33679a;\">\n        <span class=\"fa fa-plus\"></span> New Lead\n    </a>\n    <div class=\"container\">\n        <table id=\"example\" class=\"table table-striped table-bordered dt-responsive nowrap\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th></th>\n                    <th>Bid #</th>\n                    <th>Received Date</th>\n                    <th>Due Date</th>\n                    <th>Sent Date</th>\n                    <th>Fabricator</th>\n                    <th>Project</th>\n                    <th>Executive</th>\n                    <th>Status</th>\n                </tr>\n            </thead>\n        </table>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/sales/sales.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/sales/sales.component.ts ***!
  \*****************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var dt = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
var SalesComponent = /** @class */ (function () {
    function SalesComponent(rootNode, authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.title = "Sales";
        this.rootNode = rootNode;
    }
    SalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _self = this;
        this.authService.getSales().subscribe(function (data) {
            console.log("sales", data, typeof (data.data));
            _this.salesData = data.data;
            _this.salesData.forEach(function (ele) {
                ele.bid_received_date = new Date(ele.bid_received_date).toDateString();
                ele.bid_due_date = new Date(ele.bid_due_date).toDateString();
                ele.bid_sent_date = new Date(ele.bid_sent_date).toDateString();
            });
            function format(d) {
                // `d` is the original data object for the row
                return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
                    '<tr>' +
                    '<td>Bid Number:</td>' +
                    '<td>' + d.bid_number + '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Fabricator:</td>' +
                    '<td>' + d.fabricator_name + '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Executive:</td>' +
                    '<td>' + d.executive + '</td>' +
                    '</tr>' +
                    '</table>';
            }
            var table = $('#example').DataTable({
                data: _this.salesData,
                columns: [
                    {
                        "className": 'details-control',
                        "orderable": false,
                        "data": null,
                        "defaultContent": '',
                        "render": function () {
                            return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
                        },
                        width: "15px"
                    },
                    { "className": 'bid_class',
                        data: 'bid_number',
                    },
                    {
                        data: 'bid_received_date',
                        type: 'date'
                    },
                    {
                        data: 'bid_due_date',
                        type: 'date'
                    },
                    {
                        data: 'bid_sent_date',
                        type: 'date'
                    },
                    { data: 'fabricator_name' },
                    { data: 'project_name' },
                    { data: 'executive' },
                    { data: 'status' }
                ]
            });
            $('#example tbody').on('click', 'td:nth-child(2)', function () {
                var table = $('#example').DataTable();
                var bid_number = table.cell(this).data();
                if (bid_number != null) {
                    _self.router.navigate(['/sales', bid_number]);
                }
            });
            // $('#example tbody').on('mouseover', 'td:nth-child(2)', function () {
            //   var table = $('#example').DataTable();
            //   console.log(table.cell(this).data());
            //   this.style.color="red";
            // });
            $('#example tbody').on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var tdi = tr.find("i.fa");
                var row = table.row(tr);
                if (row.child.isShown()) {
                    // This row is already open - close it
                    row.child.hide();
                    tr.removeClass('shown');
                    tdi.first().removeClass('fa-minus-square');
                    tdi.first().addClass('fa-plus-square');
                }
                else {
                    // Open this row
                    row.child(format(row.data())).show();
                    tr.addClass('shown');
                    tdi.first().removeClass('fa-plus-square');
                    tdi.first().addClass('fa-minus-square');
                }
            });
        });
    };
    SalesComponent.prototype.openSalesDetails = function (bid_number) {
        this.router.navigate(['sales', bid_number]);
    };
    SalesComponent.prototype.openNav = function () {
        this.showMenu = false;
        this.mySideNav.nativeElement.style.width = "250px";
        this.main.nativeElement.style.marginLeft = "250px";
    };
    SalesComponent.prototype.closeNav = function () {
        this.showMenu = true;
        this.mySideNav.nativeElement.style.width = "0";
        this.main.nativeElement.style.marginLeft = "0";
    };
    SalesComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success text-center', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySidenav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SalesComponent.prototype, "mySideNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('main'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SalesComponent.prototype, "main", void 0);
    SalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.component.html */ "./src/app/components/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css */ "./node_modules/datatables.net-dt/css/jquery.dataTables.css"), __webpack_require__(/*! ./sales.component.css */ "./src/app/components/sales/sales.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span style=\"font-size:30px;cursor:pointer\" (click)=\"openNav()\">&#9776; open</span>\n\n<div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <a href=\"#\">About</a>\n    <a href=\"#\">Services</a>\n    <a href=\"#\">Clients</a>\n    <a href=\"#\">Contact</a>\n</div>"

/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px; }\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s; }\n\n.sidenav a:hover {\n  color: #f1f1f1; }\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px; }\n\n#main {\n  transition: margin-left .5s;\n  padding: 16px; }\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px; }\n  .sidenav a {\n    font-size: 18px; } }\n"

/***/ }),

/***/ "./src/app/components/side-nav/side-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-nav/side-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNavComponent = /** @class */ (function () {
    function SideNavComponent() {
        this.title = 'app';
    }
    SideNavComponent.prototype.ngOnInit = function () {
        console.log("navss", this.mySideNav, this.main);
    };
    SideNavComponent.prototype.openNav = function () {
        this.mySideNav.nativeElement.style.width = "250px";
        this.main.nativeElement.style.marginLeft = "250px";
    };
    SideNavComponent.prototype.closeNav = function () {
        this.mySideNav.nativeElement.style.width = "0";
        this.main.nativeElement.style.marginLeft = "0";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mySidenav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SideNavComponent.prototype, "mySideNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('main'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SideNavComponent.prototype, "main", void 0);
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/components/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/components/side-nav/side-nav.component.scss")]
        })
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting:after{\r\n    opacity: 0.2;\r\n    content: none;\r\n}\r\ntable.dataTable thead .sorting_asc:after{\r\n    content: none;\r\n}\r\ntable.dataTable thead .sorting_desc:after {\r\n    content: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n    <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n        <div class=\"login-info\">\n            <span>\n                <!-- User image size is adjusted inside CSS, it should stay as it -->\n                <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n                    <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n                    <span>\n                        john.doe\n                    </span>\n                </a>\n            </span>\n        </div>\n        <ul>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n                    <span class=\"menu-item-parent\">Sales</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n                    <span class=\"menu-item-parent\">Users</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                    <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n                        <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n                        <span class=\"menu-item-parent\">Roles</span>\n                    </a>\n                </li>\n        </ul>\n\n        <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n            <i class=\"fa fa-arrow-circle-left hit\"></i>\n        </span>\n    </div>\n</aside>\n\n<div id=\"main\" #main>\n    <div id=\"ribbon\">\n        <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n        <span class=\"ribbon-button-alignment\">\n            <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n                data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n                data-html=\"true\">\n                <i class=\"fa fa-refresh\"></i>\n            </span>\n        </span>\n\n        <!-- breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li>Home</li>\n            <li>{{title}}</li>\n        </ol>\n        <div id=\"logout\" class=\"btn-header transparent pull-right\">\n            <span>\n                <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n                    <i class=\"fa fa-sign-out\"></i>\n                </a>\n            </span>\n        </div>\n        <!-- end breadcrumb -->\n    </div>\n    <app-navbar></app-navbar>\n    <h4 style=\"display: inline; color:#33679a !important;\" class=\"ml-4 mt-1 text-primary\">Users</h4>\n    <div class=\"container\">\n        <table id=\"example\" class=\"table table-striped table-bordered dt-responsive nowrap\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th>User</th>\n                    <th>Email</th>\n                    <th>Contact</th>\n                </tr>\n            </thead>\n        \n        </table>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var dt = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.title = "Users";
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUsers().subscribe(function (data) {
            console.log("sales", data, typeof (data.data));
            _this.usersData = data.data;
            $('#example').DataTable({
                data: _this.usersData,
                columns: [
                    { data: 'user_name' },
                    {
                        data: 'user_email'
                    },
                    {
                        data: 'user_contact_number'
                    }
                ]
            });
        });
    };
    ;
    UsersComponent.prototype.openNav = function () {
        this.showMenu = false;
        this.mySideNav.nativeElement.style.width = "250px";
        this.main.nativeElement.style.marginLeft = "250px";
    };
    UsersComponent.prototype.closeNav = function () {
        this.showMenu = true;
        this.mySideNav.nativeElement.style.width = "0";
        this.main.nativeElement.style.marginLeft = "0";
    };
    UsersComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success text-center', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mySidenav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UsersComponent.prototype, "mySideNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('main'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UsersComponent.prototype, "main", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css */ "./node_modules/datatables.net-dt/css/jquery.dataTables.css"), __webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, authService, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    AdminGuard.prototype.canActivate = function () {
        var _this = this;
        if (this.authService.getUserInfo() === 'admin') {
            // admin so return true
            return true;
        }
        // not admin so redirect to login page with the return url
        this.flashMessage.show("You are not authorized to view this page! Hence redirecting to login!", { cssClass: 'alert-danger text-center', timeout: 3000 });
        setTimeout(function () {
            _this.router.navigate(['/login']);
        }, 3000);
        return false;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        if (this.authService.getUserInfo()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.flashMessage.show("You are not authorized to view this page! Hence redirecting to login!", { cssClass: 'alert-danger text-center', timeout: 3000 });
        setTimeout(function () {
            _this.router.navigate(['/login']);
        }, 3000);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        // this.loginUrl = "http://localhost:5000/loginRequest";
        // this.salesUrl = "http://localhost:5000/api/query/sales";
        // this.usersUrl = "http://localhost:5000/api/query/users";
        // this.rolesUrl = "http://localhost:5000/api/query/roles";
        // this.inclusionsUrl = "http://localhost:5000/api/query/misc_inclusions";
        // this.exClusionsUrl = "http://localhost:5000/api/query/misc_exclusions";
        // this.insertUrl = "http://localhost:5000/api/insertRequest";
        // this.fabricatorUrl = "http://localhost:5000/api/addFabricator";
        // this.getFabricatorsUrl = "http://localhost:5000/api/query/fabricator";
        // this.CountUrl = "http://localhost:5000/api/count/";
        // this.latestUrl = "http://localhost:5000/api/latest";
        this.http = http;
        this.loginUrl = "loginRequest";
        this.salesUrl = "api/query/sales";
        this.usersUrl = "api/query/users";
        this.rolesUrl = "api/query/roles";
        this.inclusionsUrl = "api/query/misc_inclusions";
        this.exClusionsUrl = "api/query/misc_exclusions";
        this.insertUrl = "api/insertRequest";
        this.fabricatorUrl = "api/addFabricator";
        this.getFabricatorsUrl = "api/query/fabricator";
        this.CountUrl = "api/count/";
        this.latestUrl = "api/latest";
    }
    AuthService.prototype.login = function (username, password) {
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        var statement = "select * from users where user_username = ? and user_password = ? ";
        //params.append('Content-Type', 'application/json');
        params.append('statement', statement);
        params.append('username', username);
        params.append('password', password);
        console.log("params", params);
        return this.http.post(this.loginUrl, params)
            .map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.publishLead = function (publishLeadData) {
        var statement = "update sales set ? where bid_number = " + '\'' + publishLeadData.bid_number + '\'';
        var searchParams = {
            params: {
                data: publishLeadData,
                statement: statement
            }
        };
        return this.http.post(this.insertUrl, searchParams)
            .map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.addLead = function (newLead) {
        //let statement: string = "insert into sales (bid_number, status, bid_type ,document_path, document_received, exclusion, executive,fabricator_address, fabricator, inclusion,main_steel_est_schedule,main_steel_hours,misc_steel_est_schedule,misc_steel_hours,fabricator_phone,bid_received_date,bid_received_from,bid_sent_date,fabricator_Url) values ? ";
        var statement = "insert into sales set ? ";
        var searchParams = {
            params: {
                data: newLead,
                statement: statement
            }
        };
        //console.log("url", this.saleInsertUrl);
        return this.http.post(this.insertUrl, searchParams)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getCount = function (tableName) {
        return this.http.get(this.CountUrl + tableName)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getLatestQuote = function () {
        var sales_id = sessionStorage.getItem('sales_id');
        var statement = "select * from quote where sales_id = ? order by quote_id DESC limit 1";
        var insertParams = {
            params: {
                statement: statement,
                sales_id: sales_id,
            }
        };
        return this.http.post(this.latestUrl, insertParams)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getLatestEstimation = function () {
        var sales_id = sessionStorage.getItem('sales_id');
        var statement = "select * from estimate where sales_id = ? order by Estimate_id DESC limit 1";
        var insertParams = {
            params: {
                statement: statement,
                sales_id: sales_id,
            }
        };
        return this.http.post(this.latestUrl, insertParams)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addQuote = function (quote) {
        var statement = "insert into quote set ? ";
        var statement_2 = "update sales set ? where sales_id = ? ";
        //let headers = { "Content-Type": "application/x-www-form-urlencoded" };
        var insertParams = {
            params: {
                data: quote,
                statement: statement,
                statement_2: statement_2
            }
        };
        return this.http.post(this.insertUrl, insertParams)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addEstimation = function (estimation) {
        var statement = "insert into estimate set ? ";
        var statement_2 = "update sales set ? where sales_id = ? ";
        //let headers = { "Content-Type": "application/x-www-form-urlencoded" };
        var insertParams = {
            params: {
                data: estimation,
                statement: statement,
                statement_2: statement_2
            }
        };
        return this.http.post(this.insertUrl, insertParams)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateBidStatus = function (status, bid_number) {
        console.log("update", status, bid_number, this.salesUrl);
        var statement = "update sales set status = ? where bid_number = ? ";
        //params.append('Content-Type', 'application/json');
        //params.append('statement', statement);
        var headers = { "Content-Type": "application/x-www-form-urlencoded" };
        var searchParams = {
            params: {
                statement: statement,
                bid_number: bid_number,
                status: status
            }
        };
        return this.http.put(this.salesUrl, searchParams);
    };
    AuthService.prototype.addFabricator = function (fabricator) {
        var statement = "insert into fabricator set ?";
        var headers = { "Content-Type": "application/x-www-form-urlencoded" };
        var searchParams = {
            params: {
                fabricator: fabricator,
                statement: statement
            }
        };
        return this.http.post(this.fabricatorUrl, searchParams)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserInfo = function () {
        if (sessionStorage.getItem('user_role_code')) {
            return sessionStorage.getItem('user_role_code');
        }
        else {
            return false;
        }
    };
    AuthService.prototype.getSales = function () {
        return this.http.get(this.salesUrl)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getFabricators = function () {
        return this.http.get(this.getFabricatorsUrl)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSalesDetails = function (bid_number) {
        return this.http.get(this.salesUrl + "/" + bid_number.toString())
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getRoles = function () {
        return this.http.get(this.rolesUrl)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getInclusions = function () {
        return this.http.get(this.inclusionsUrl)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getExclusions = function () {
        return this.http.get(this.exClusionsUrl)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        sessionStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cbsai\Desktop\Freelance\iApp\iApp-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map