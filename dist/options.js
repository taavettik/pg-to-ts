"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var DEFAULT_OPTIONS = {
    writeHeader: true,
    camelCase: false,
    datesAsStrings: false,
    prefixWithSchemaNames: false,
    enums: 'literal',
};
var Options = /** @class */ (function () {
    function Options(options) {
        if (options === void 0) { options = {}; }
        this.options = __assign(__assign({}, DEFAULT_OPTIONS), options);
    }
    Options.prototype.transformTypeName = function (typename) {
        var _a;
        var name = this.options.camelCase
            ? (0, lodash_1.upperFirst)((0, lodash_1.camelCase)(typename))
            : typename;
        return "".concat((_a = this.options.enumPrefix) !== null && _a !== void 0 ? _a : '').concat(name);
    };
    Options.prototype.transformColumnName = function (columnName) {
        return this.options.camelCase ? (0, lodash_1.camelCase)(columnName) : columnName;
    };
    return Options;
}());
exports.default = Options;
//# sourceMappingURL=options.js.map