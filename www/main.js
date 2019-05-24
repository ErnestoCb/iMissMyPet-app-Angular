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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-menu>\r\n  <app-map></app-map>\r\n</app-main-menu>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'iMissMyPet';
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener('deviceready', function () {
            alert(device.platform);
        }, false);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forms/forms.component */ "./src/app/components/forms/forms.component.ts");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/app/components/orders/orders.component.ts");
/* harmony import */ var _components_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/orders/orders-list/orders-list.component */ "./src/app/components/orders/orders-list/orders-list.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _materials_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./materials.module */ "./src/app/materials.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");













//Firebase




//map

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"],
                _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_8__["OrdersComponent"],
                _components_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_9__["OrdersListComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_10__["MainMenuComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _materials_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].configFirebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_17__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAlXZzuLE7xkSiAd1LR0zKepitulDEo3JU'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/forms/forms.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/forms/forms.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvZm9ybXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/forms/forms.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/forms/forms.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  forms works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/forms/forms.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/forms/forms.component.ts ***!
  \*****************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/components/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.css */ "./src/app/components/forms/forms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-orders></app-orders>\n  <app-orders-list></app-orders-list>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/map/map.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map (mapClick)=\"placeMarker($event)\" [zoom]=\"zoom\" [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>"

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapComponent = /** @class */ (function () {
    function MapComponent() {
        var _this = this;
        this.zoom = 16;
        if (navigator) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                _this.lng = +pos.coords.longitude;
                _this.lat = +pos.coords.latitude;
            });
        }
    }
    MapComponent.prototype.placeMarker = function ($event) {
        console.log($event.coords.lat);
        console.log($event.coords.lng);
    };
    MapComponent.prototype.ngOnInit = function () {
        console.log("hola " + this.zoom);
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/components/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/components/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/components/orders/orders-list/orders-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/orders/orders-list/orders-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\n.mat-icon {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlcnMvb3JkZXJzLWxpc3Qvb3JkZXJzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZGVycy9vcmRlcnMtbGlzdC9vcmRlcnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/orders/orders-list/orders-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/orders/orders-list/orders-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <!-- Order Column -->\n  <ng-container matColumnDef=\"orderNumber\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Numero de Orden </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.orderNumber}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"customerName\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.customerName}} </td>\n  </ng-container>\n\n  <!-- Product Column -->\n  <ng-container matColumnDef=\"order\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Productos </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.order}} </td>\n  </ng-container>\n\n  <!-- completed Column -->\n  <ng-container matColumnDef=\"completed\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Estado </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.completed}} </td>\n  </ng-container>\n\n  <!-- total Column -->\n  <ng-container matColumnDef=\"total\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Total </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.totalOrder}}$ </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef> Acciones </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-icon (click)=\"onChangeStatus(element)\">edit</mat-icon>\n      &nbsp;\n      <mat-icon (click)=\"onDelete(element.id)\">delete</mat-icon>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/components/orders/orders-list/orders-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/orders/orders-list/orders-list.component.ts ***!
  \************************************************************************/
/*! exports provided: OrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListComponent", function() { return OrdersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/order.service */ "./src/app/shared/order.service.ts");




var OrdersListComponent = /** @class */ (function () {
    function OrdersListComponent(orderService) {
        this.orderService = orderService;
        this.displayedColumns = ['orderNumber', 'customerName', 'order', 'completed', 'total', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    OrdersListComponent.prototype.ngOnInit = function () {
        //Get all orders
        this.getAllOrders();
    };
    OrdersListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    OrdersListComponent.prototype.getAllOrders = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    OrdersListComponent.prototype.onDelete = function (id) {
        this.orderService.deleteOrder(id);
    };
    OrdersListComponent.prototype.onChangeStatus = function (order) {
        order.completed = true;
        this.orderService.updateOrder(order);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], OrdersListComponent.prototype, "sort", void 0);
    OrdersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders-list',
            template: __webpack_require__(/*! ./orders-list.component.html */ "./src/app/components/orders/orders-list/orders-list.component.html"),
            styles: [__webpack_require__(/*! ./orders-list.component.css */ "./src/app/components/orders/orders-list/orders-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_order_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]])
    ], OrdersListComponent);
    return OrdersListComponent;
}());



/***/ }),

