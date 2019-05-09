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
/* harmony import */ var _starwarcharacters_starwarcharacters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./starwarcharacters/starwarcharacters.component */ "./src/app/starwarcharacters/starwarcharacters.component.ts");
/* harmony import */ var _starwarcharacters_characterdetails_characterdetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./starwarcharacters/characterdetails/characterdetails.component */ "./src/app/starwarcharacters/characterdetails/characterdetails.component.ts");





var routes = [
    { path: 'characters', component: _starwarcharacters_starwarcharacters_component__WEBPACK_IMPORTED_MODULE_3__["StarwarcharactersComponent"] },
    { path: 'characters/details/:characterId', component: _starwarcharacters_characterdetails_characterdetails_component__WEBPACK_IMPORTED_MODULE_4__["CharacterdetailsComponent"] },
    { path: '**', redirectTo: 'characters' }
];
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

module.exports = "<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'icecubeapp';
    }
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _starwarcharacters_starwarcharacters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./starwarcharacters/starwarcharacters.component */ "./src/app/starwarcharacters/starwarcharacters.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_swapapi_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/swapapi.service */ "./src/app/services/swapapi.service.ts");
/* harmony import */ var _starwarcharacters_characterdetails_characterdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./starwarcharacters/characterdetails/characterdetails.component */ "./src/app/starwarcharacters/characterdetails/characterdetails.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _starwarcharacters_starwarcharacters_component__WEBPACK_IMPORTED_MODULE_7__["StarwarcharactersComponent"],
                _starwarcharacters_characterdetails_characterdetails_component__WEBPACK_IMPORTED_MODULE_10__["CharacterdetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"]
            ],
            providers: [
                _services_swapapi_service__WEBPACK_IMPORTED_MODULE_9__["SwapapiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/swapapi.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/swapapi.service.ts ***!
  \*********************************************/
/*! exports provided: SwapapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapapiService", function() { return SwapapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);





// Set HTTP Headers
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SwapapiService = /** @class */ (function () {
    function SwapapiService(http) {
        this.http = http;
        // Base URL
        this.baseUrl = 'https://swapi.co/api/people/';
    }
    // Fetch a List of StarWar Characters
    SwapapiService.prototype.getStarWarCharacters = function () {
        return this.http.get(this.baseUrl)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // Fetch Starwar Characters Details
    SwapapiService.prototype.getStarWarCharactersDetails = function (id) {
        return this.http.get(this.baseUrl + id)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // Method to handle error
    SwapapiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    };
    SwapapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SwapapiService);
    return SwapapiService;
}());



/***/ }),

/***/ "./src/app/starwarcharacters/characterdetails/characterdetails.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/starwarcharacters/characterdetails/characterdetails.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  padding: 4px 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcndhcmNoYXJhY3RlcnMvY2hhcmFjdGVyZGV0YWlscy9jaGFyYWN0ZXJkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zdGFyd2FyY2hhcmFjdGVycy9jaGFyYWN0ZXJkZXRhaWxzL2NoYXJhY3RlcmRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICBwYWRkaW5nOiA0cHggNHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/starwarcharacters/characterdetails/characterdetails.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/starwarcharacters/characterdetails/characterdetails.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-spinner  style=\"margin:0 auto;\" *ngIf=\"!characterdetails\"></mat-spinner>\n\n  <mat-card *ngIf=\"characterdetails\">\n    <mat-selection-list #shoes>\n      <h1 *ngIf=\"characterdetails\" style=\"margin:0 auto;\"> {{characterdetails.name}} Details</h1>\n      <mat-list-option>\n       Name: {{characterdetails.name}}\n      </mat-list-option>\n      <mat-list-option>\n      Height: {{characterdetails.height}}\n      </mat-list-option>\n      <mat-list-option>\n      Mass: {{characterdetails.mass}}\n      </mat-list-option>\n      <mat-list-option>\n       Eye Color: {{characterdetails.eye_color}}\n      </mat-list-option>\n      <mat-list-option>\n        Skin Color: {{characterdetails.skin_color}}\n      </mat-list-option>\n      <mat-list-option>\n        Birth Year: {{characterdetails.birth_year}}\n      </mat-list-option>\n      <mat-list-option>\n        HomeWorld: {{characterdetails.homeworld}}\n      </mat-list-option>\n    </mat-selection-list>\n\n  </mat-card>\n\n\n\n"

