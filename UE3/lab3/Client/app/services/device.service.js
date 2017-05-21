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
var http_1 = require('@angular/http');
var mock_device_1 = require('../resources/mock-device');
var device_parser_service_1 = require('./device-parser.service');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var DeviceService = (function () {
    function DeviceService(parserService, http) {
        this.parserService = parserService;
        this.http = http;
    }
    //TODO Sie können dieses Service benutzen, um alle REST-Funktionen für die Smart-Devices zu implementieren
    DeviceService.prototype.getDevices = function () {
        var _this = this;
        //TODO Lesen Sie die Geräte über die REST-Schnittstelle aus
        /*
         * Verwenden Sie das DeviceParserService um die via REST ausgelesenen Geräte umzuwandeln.
         * Das Service ist dabei bereits vollständig implementiert und kann wie unten demonstriert eingesetzt werden.
         */
        return Promise.resolve(mock_device_1.DEVICES).then(function (devices) {
            for (var i = 0; i < devices.length; i++) {
                devices[i] = _this.parserService.parseDevice(devices[i]);
            }
            return devices;
        });
    };
    DeviceService.prototype.getDevice = function (id) {
        return this.getDevices()
            .then(function (devices) { return devices.find(function (device) { return device.id === id; }); });
    };
    DeviceService.prototype.removeDevice = function (id) {
        console.log("in device service removing device");
        console.log('called delete on id>' + id);
        return this.http.delete('http://localhost:8081/device/delete/a79acab4-e88b-11e6-bf01-fe55135034f3').map(function (res) { return res.toString(); });
    };
    DeviceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [device_parser_service_1.DeviceParserService, http_1.Http])
    ], DeviceService);
    return DeviceService;
}());
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map