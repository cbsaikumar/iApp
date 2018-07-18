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

module.exports = "<flash-messages></flash-messages>\r\n<main [@fadeAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\r\n    <router-outlet #o=\"outlet\"></router-outlet>\r\n</main>"

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
                _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_22__["RolesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'sales', component: _components_sales_sales_component__WEBPACK_IMPORTED_MODULE_6__["SalesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'new-lead', component: _components_new_lead_new_lead_component__WEBPACK_IMPORTED_MODULE_9__["NewLeadComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'estimation', component: _components_estimation_estimation_component__WEBPACK_IMPORTED_MODULE_5__["EstimationComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
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

module.exports = "table.dataTable thead .sorting:after{\r\n    opacity: 0.2;\r\n    content: none;\r\n}\r\ntable.dataTable thead .sorting_asc:after{\r\n    content: none;\r\n}\r\ntable.dataTable thead .sorting_desc:after {\r\n    content: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/estimation/estimation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/estimation/estimation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n    <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n        <div class=\"login-info\">\n            <span>\n                <!-- User image size is adjusted inside CSS, it should stay as it -->\n                <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n                    <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n                    <span>\n                        john.doe\n                    </span>\n                </a>\n            </span>\n        </div>\n        <ul>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n                    <span class=\"menu-item-parent\">Sales</span>\n                </a>\n            </li>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Estimation\" [routerLink]=\"['/estimation']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-list-alt\"></i>\n                    <span class=\"menu-item-parent\">Estimation</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n                    <span class=\"menu-item-parent\">Users</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n                    <span class=\"menu-item-parent\">Roles</span>\n                </a>\n            </li>\n        </ul>\n\n        <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n            <i class=\"fa fa-arrow-circle-left hit\"></i>\n        </span>\n    </div>\n</aside>\n\n<div id=\"main\" #main>\n    <div id=\"ribbon\">\n        <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n        <span class=\"ribbon-button-alignment\">\n            <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n                data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n                data-html=\"true\">\n                <i class=\"fa fa-refresh\"></i>\n            </span>\n        </span>\n\n        <!-- breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li>Home</li>\n            <li>{{title}}</li>\n        </ol>\n        <div id=\"logout\" class=\"btn-header transparent pull-right\">\n            <span>\n                <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n                    <i class=\"fa fa-sign-out\"></i>\n                </a>\n            </span>\n        </div>\n        <!-- end breadcrumb -->\n    </div>\n    <app-navbar></app-navbar>\n    <h4 style=\"display: inline; color:#33679a !important;\" class=\"ml-4 mt-1 text-primary\">Estimation</h4>\n    <div class=\"container\">\n        <table id=\"example\" class=\"table table-striped table-bordered dt-responsive nowrap\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th>Bid #</th>\n                    <th>Company</th>\n                    <th>Assign Date</th>\n                    <th>Completion Date</th>\n                    <th>Assigned to</th>\n                    <th>Status</th>\n                </tr>\n            </thead>\n        </table>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/estimation/estimation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/estimation/estimation.component.ts ***!
  \***************************************************************/
/*! exports provided: EstimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimationComponent", function() { return EstimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
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
var EstimationComponent = /** @class */ (function () {
    function EstimationComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.title = "Estimation";
    }
    EstimationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getSales().subscribe(function (data) {
            console.log("estimation", data, typeof (data.data));
            _this.estimationData = data.data;
            _this.estimationData.forEach(function (ele) {
                ele.bid_received_date = new Date(ele.bid_received_date).toDateString();
                ele.bid_due_date = new Date(ele.bid_due_date).toDateString();
                ele.bid_sent_date = new Date(ele.bid_sent_date).toDateString();
            });
            console.log("@@@", _this.estimationData);
            $('#example').DataTable({
                data: _this.estimationData,
                columns: [
                    { data: 'bid_number' },
                    {
                        data: 'fabricator',
                    },
                    {
                        data: 'bid_sent_date',
                        type: 'date'
                    },
                    {
                        data: 'bid_due_date',
                        type: 'date'
                    },
                    { data: 'executive' },
                    { data: 'status' }
                ]
            });
        });
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
    EstimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estimation',
            template: __webpack_require__(/*! ./estimation.component.html */ "./src/app/components/estimation/estimation.component.html"),
            styles: [__webpack_require__(/*! ../../../../node_modules/datatables.net-dt/css/jquery.dataTables.css */ "./node_modules/datatables.net-dt/css/jquery.dataTables.css"), __webpack_require__(/*! ./estimation.component.css */ "./src/app/components/estimation/estimation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EstimationComponent);
    return EstimationComponent;
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

module.exports = "\n<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark navbar-custom\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/sales']\">\n    <img src=\"https://res.cloudinary.com/candidbusiness/image/upload/v1455406304/dispute-bills-chicago.png\" alt=\"Dispute Bills\">\n  </a>\n    <button class=\"navbar-toggler\" (click)=\"collapse=!collapse\" type=\"button\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div style=\"display: inline !important;\" class=\"navbar-collapse\" (click)=\"collapse=false\" [hidden]=\"!collapse\">\n      <ul class=\"navbar-nav mr-auto pull-right\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink] = \"['/sales']\">Sales\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink] = \"['/estimation']\">Estimation </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink] = \"['/users']\">Users</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink] = \"['/roles']\">Roles</a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"\" (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>"

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

module.exports = "<aside id=\"left-panel\">\n    <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n        <div class=\"login-info\">\n            <span>\n                <!-- User image size is adjusted inside CSS, it should stay as it -->\n                <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n                    <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n                    <span>\n                        john.doe\n                    </span>\n                </a>\n            </span>\n        </div>\n        <ul>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n                    <span class=\"menu-item-parent\">Sales</span>\n                </a>\n            </li>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Estimation\" [routerLink]=\"['/estimation']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-list-alt\"></i>\n                    <span class=\"menu-item-parent\">Estimation</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n                    <span class=\"menu-item-parent\">Users</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n                    <span class=\"menu-item-parent\">Roles</span>\n                </a>\n            </li>\n        </ul>\n\n        <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n            <i class=\"fa fa-arrow-circle-left hit\"></i>\n        </span>\n    </div>\n</aside>\n\n<div id=\"main\" #main>\n    <div id=\"ribbon\">\n        <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n        <span class=\"ribbon-button-alignment\">\n            <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n                data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n                data-html=\"true\">\n                <i class=\"fa fa-refresh\"></i>\n            </span>\n        </span>\n\n        <!-- breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li>Home</li>\n            <li>{{title}}</li>\n        </ol>\n        <div id=\"logout\" class=\"btn-header transparent pull-right\">\n            <span>\n                <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n                    <i class=\"fa fa-sign-out\"></i>\n                </a>\n            </span>\n        </div>\n        <!-- end breadcrumb -->\n    </div>\n    <app-navbar></app-navbar>\n\n    <div class=\"container\" *ngIf=\"!submitted && !submitSuccess\">\n        <div class=\"col-lg-12 well\">\n            <div class=\"row\">\n                <form #newLeadForm=\"ngForm\" (ngSubmit)=\"register(newLeadForm.value);\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-6 form-group\">\n                                <p>Bid Number</p>\n                            </div>\n                            <div class=\"col-sm-6 form-group\">\n                                <input type=\"text\" placeholder=\"Enter Bid Number Here..\" name=\"bid_number\" ngModel class=\"form-control\" required>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <h5 class=\"col-sm-6 form-group\">Fabricator Info</h5>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Fabricator Name</label>\n                                <input type=\"text\" ngModel name=\"fabricator\" required placeholder=\"Enter Fabricator Name Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Url</label>\n                                <input type=\"text\" ngModel name=\"fabricator_Url\" required placeholder=\"Enter Url Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Phone</label>\n                                <input type=\"text\" ngModel name=\"fabricator_phone\" required placeholder=\"Enter Phone Here..\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Address</label>\n                            <textarea placeholder=\"Enter Address Here..\" rows=\"3\" required class=\"form-control\" ngModel name=\"fabricator_address\"></textarea>\n                        </div>\n\n                        <div class=\"row\">\n                            <h5 class=\"col-sm-6 form-group\">Bid Info</h5>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Received Date</label>\n                                <input type=\"date\" ngModel name=\"bid_received_date\" required placeholder=\"Enter Received Date Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Received From</label>\n                                <input type=\"text\" ngModel name=\"bid_received_from\" required placeholder=\"Enter Received From Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Send Date</label>\n                                <input type=\"date\" ngModel name=\"bid_sent_date\" required placeholder=\"Enter Send Date Here..\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Document Received</label>\n                                <input type=\"text\" ngModel name=\"document_received\" required placeholder=\"Enter Document Received Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Document Path</label>\n                                <input type=\"text\" ngModel name=\"document_path\" required placeholder=\"Enter Document Path Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Bid Status</label>\n                                <input type=\"text\" ngModel name=\"status\" required placeholder=\"Enter Bid Status Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Executive</label>\n                                <input type=\"text\" ngModel name=\"executive\" required placeholder=\"Enter Executive Here..\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 col-lg-4\">\n                                <label>Bid Type</label>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <input ngModel name=\"bid_type\" value=\"Structural\" type=\"radio\">Structural\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <input ngModel name=\"bid_type\" type=\"radio\" value=\"Miscellaneous\">Miscellaneous\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <input ngModel name=\"bid_type\" type=\"radio\" value=\"Engineering\">Engineering\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <h5 class=\"col-sm-6 form-group\">Estimation Info</h5>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Project Name</label>\n                                <input type=\"text\" name=\"project_name\" ngModel required placeholder=\"Enter Bid Type Name Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Main Steel Hours</label>\n                                <input type=\"number\" ngModel required name=\"main_steel_hours\" placeholder=\"Enter Main Steel Hours Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Main Steel Estimated Schedule</label>\n                                <input type=\"date\" ngModel required name=\"main_steel_est_schedule\" placeholder=\"Enter Main Steel Estimated Schedule Here..\"\n                                    class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Misc Steel Hours</label>\n                                <input type=\"number\" ngModel required name=\"misc_steel_hours\" placeholder=\"Enter Misc Steel Hours Here..\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Misc Steel Estimated Schedule</label>\n                                <input type=\"date\" ngModel required name=\"misc_steel_est_schedule\" placeholder=\"Enter Misc Steel Estimated Schedule Here..\"\n                                    class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Inclusions</label>\n                            </div>\n                            <div class=\"col-sm-12 col-lg-12 form-group\">\n                                <p *ngFor=\"let inclusion of misc_inclusions\">\n                                    <input type=\"checkbox\" value=\"{{inclusion.misc_inc_desc}}\" #inc (change)=\"addInclusion(inc, $event)\" name=\"inclusions\">{{inclusion.misc_inc_desc}}</p>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 col-lg-4 form-group\">\n                                <label>Exclustions</label>\n                            </div>\n                            <div class=\"col-sm-12 col-lg-12 form-group\">\n                                <p *ngFor=\"let exclusion of misc_exclusions\">\n                                    <input type=\"checkbox\" value=\"{{exclusion.misc_exc_desc}}\" #exc (change)=\"addExclusion(exc, $event)\" name=\"exclusions\">{{exclusion.misc_exc_desc}}</p>\n                            </div>\n                        </div>\n                        <button type=\"submit\" [disabled]=\"!newLeadForm.valid\" class=\"btn btn-md btn-info submit-btn\">Submit</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-100 container well\" *ngIf=\"submitSuccess\">\n        <div class=\"text-center\">\n            <i class=\"fa fa-5x fa-check-circle\" style=\"color: green;\"></i>\n        </div>\n        <div class=\"\">\n            <span class=\"text-center\">\n                <h6>You have Successfully submitted the form. You can either add another or go to home.</h6>\n            </span>\n        </div>\n        <div class=\"alert alert-success text-center\">\n            <strong>Success!</strong> Added Successfully.\n        </div>\n    </div>\n    <div class=\"container well\" *ngIf=\"submitted\">\n        <div class=\"text-center\">\n            <i class=\"fa fa-5x fa-frown\" style=\"color: orangered;\"></i>\n        </div>\n        <div class=\"\">\n            <span class=\"text-center\">\n                <h6>Try again. You can either try again or go back.</h6>\n            </span>\n        </div>\n        <div class=\"alert alert-danger text-center\">\n            <strong>Error!</strong> Unsuccessful.\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>"

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
    function NewLeadComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.title = "Add Lead";
        this.inclusions = [];
        this.exclusions = [];
    }
    NewLeadComponent.prototype.register = function (newLeadForm) {
        var _this = this;
        console.log("newLeadForm", newLeadForm);
        var newLeadData;
        newLeadData = newLeadForm;
        newLeadData.inclusion = this.inclusions.toString();
        newLeadData.exclusion = this.exclusions.toString();
        console.log("newLeadData", newLeadData);
        this.authService.register(newLeadData).subscribe(function (data) {
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
        this.authService.getInclusions().subscribe(function (data) {
            _this.misc_inclusions = data.data;
        });
        this.authService.getExclusions().subscribe(function (data) {
            _this.misc_exclusions = data.data;
        });
    };
    ;
    NewLeadComponent.prototype.addInclusion = function (inc, event) {
        if (event.target.checked === true) {
            this.inclusions.push(inc.value);
        }
        else {
            var index = this.inclusions.indexOf(inc.value);
            this.inclusions.splice(index, 1);
        }
    };
    NewLeadComponent.prototype.addExclusion = function (exc, event) {
        if (event.target.checked === true) {
            this.exclusions.push(exc.value);
        }
        else {
            var index = this.exclusions.indexOf(exc.value);
            this.exclusions.splice(index, 1);
        }
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
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewLeadComponent);
    return NewLeadComponent;
}());



/***/ }),

/***/ "./src/app/components/roles/roles.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/roles/roles.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n    <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n        <div class=\"login-info\">\n            <span>\n                <!-- User image size is adjusted inside CSS, it should stay as it -->\n                <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n                    <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n                    <span>\n                        john.doe\n                    </span>\n                </a>\n            </span>\n        </div>\n        <ul>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n                    <span class=\"menu-item-parent\">Sales</span>\n                </a>\n            </li>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Estimation\" [routerLink]=\"['/estimation']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-list-alt\"></i>\n                    <span class=\"menu-item-parent\">Estimation</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n                    <span class=\"menu-item-parent\">Users</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n                    <span class=\"menu-item-parent\">Roles</span>\n                </a>\n            </li>\n        </ul>\n\n        <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n            <i class=\"fa fa-arrow-circle-left hit\"></i>\n        </span>\n    </div>\n</aside>\n\n<div id=\"main\" #main>\n    <div id=\"ribbon\">\n        <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n        <span class=\"ribbon-button-alignment\">\n            <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n                data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n                data-html=\"true\">\n                <i class=\"fa fa-refresh\"></i>\n            </span>\n        </span>\n\n        <!-- breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li>Home</li>\n            <li>{{title}}</li>\n        </ol>\n        <div id=\"logout\" class=\"btn-header transparent pull-right\">\n            <span>\n                <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n                    <i class=\"fa fa-sign-out\"></i>\n                </a>\n            </span>\n        </div>\n        <!-- end breadcrumb -->\n    </div>\n    <app-navbar></app-navbar>\n    <h4 style=\"display: inline; color:#33679a !important;\" class=\"ml-4 mt-1 text-primary\">Roles</h4>\n    <div class=\"container\">\n        <table id=\"example\" class=\"ml-10 table table-striped table-bordered dt-responsive nowrap\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th>Role Code</th>\n                    <th>Role Name</th>\n                </tr>\n            </thead>\n        </table>\n    </div>\n    <app-footer></app-footer>\n</div>"

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

/***/ "./src/app/components/sales/sales.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/sales/sales.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting:after{\r\n    opacity: 0.2;\r\n    content: none;\r\n}\r\ntable.dataTable thead .sorting_asc:after{\r\n    content: none;\r\n}\r\ntable.dataTable thead .sorting_desc:after {\r\n    content: none;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/sales/sales.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/sales/sales.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n    <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n        <div class=\"login-info\">\n            <span>\n                <!-- User image size is adjusted inside CSS, it should stay as it -->\n                <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n                    <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n                    <span>\n                        john.doe\n                    </span>\n                </a>\n            </span>\n        </div>\n        <ul>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n                    <span class=\"menu-item-parent\">Sales</span>\n                </a>\n            </li>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Estimation\" [routerLink]=\"['/estimation']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-list-alt\"></i>\n                    <span class=\"menu-item-parent\">Estimation</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n                    <span class=\"menu-item-parent\">Users</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n                    <span class=\"menu-item-parent\">Roles</span>\n                </a>\n            </li>\n        </ul>\n\n        <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n            <i class=\"fa fa-arrow-circle-left hit\"></i>\n        </span>\n    </div>\n</aside>\n\n<div id=\"main\" #main>\n    <div id=\"ribbon\">\n        <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n        <span class=\"ribbon-button-alignment\">\n            <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n                data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n                data-html=\"true\">\n                <i class=\"fa fa-refresh\"></i>\n            </span>\n        </span>\n\n        <!-- breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li>Home</li>\n            <li>{{title}}</li>\n        </ol>\n        <div id=\"logout\" class=\"btn-header transparent pull-right\">\n            <span>\n                <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n                    <i class=\"fa fa-sign-out\"></i>\n                </a>\n            </span>\n        </div>\n        <!-- end breadcrumb -->\n    </div>\n    <app-navbar></app-navbar>\n    <h4 style=\"display: inline; color:#33679a !important;\" class=\"ml-4 mt-1 text-primary\">Sales Dashboard</h4>\n    <a [routerLink]=\"['/new-lead']\" class=\"pull-right btn btn-info btn-md mt-1 button-custom\" style=\"background-color:#33679a; border-color:#33679a;\">\n        <span class=\"fa fa-plus\"></span> New Lead\n    </a>\n    <div class=\"container\">\n        <table id=\"example\" class=\"table table-striped table-bordered dt-responsive nowrap\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th>Bid #</th>\n                    <th>Received Date</th>\n                    <th>Due Date</th>\n                    <th>Sent Date</th>\n                    <th>Fabricator</th>\n                    <th>Project</th>\n                    <th>Executive</th>\n                    <th>Status</th>\n                </tr>\n            </thead>\n        </table>\n    </div>\n    <app-footer></app-footer>\n</div>"

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
        this.authService.getSales().subscribe(function (data) {
            console.log("sales", data, typeof (data.data));
            _this.salesData = data.data;
            _this.salesData.forEach(function (ele) {
                ele.bid_received_date = new Date(ele.bid_received_date).toDateString();
                ele.bid_due_date = new Date(ele.bid_due_date).toDateString();
                ele.bid_sent_date = new Date(ele.bid_sent_date).toDateString();
            });
            console.log("@@@", _this.salesData);
            $('#example').DataTable({
                data: _this.salesData,
                columns: [
                    { data: 'bid_number' },
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
                    { data: 'fabricator' },
                    { data: 'project_name' },
                    { data: 'executive' },
                    { data: 'status' }
                ]
            });
        });
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
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<aside id=\"left-panel\">\n    <div id=\"mySidenav\" #mySidenav class=\"sidenav\">\n        <div class=\"login-info\">\n            <span>\n                <!-- User image size is adjusted inside CSS, it should stay as it -->\n                <a href=\"javascript:void(0);\" id=\"show-shortcut\" data-action=\"toggleShortcut\" style=\"padding: 0px;\">\n                    <img src=\"../../../assets/imgs/sunny.png\" alt=\"me\" class=\"online\">\n                    <span>\n                        john.doe\n                    </span>\n                </a>\n            </span>\n        </div>\n        <ul>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Sales\" [routerLink]=\"['/sales']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-home\"></i>\n                    <span class=\"menu-item-parent\">Sales</span>\n                </a>\n            </li>\n            <li class=\"active open\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Estimation\" [routerLink]=\"['/estimation']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-list-alt\"></i>\n                    <span class=\"menu-item-parent\">Estimation</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a href=\"#\" title=\"Users\" [routerLink]=\"['/users']\">\n                    <i class=\"mr-2 fa fa-lg fa-fw fa-user-circle\"></i>\n                    <span class=\"menu-item-parent\">Users</span>\n                </a>\n            </li>\n            <li class=\"active open\" *ngIf=\"authService.getUserInfo() === 'admin'\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                    <a href=\"#\" title=\"Roles\" [routerLink]=\"['/roles']\">\n                        <i class=\"mr-2 fa fa-lg fa-fw fa-users\"></i>\n                        <span class=\"menu-item-parent\">Roles</span>\n                    </a>\n                </li>\n        </ul>\n\n        <span class=\"minifyme\" data-action=\"minifyMenu\" (click)=\"closeNav()\" style=\"\">\n            <i class=\"fa fa-arrow-circle-left hit\"></i>\n        </span>\n    </div>\n</aside>\n\n<div id=\"main\" #main>\n    <div id=\"ribbon\">\n        <span *ngIf=\"showMenu\" style=\"font-size:30px;cursor:pointer; color:aliceblue;\" (click)=\"openNav()\">&#9776;</span>\n        <span class=\"ribbon-button-alignment\">\n            <span id=\"refresh\" class=\"btn btn-ribbon\" data-action=\"resetWidgets\" data-title=\"refresh\" rel=\"tooltip\" data-placement=\"bottom\"\n                data-original-title=\"<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings.\"\n                data-html=\"true\">\n                <i class=\"fa fa-refresh\"></i>\n            </span>\n        </span>\n\n        <!-- breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <li>Home</li>\n            <li>{{title}}</li>\n        </ol>\n        <div id=\"logout\" class=\"btn-header transparent pull-right\">\n            <span>\n                <a (click)=\"logout()\" title=\"Sign Out\" data-action=\"userLogout\" data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\">\n                    <i class=\"fa fa-sign-out\"></i>\n                </a>\n            </span>\n        </div>\n        <!-- end breadcrumb -->\n    </div>\n    <app-navbar></app-navbar>\n    <h4 style=\"display: inline; color:#33679a !important;\" class=\"ml-4 mt-1 text-primary\">Users</h4>\n    <div class=\"container\">\n        <table id=\"example\" class=\"table table-striped table-bordered dt-responsive nowrap\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th>User</th>\n                    <th>Email</th>\n                    <th>Contact</th>\n                </tr>\n            </thead>\n        \n        </table>\n    </div>\n    <app-footer></app-footer>\n</div>"

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
        this.http = http;
        this.loginUrl = "/loginRequest";
        this.salesUrl = "/api/query/sales";
        this.usersUrl = "/api/query/users";
        this.rolesUrl = "/api/query/roles";
        this.inclusionsUrl = "/api/query/misc_inclusions";
        this.exClusionsUrl = "/api/query/misc_exclusions";
        this.saleInsertUrl = "/api/insertRequest";
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
    AuthService.prototype.register = function (data) {
        var statement = "insert into sales (bid_number, status, bid_type ,document_path, document_received, exclusion, executive,fabricator_address, fabricator, inclusion,main_steel_est_schedule,main_steel_hours,misc_steel_est_schedule,misc_steel_hours,fabricator_phone,bid_received_date,bid_received_from,bid_sent_date,fabricator_Url) values ? ";
        //params.append('Content-Type', 'application/json');
        //params.append('statement', statement);
        var headers = { "Content-Type": "application/x-www-form-urlencoded" };
        //console.log("url", this.saleInsertUrl);
        return this.http.post(this.saleInsertUrl, data)
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