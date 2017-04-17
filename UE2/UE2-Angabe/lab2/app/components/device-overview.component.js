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
var device_service_1 = require('../services/device.service');
var core_1 = require('@angular/core');
var DeviceOverviewComponent = (function () {
    function DeviceOverviewComponent(deviceService) {
        this.deviceService = deviceService;
        this.title = "Ally's Angular App";
    }
    DeviceOverviewComponent.prototype.getDevices = function () {
        var _this = this;
        console.log('get devices called in app component');
        console.log('devices currently contains' + this.devices);
        this.deviceService.getDevices().then(function (devices) { return _this.devices = devices; });
        console.log('devices currently contains' + this.devices);
    };
    DeviceOverviewComponent.prototype.ngOnInit = function () {
        console.log('in function ngOnInit');
        this.getDevices();
        console.log('get devices called');
    };
    DeviceOverviewComponent.prototype.onSelect = function (device) {
        this.selectedDevice = device;
    };
    DeviceOverviewComponent = __decorate([
        core_1.Component({
            selector: 'my-devices',
            templateUrl: "../app/views/overview.component.html",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .devices {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .devices li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .devices li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .devices li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .devices .text {\n      position: relative;\n      top: -3px;\n    }\n    .devices .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
            providers: [device_service_1.DeviceService]
        }), 
        __metadata('design:paramtypes', [device_service_1.DeviceService])
    ], DeviceOverviewComponent);
    return DeviceOverviewComponent;
}());
exports.DeviceOverviewComponent = DeviceOverviewComponent;
//# sourceMappingURL=device-overview.component.js.map