/***/ "./src/app/components/orders/orders.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/orders/orders.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-app {\r\n    text-align: center;\r\n}\r\n.buttons-lists {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n.myButton {\r\n    padding: 1rem;\r\n    margin: 1rem;\r\n    width: 30%;\r\n}\r\nli {\r\n    text-decoration: underline;\r\n    padding: 0.3rem 0;\r\n    list-style: none;\r\n}\r\n.btn_send {\r\n    padding: 0.5rem;\r\n    width: 100%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1hcHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idXR0b25zLWxpc3RzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5teUJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxubGkge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBwYWRkaW5nOiAwLjNyZW0gMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5idG5fc2VuZCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/orders/orders.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/orders/orders.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-app\">\n  <h1>Bienvenido a {{appName}}</h1>\n</div>\n\n<div class=\"buttons-lists\">\n  <button mat-raised-button color=\"primary\" class=\"myButton\" *ngFor=\"let product of products\" (click)=\"onAddProduct(product)\">\n    {{product.name}} / {{product.price}}\n  </button>\n\n  <form [formGroup]=\"this.orderService.myForm\" (ngSubmit)=\"onSubmit()\">\n    <table cellspacing=\"0\">\n      <tr>\n        <td>\n          <mat-form-field>\n            <input matInput #orderNumber maxlength=\"3\" placeholder=\"Order Number\"\n              formControlName=\"orderNumber\">\n          </mat-form-field>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <mat-form-field>\n            <input matInput #orderNumber maxlength=\"13\" placeholder=\"Customer\"\n              formControlName=\"customerName\">\n          </mat-form-field>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <button mat-raised-button color=\"primary\" class=\"btn_send\">SEND</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>\n\n<ul class=\"collection\">\n  <li *ngFor=\"let order of tempOrder\">\n    <span>{{order}}</span>\n    <a href=\"#\" (click)=\"removeItemTempOrder(order)\">\n      <mat-icon>delete</mat-icon>\n    </a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/orders/orders.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/orders/orders.component.ts ***!
  \*******************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/order.service */ "./src/app/shared/order.service.ts");



var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(orderService) {
        var _this = this;
        this.orderService = orderService;
        this.appName = "I Miss My Pet";
        this.products = [
            {
                name: "Chips",
                price: 4
            },
            {
                name: "Anvorguesa",
                price: 9
            },
            {
                name: "Pollito",
                price: 8
            },
            {
                name: "Pescao",
                price: 6
            },
            {
                name: "Postresito",
                price: 3
            },
            {
                name: "Salsa de Neto",
                price: 1
            },
            {
                name: "Cafe",
                price: 1
            },
            {
                name: "Cervezita",
                price: 1
            },
            {
                name: "Jugo de tu vieja",
                price: 1
            }
        ];
        this.totalOrder = 0;
        this.tempOrder = [];
        this.removeItemTempOrder = function (order) {
            var index = _this.tempOrder.indexOf(order);
            if (index > -1)
                _this.tempOrder.splice(index, 1);
        };
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent.prototype.onAddProduct = function (product) {
        console.log(product);
        this.totalOrder = (this.totalOrder + product.price);
        this.tempOrder.push(product.name);
    };
    OrdersComponent.prototype.onSubmit = function () {
        this.orderService.myForm.value.order = this.tempOrder;
        var data = this.orderService.myForm.value;
        data.totalOrder = this.totalOrder;
        // llamar al service
        this.orderService.createOrder(data);
        this.tempOrder = [];
        this.totalOrder = 0;
        this.orderService.myForm.reset();
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/components/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/components/orders/orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_order_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"#\">Main</a>\n      <a mat-list-item href=\"#\">Reportes</a>\n      <a mat-list-item href=\"#\">Empleados</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>I Miss My Pet</span>\n    </mat-toolbar>\n      <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/materials.module.ts":
/*!*************************************!*\
  !*** ./src/app/materials.module.ts ***!
  \*************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/order.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/order.service.ts ***!
  \*****************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var OrdersService = /** @class */ (function () {
    function OrdersService(afs) {
        this.afs = afs;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            customerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            orderNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            order: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            completed: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('false')
        });
        this.ordersCollection = afs.collection('orders');
        this.orders = this.ordersCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
    }
    OrdersService.prototype.getOrders = function () {
        return this.orders;
    };
    OrdersService.prototype.updateOrder = function (order) {
        return this.ordersCollection.doc(order.id).update(order);
    };
    OrdersService.prototype.deleteOrder = function (id) {
        return this.ordersCollection.doc(id).delete();
    };
    OrdersService.prototype.createOrder = function (order) {
        return this.ordersCollection.add(order);
    };
    OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], OrdersService);
    return OrdersService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    configFirebase: {
        apiKey: "AIzaSyCYG6MfvWZNbnOYKoLrPsaEHpc1qgFQzWc",
        authDomain: "immp-27578.firebaseapp.com",
        databaseURL: "https://immp-27578.firebaseio.com",
        projectId: "immp-27578",
        storageBucket: "immp-27578.appspot.com",
        messagingSenderId: "676159145970",
        appId: "1:676159145970:web:7b2d3b03c9721ce9"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Proyectos\angularTest\iMissMyPet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map