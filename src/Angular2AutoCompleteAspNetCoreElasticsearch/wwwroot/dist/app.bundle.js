webpackJsonp([0],[
/* 0 */
/*!*****************************!*\
  !*** ./angular2App/boot.ts ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app/app.module */ 23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/*!***************************************!*\
  !*** ./angular2App/app/app.module.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var common_1 = __webpack_require__(/*! @angular/common */ 22);
	var forms_1 = __webpack_require__(/*! @angular/forms */ 24);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 21);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 28);
	var app_constants_1 = __webpack_require__(/*! ./app.constants */ 66);
	var app_routes_1 = __webpack_require__(/*! ./app.routes */ 67);
	var http_1 = __webpack_require__(/*! @angular/http */ 70);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 68);
	var ng2_completer_1 = __webpack_require__(/*! ng2-completer */ 74);
	var personCityAutocompleteSearch_component_1 = __webpack_require__(/*! ./autocomplete/personCityAutocompleteSearch.component */ 76);
	var search_component_1 = __webpack_require__(/*! ./searchcomponent/search.component */ 80);
	var searchDataService_1 = __webpack_require__(/*! ./services/searchDataService */ 69);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                common_1.CommonModule,
	                ng2_completer_1.Ng2CompleterModule,
	                forms_1.FormsModule,
	                app_routes_1.routing,
	                http_1.HttpModule,
	                http_1.JsonpModule
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	                home_component_1.HomeComponent,
	                personCityAutocompleteSearch_component_1.PersonCityAutocompleteSearchComponent,
	                search_component_1.SearchComponent
	            ],
	            providers: [
	                searchDataService_1.SearchDataService,
	                app_constants_1.Configuration
	            ],
	            bootstrap: [app_component_1.AppComponent],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/*!******************************************!*\
  !*** ./angular2App/app/app.component.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var router_1 = __webpack_require__(/*! @angular/router */ 29);
	var AppComponent = (function () {
	    function AppComponent(router) {
	        this.router = router;
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: __webpack_require__(/*! ./app.component.html */ 59),
	            styles: [String(__webpack_require__(/*! ./app.component.scss */ 60)), String(__webpack_require__(/*! ../style/app.scss */ 64))]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/*!********************************************!*\
  !*** ./angular2App/app/app.component.html ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container\" style=\"margin-top: 15px;\">\r\n\r\n    <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Angular2 Auto Complete, ASP.NET Core Elasticsearch</a>\r\n            </div>\r\n            <ul class=\"nav navbar-nav\">\r\n                <!--<li><a [routerLink]=\"['/home']\">Home</a></li>-->\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a href=\"https://twitter.com/damien_bod\"><img src=\"assets/damienbod.jpg\" height=\"40\" style=\"margin-top: -10px;\" /></a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n    <footer>\r\n        <p>\r\n            <a href=\"https://twitter.com/damien_bod\">DamienBod</a>&nbsp;Blog: <a href=\"https://damienbod.com/\">Software Engineering</a>\r\n            &copy; 2016\r\n        </p>\r\n    </footer>\r\n</div>"

/***/ },
/* 60 */
/*!********************************************!*\
  !*** ./angular2App/app/app.component.scss ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/sass-loader!./app.component.scss */ 61);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 63)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 61 */
/*!***************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./angular2App/app/app.component.scss ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 62)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  padding-top: 50px; }\n\n.starter-template {\n  padding: 40px 15px;\n  text-align: center; }\n\n.navigationLinkButton:hover {\n  cursor: pointer; }\n\na {\n  color: #03A9F4; }\n", ""]);
	
	// exports


/***/ },
/* 62 */,
/* 63 */,
/* 64 */
/*!************************************!*\
  !*** ./angular2App/style/app.scss ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/sass-loader!./app.scss */ 65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 63)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 65 */
/*!*******************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./angular2App/style/app.scss ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 62)();
	// imports
	
	
	// module
	exports.push([module.id, "a {\n  color: #03A9F4; }\n\n.completer-input {\n  width: 500px; }\n", ""]);
	
	// exports


/***/ },
/* 66 */
/*!******************************************!*\
  !*** ./angular2App/app/app.constants.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var Configuration = (function () {
	    function Configuration() {
	        this.Server = "http://localhost:5000/";
	    }
	    Configuration = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Configuration);
	    return Configuration;
	}());
	exports.Configuration = Configuration;


/***/ },
/* 67 */
/*!***************************************!*\
  !*** ./angular2App/app/app.routes.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(/*! @angular/router */ 29);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 68);
	var appRoutes = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: 'home', component: home_component_1.HomeComponent }
	];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },
/* 68 */
/*!************************************************!*\
  !*** ./angular2App/app/home/home.component.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var searchDataService_1 = __webpack_require__(/*! ../services/searchDataService */ 69);
	var personCity_1 = __webpack_require__(/*! ../autocomplete/personCity */ 72);
	var HomeComponent = (function () {
	    function HomeComponent(_dataService) {
	        this._dataService = _dataService;
	        this.IndexExists = false;
	        this.message = "Hello from HomeComponent constructor";
	        this.SelectedPersonCity = new personCity_1.PersonCity();
	    }
	    ;
	    HomeComponent.prototype.CreateTestData = function () {
	        this._dataService.CreateTestData().subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
	    };
	    HomeComponent.prototype.CreateIndex = function () {
	        if (!this.IndexExists) {
	            this._dataService.CreateIndex().subscribe(function (data) { return data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
	            this.IndexExists = true;
	        }
	    };
	    HomeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._dataService
	            .IndexExists()
	            .subscribe(function (data) { return _this.IndexExists = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'homecomponent',
	            template: __webpack_require__(/*! ./home.component.html */ 73),
	            providers: [searchDataService_1.SearchDataService]
	        }), 
	        __metadata('design:paramtypes', [searchDataService_1.SearchDataService])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },
/* 69 */
/*!*******************************************************!*\
  !*** ./angular2App/app/services/searchDataService.ts ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 70);
	__webpack_require__(/*! rxjs/add/operator/map */ 71);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 66);
	var SearchDataService = (function () {
	    function SearchDataService(_http, _configuration) {
	        var _this = this;
	        this._http = _http;
	        this._configuration = _configuration;
	        this.GetAll = function () {
	            return _this._http.get(_this.actionUrl).map(function (response) { return response.json(); });
	        };
	        this.CreateIndex = function () {
	            var url = _this.actionUrl + "createindex";
	            return _this._http.get(url).map(function (response) { return response.json(); });
	        };
	        this.IndexExists = function () {
	            var url = _this.actionUrl + "indexexists";
	            return _this._http.get(url).map(function (response) { return response.json(); });
	        };
	        this.CreateTestData = function () {
	            var url = _this.actionUrl + "createtestdata";
	            return _this._http.get(url).map(function (response) { return response.json(); });
	        };
	        this.actionUrl = _configuration.Server + 'api/personcity/';
	        this.headers = new http_1.Headers();
	        this.headers.append('Content-Type', 'application/json');
	        this.headers.append('Accept', 'application/json');
	    }
	    SearchDataService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
	    ], SearchDataService);
	    return SearchDataService;
	}());
	exports.SearchDataService = SearchDataService;


/***/ },
/* 70 */,
/* 71 */,
/* 72 */
/*!****************************************************!*\
  !*** ./angular2App/app/autocomplete/personCity.ts ***!
  \****************************************************/
