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
exports.__esModule = true;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.resetPomodoro();
        setInterval(function () { return _this.tick(); }, 1000);
    }
    AppComponent.prototype.resetPomodoro = function () {
        this.isPaused = true;
        this.minutes = 24;
        this.seconds = 9;
        this.buttonLabel = 'Start';
    };
    AppComponent.prototype.tick = function () {
        if (!this.isPaused) {
            this.buttonLabel = 'Pause';
            if (--this.seconds < 0) {
                this.seconds = 59;
                if (--this.minutes < 0) {
                    this.resetPomodoro();
                }
            }
        }
    };
    AppComponent.prototype.togglePause = function () {
        this.isPaused = !this.isPaused;
        if (this.minutes < 24 || this.seconds < 59) {
            this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            template: "\n  \t\t\t\t<div class=\"text-center\">\n  \t\t\t\t\t<img src=\"./assets/img/pomodoro.jpg\" alt=\"Pomodoro\">\n\t\t\t\t\t<h1> {{ minutes }}:{{ seconds | number: '2.0' }} </h1>  \n\t\t\t\t\t<p>\n\t\t\t\t\t\t<button (click)=\"togglePause()\" class=\"btn btn-danger\">\n\t\t\t\t\t\t\t{{ buttonLabel }}\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n  \t\t\t"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
