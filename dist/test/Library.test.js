"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var Summary_lib_1 = require("../src/library/Summary.lib");
var Stats_lib_1 = require("../src/library/Stats.lib");
var Profile_lib_1 = require("../src/library/Profile.lib");
var Income_lib_1 = require("../src/library/Income.lib");
var Balance_lib_1 = require("../src/library/Balance.lib");
var Cash_lib_1 = require("../src/library/Cash.lib");
var Analysis_lib_1 = require("../src/library/Analysis.lib");
var Holders_lib_1 = require("../src/library/Holders.lib");
var Insiders_lib_1 = require("../src/library/Insiders.lib");
var InsiderTransactions_lib_1 = require("../src/library/InsiderTransactions.lib");
describe('Library Testing Suite', function () {
    it('Should get the summary for MSFT', function () { return __awaiter(void 0, void 0, void 0, function () {
        var Summary;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Summary_lib_1.GetSummary('MSFT')];
                case 1:
                    Summary = _a.sent();
                    assert_1.deepStrictEqual(Summary !== null, true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should get the stats for MSFT', function () { return __awaiter(void 0, void 0, void 0, function () {
        var Stats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Stats_lib_1.GetStats('MSFT')];
                case 1:
                    Stats = _a.sent();
                    assert_1.deepStrictEqual(Stats !== null, true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should get the profile for MSFT', function () { return __awaiter(void 0, void 0, void 0, function () {
        var Profile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Profile_lib_1.GetProfile('MSFT')];
                case 1:
                    Profile = _a.sent();
                    assert_1.deepStrictEqual(Profile !== null, true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should get the income statements for MSFT', function () { return __awaiter(void 0, void 0, void 0, function () {
        var Incomes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Income_lib_1.GetIncome('MSFT')];
                case 1:
                    Incomes = _a.sent();
                    assert_1.deepStrictEqual(Incomes !== null, true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should get the balance sheets for MSFT', function () { return __awaiter(void 0, void 0, void 0, function () {
        var Balances;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Balance_lib_1.GetBalance('MSFT')];
                case 1:
                    Balances = _a.sent();
                    assert_1.deepStrictEqual(Balances !== null, true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should get the cash flows for MSFT', function () { return __awaiter(void 0, void 0, void 0, function () {
        var CashFlows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Cash_lib_1.GetCash('MSFT')];
                case 1:
                    CashFlows = _a.sent();
                    assert_1.deepStrictEqual(CashFlows !== null, true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should get the analysis for MSFT', function () { return __awaiter(void 0, void 0, void 0, function () {
        var Analysis;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Analysis_lib_1.GetAnalysis('MSFT')];
                case 1:
                    Analysis = _a.sent();
                    assert_1.deepStrictEqual(Analysis !== null, true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should get the holders for MSFT', function () { return __awaiter(void 0, void 0, void 0, function () {
        var Holders;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Holders_lib_1.GetHolders('MSFT')];
                case 1:
                    Holders = _a.sent();
                    assert_1.deepStrictEqual(Holders !== null, true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should get the insiders for MSFT', function () { return __awaiter(void 0, void 0, void 0, function () {
        var Insiders;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Insiders_lib_1.GetInsiders('MSFT')];
                case 1:
                    Insiders = _a.sent();
                    assert_1.deepStrictEqual(Insiders !== null, true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should get the holders for MSFT', function () { return __awaiter(void 0, void 0, void 0, function () {
        var InsiderTransactions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, InsiderTransactions_lib_1.GetInsiderTransactions('MSFT')];
                case 1:
                    InsiderTransactions = _a.sent();
                    assert_1.deepStrictEqual(InsiderTransactions !== null, true);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=Library.test.js.map