/***/ function(module, exports) {

	"use strict";
	var PersonCity = (function () {
	    function PersonCity() {
	    }
	    return PersonCity;
	}());
	exports.PersonCity = PersonCity;


/***/ },
/* 73 */
/*!**************************************************!*\
  !*** ./angular2App/app/home/home.component.html ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\r\n\r\n    <p>Elasticsearch Index exists: {{IndexExists}}</p> \r\n    <button (click)=\"CreateIndex()\" *ngIf=\"!IndexExists\">Create Index</button>\r\n    <button (click)=\"CreateTestData()\" *ngIf=\"IndexExists\">Create TestData</button>\r\n    \r\n    <hr />\r\n    <br />\r\n\r\n    <autocompletesearch [(bindModelPersonCity)]=\"SelectedPersonCity\" [disableAutocomplete]=\"!IndexExists\" >\r\n    </autocompletesearch>\r\n\r\n    <hr />\r\n\r\n    SELECTED : <span>{{SelectedPersonCity.name}} {{SelectedPersonCity.familyName}} </span>\r\n    <br />\r\n    INFO     : <span>{{SelectedPersonCity.info}}</span>\r\n    <hr />\r\n\r\n    <search (bindModelPersonCities)=\"SelectedPersonCity\" [disableAutocomplete]=\"!IndexExists\">\r\n    </search>\r\n    \r\n</div>"

/***/ },
/* 74 */,
/* 75 */,
/* 76 */
/*!********************************************************************************!*\
  !*** ./angular2App/app/autocomplete/personCityAutocompleteSearch.component.ts ***!
  \********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 70);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 66);
	var personCityDataService_1 = __webpack_require__(/*! ./personCityDataService */ 77);
	var personCity_1 = __webpack_require__(/*! ./personCity */ 72);
	var ng2_completer_1 = __webpack_require__(/*! ng2-completer */ 74);
	var PersonCityAutocompleteSearchComponent = (function () {
	    function PersonCityAutocompleteSearchComponent(completerService, http, _configuration) {
	        this.completerService = completerService;
	        this.http = http;
	        this._configuration = _configuration;
	        this.bindModelPersonCityChange = new core_1.EventEmitter();
	        this.disableAutocomplete = false;
	        var actionUrl = _configuration.Server + 'api/personcity/search/';
	        this.dataService = new personCityDataService_1.PersonCityDataService(http, _configuration);
	    }
	    PersonCityAutocompleteSearchComponent.prototype.ngOnInit = function () {
	        console.log("ngOnInit AutocompleteSearch");
	    };
	    PersonCityAutocompleteSearchComponent.prototype.onPersonCitySelected = function (selected) {
	        console.log(selected);
	        this.bindModelPersonCityChange.emit(selected.originalObject);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], PersonCityAutocompleteSearchComponent.prototype, "bindModelPersonCityChange", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', personCity_1.PersonCity)
	    ], PersonCityAutocompleteSearchComponent.prototype, "bindModelPersonCity", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PersonCityAutocompleteSearchComponent.prototype, "disableAutocomplete", void 0);
	    PersonCityAutocompleteSearchComponent = __decorate([
	        core_1.Component({
	            selector: 'autocompletesearch',
	            template: "\n<ng2-completer [dataService]=\"dataService\" (selected)=\"onPersonCitySelected($event)\" [minSearchLength]=\"0\" [disableInput]=\"disableAutocomplete\"></ng2-completer>\n\n",
	            styles: [String(__webpack_require__(/*! ./personCityAutocompleteSearch.component.scss */ 78))]
	        }), 
	        __metadata('design:paramtypes', [ng2_completer_1.CompleterService, http_1.Http, app_constants_1.Configuration])
	    ], PersonCityAutocompleteSearchComponent);
	    return PersonCityAutocompleteSearchComponent;
	}());
	exports.PersonCityAutocompleteSearchComponent = PersonCityAutocompleteSearchComponent;


/***/ },
/* 77 */
/*!***************************************************************!*\
  !*** ./angular2App/app/autocomplete/personCityDataService.ts ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(/*! rxjs/Subject */ 4);
	var PersonCityDataService = (function (_super) {
	    __extends(PersonCityDataService, _super);
	    function PersonCityDataService(http, _configuration) {
	        _super.call(this);
	        this.http = http;
	        this._configuration = _configuration;
	        this.actionUrl = _configuration.Server + 'api/personcity/search/';
	    }
	    PersonCityDataService.prototype.search = function (term) {
	        var _this = this;
	        this.http.get(this.actionUrl + term)
	            .map(function (res) {
	            var data = res.json();
	            var matches = data.map(function (personcity) {
	                return {
	                    title: personcity.name,
	                    description: personcity.familyName + ", " + personcity.info,
	                    originalObject: personcity
	                };
	            });
	            _this.next(matches);
	        })
	            .subscribe();
	    };
	    PersonCityDataService.prototype.cancel = function () {
	    };
	    return PersonCityDataService;
	}(Subject_1.Subject));
	exports.PersonCityDataService = PersonCityDataService;


/***/ },
/* 78 */
/*!**********************************************************************************!*\
  !*** ./angular2App/app/autocomplete/personCityAutocompleteSearch.component.scss ***!
  \**********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader!./personCityAutocompleteSearch.component.scss */ 79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 63)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./personCityAutocompleteSearch.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./personCityAutocompleteSearch.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 79 */