/***/ }),

/***/ "./src/app/starwarcharacters/characterdetails/characterdetails.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/starwarcharacters/characterdetails/characterdetails.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CharacterdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterdetailsComponent", function() { return CharacterdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_swapapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/swapapi.service */ "./src/app/services/swapapi.service.ts");




var CharacterdetailsComponent = /** @class */ (function () {
    function CharacterdetailsComponent(route, swapapiservice) {
        this.route = route;
        this.swapapiservice = swapapiservice;
    }
    // Life Cycle Method Called when page is initialized
    CharacterdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Fetch Param passed via route
        this.id = this.route.snapshot.params.characterId;
        // Fetch Character Details
        this.swapapiservice.getStarWarCharactersDetails(this.id)
            .subscribe(function (starwarcharactersdetails) {
            _this.characterdetails = starwarcharactersdetails;
            console.log('The Swap API Details returned', starwarcharactersdetails);
        });
    };
    CharacterdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-characterdetails',
            template: __webpack_require__(/*! ./characterdetails.component.html */ "./src/app/starwarcharacters/characterdetails/characterdetails.component.html"),
            styles: [__webpack_require__(/*! ./characterdetails.component.css */ "./src/app/starwarcharacters/characterdetails/characterdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_swapapi_service__WEBPACK_IMPORTED_MODULE_3__["SwapapiService"]])
    ], CharacterdetailsComponent);
    return CharacterdetailsComponent;
}());



/***/ }),

/***/ "./src/app/starwarcharacters/starwarcharacters.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/starwarcharacters/starwarcharacters.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n\n.pointer {\n  cursor: pointer;\n}\n\n\n.material-icons.color_green { color: #00FF00; }\n\n\n.material-icons.color_white { color: #FFFFFF; }\n\n\n.mat-row:hover {\n  background-color: lightgrey;\n  -webkit-tap-highlight-color: transparent;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcndhcmNoYXJhY3RlcnMvc3RhcndhcmNoYXJhY3RlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOzs7QUFHQSw4QkFBOEIsY0FBYyxFQUFFOzs7QUFDOUMsOEJBQThCLGNBQWMsRUFBRTs7O0FBRTlDO0VBQ0UsMkJBQTJCO0VBQzNCLHdDQUF3Qzs7QUFFMUMiLCJmaWxlIjoic3JjL2FwcC9zdGFyd2FyY2hhcmFjdGVycy9zdGFyd2FyY2hhcmFjdGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4ubWF0ZXJpYWwtaWNvbnMuY29sb3JfZ3JlZW4geyBjb2xvcjogIzAwRkYwMDsgfVxuLm1hdGVyaWFsLWljb25zLmNvbG9yX3doaXRlIHsgY29sb3I6ICNGRkZGRkY7IH1cblxuLm1hdC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/starwarcharacters/starwarcharacters.component.html":
/*!********************************************************************!*\
  !*** ./src/app/starwarcharacters/starwarcharacters.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n\n  <mat-spinner  style=\"margin:0 auto;\" *ngIf=\"!starwar\"></mat-spinner>\n\n  <table mat-table [dataSource]=\"starwar\" *ngIf=\"starwar\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"height\">\n      <th mat-header-cell *matHeaderCellDef> Height </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.height}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"mass\">\n      <th mat-header-cell *matHeaderCellDef> Mass </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.mass}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"hair_color\">\n      <th mat-header-cell *matHeaderCellDef> Hair Color </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.hair_color}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"skin_color\">\n      <th mat-header-cell *matHeaderCellDef> Skin Color </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.skin_color}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"favourite\">\n      <th mat-header-cell *matHeaderCellDef> Favourite </th>\n      <td mat-cell *matCellDef=\"let element;index as i;\"> <mat-icon [ngStyle]=\"{'color':element.isFavorite  == true ? 'red' : 'grey'}\" (click)=\"toggleFavorite(i)\"><span class=\"pointer\">favorite</span></mat-icon> </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef> Action </th>\n      <td mat-cell *matCellDef=\"let element;index as i;\"> <span class=\"pointer\" (click)=\"viewDetails(i)\">View</span> </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/starwarcharacters/starwarcharacters.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/starwarcharacters/starwarcharacters.component.ts ***!
  \******************************************************************/
