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
var core_1 = require('@angular/core');
var VesselTripApp = (function () {
    function VesselTripApp() {
        this.title = 'Tour of Heroes';
        this.ship = {
            id: 1,
            name: 'Tolkien',
            length: '200m'
        };
    }
    VesselTripApp = __decorate([
        core_1.Component({
            selector: 'vesseltripapp',
            template: "\n    <h1>{{title}}</h1>\n    <h2>{{ship.name}} details!</h2>\n    <div><label>id: </label>{{ship.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"ship.name\" placeholder=\"name\">\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], VesselTripApp);
    return VesselTripApp;
}());
exports.VesselTripApp = VesselTripApp;
var Ship = (function () {
    function Ship() {
    }
    return Ship;
}());
exports.Ship = Ship;
//# sourceMappingURL=vesseltrip.js.map