/*!*****************************************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./angular2App/app/autocomplete/personCityAutocompleteSearch.component.scss ***!
  \*****************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 62)();
	// imports
	
	
	// module
	exports.push([module.id, ".completer-input {\n  width: 500px;\n  display: block;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n\n.completer-dropdown {\n  width: 480px !important; }\n", ""]);
	
	// exports


/***/ },
/* 80 */
/*!*************************************************************!*\
  !*** ./angular2App/app/searchcomponent/search.component.ts ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 70);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 66);
	var searchComponentDataService_1 = __webpack_require__(/*! ./searchComponentDataService */ 81);
	var ng2_completer_1 = __webpack_require__(/*! ng2-completer */ 74);
	var SearchComponent = (function () {
	    function SearchComponent(completerService, http, _configuration) {
	        this.completerService = completerService;
	        this.http = http;
	        this._configuration = _configuration;
	        this.bindModelPersonCitiesChange = new core_1.EventEmitter();
	        this.disableAutocomplete = false;
	        this.dataService = new searchComponentDataService_1.SearchDataService(http, _configuration);
	    }
	    SearchComponent.prototype.ngOnInit = function () {
	        console.log("ngOnInit SearchComponent");
	    };
	    SearchComponent.prototype.onPersonCitySelected = function (selected) {
	        var _this = this;
	        console.log(selected);
	        this.dataService
	            .FindAllForTerm(selected.title)
	            .subscribe(function (data) { return _this.bindModelPersonCitiesChange.emit(data); }, function (error) { return console.log(error); }, function () { return console.log('onPersonCitySelected complete'); });
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], SearchComponent.prototype, "bindModelPersonCitiesChange", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], SearchComponent.prototype, "disableAutocomplete", void 0);
	    SearchComponent = __decorate([
	        core_1.Component({
	            selector: 'search',
	            template: "\n<ng2-completer [dataService]=\"dataService\" (selected)=\"onPersonCitySelected($event)\" [minSearchLength]=\"0\" [disableInput]=\"disableAutocomplete\"></ng2-completer>\n\n",
	            styles: [String(__webpack_require__(/*! ./search.component.scss */ 82))]
	        }), 
	        __metadata('design:paramtypes', [ng2_completer_1.CompleterService, http_1.Http, app_constants_1.Configuration])
	    ], SearchComponent);
	    return SearchComponent;
	}());
	exports.SearchComponent = SearchComponent;


/***/ },
/* 81 */
/*!***********************************************************************!*\
  !*** ./angular2App/app/searchcomponent/searchComponentDataService.ts ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(/*! rxjs/Subject */ 4);
	var SearchDataService = (function (_super) {
	    __extends(SearchDataService, _super);
	    function SearchDataService(http, _configuration) {
	        var _this = this;
	        _super.call(this);
	        this.http = http;
	        this._configuration = _configuration;
	        this.FindAllForTerm = function (term) {
	            return _this.http.get(_this.actionUrl + term).map(function (response) { return response.json(); });
	        };
	        this.actionUrl = _configuration.Server + 'api/personcity/autocomplete/';
	    }
	    SearchDataService.prototype.search = function (term) {
	        var _this = this;
	        this.http.get(this.actionUrl + term)
	            .map(function (res) {
	            var data = res.json();
	            var matches = data.map(function (autocomplete) {
	                return {
	                    title: autocomplete,
	                    originalObject: autocomplete
	                };
	            });
	            _this.next(matches);
	        })
	            .subscribe();
	    };
	    SearchDataService.prototype.cancel = function () {
	    };
	    return SearchDataService;
	}(Subject_1.Subject));
	exports.SearchDataService = SearchDataService;


/***/ },
/* 82 */
/*!***************************************************************!*\
  !*** ./angular2App/app/searchcomponent/search.component.scss ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader!./search.component.scss */ 83);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 63)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./search.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./search.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 83 */
/*!**********************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./angular2App/app/searchcomponent/search.component.scss ***!
  \**********************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 62)();
	// imports
	
	
	// module
	exports.push([module.id, ".completer-input {\n  width: 500px;\n  display: block;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n\n.completer-dropdown {\n  width: 480px !important; }\n", ""]);
	
	// exports


/***/ }
]);
//# sourceMappingURL=app.bundle.js.map