"use strict";
exports.__esModule = true;
var throw_1 = require("rxjs/observable/throw");
var OAuthResourceServerErrorHandler = (function () {
    function OAuthResourceServerErrorHandler() {
    }
    return OAuthResourceServerErrorHandler;
}());
exports.OAuthResourceServerErrorHandler = OAuthResourceServerErrorHandler;
var OAuthNoopResourceServerErrorHandler = (function () {
    function OAuthNoopResourceServerErrorHandler() {
    }
    OAuthNoopResourceServerErrorHandler.prototype.handleError = function (err) {
        return throw_1._throw(err);
    };
    return OAuthNoopResourceServerErrorHandler;
}());
exports.OAuthNoopResourceServerErrorHandler = OAuthNoopResourceServerErrorHandler;