/*! exports provided: StarwarcharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarwarcharactersComponent", function() { return StarwarcharactersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_swapapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/swapapi.service */ "./src/app/services/swapapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var StarwarcharactersComponent = /** @class */ (function () {
    function StarwarcharactersComponent(route, swapapiservice, router, snackBar) {
        this.route = route;
        this.swapapiservice = swapapiservice;
        this.router = router;
        this.snackBar = snackBar;
        this.countnum = 0;
        this.displayedColumns = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'favourite', 'actions'];
    }
    // Life Cycle Method Called when page is initialized and contains function to fetch star war character details
    StarwarcharactersComponent.prototype.ngOnInit = function () {
        this.getStarWarCharacters();
    };
    // Function to fetch Star War Characters
    StarwarcharactersComponent.prototype.getStarWarCharacters = function () {
        var _this = this;
        this.swapapiservice.getStarWarCharacters()
            .subscribe(function (starwarcharacters) {
            _this.characters = starwarcharacters;
            _this.starwar = _this.characters.results;
            _this.starwarPayload = [];
            for (var i = 0; i < _this.starwar.length; i++) {
                _this.starwar[i].isFavorite = false;
            }
            localStorage.setItem('starwarcharacters', JSON.stringify(_this.starwar));
            var starter = 0;
            sessionStorage.setItem('count', starter.toString());
            return _this.starwar;
        });
    };
    // View Character Details in a new Page
    StarwarcharactersComponent.prototype.viewDetails = function (id) {
        this.router.navigate(['/characters/details/', id + 1]);
    };
    // Function to Mark List Item Favourite and Unfavourite
    StarwarcharactersComponent.prototype.toggleFavorite = function (item) {
        console.log('Item Clicked', item);
        this.starwar = JSON.parse(localStorage.getItem('starwarcharacters'));
        var contact = this.starwar[item];
        contact.isFavorite = !contact.isFavorite;
        localStorage.setItem('starwarcharacters', JSON.stringify(this.starwar));
        if (contact.isFavorite === true) {
            this.countnum = this.countnum + 1;
            if (this.countnum <= 5) {
            }
            else {
                this.openSnackBar('Maximum number of favorite characters has been reached!');
                contact.isFavorite = false;
                localStorage.setItem('starwarcharacters', JSON.stringify(this.starwar));
            }
        }
        else {
            this.countnum = this.countnum - 1;
        }
    };
    // Snack Bar for Notification
    StarwarcharactersComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, 'Undo', {
            duration: 2000,
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StarwarcharactersComponent.prototype, "paginator", void 0);
    StarwarcharactersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-starwarcharacters',
            template: __webpack_require__(/*! ./starwarcharacters.component.html */ "./src/app/starwarcharacters/starwarcharacters.component.html"),
            styles: [__webpack_require__(/*! ./starwarcharacters.component.css */ "./src/app/starwarcharacters/starwarcharacters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_swapapi_service__WEBPACK_IMPORTED_MODULE_3__["SwapapiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], StarwarcharactersComponent);
    return StarwarcharactersComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! /home/denis/Desktop/persapp/angularapps/icecubeapp _proto/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map