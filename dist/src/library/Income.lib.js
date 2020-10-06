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
exports.GetIncome = void 0;
var Request_lib_1 = require("./Request.lib");
;
function GetIncome(symbol) {
    return __awaiter(this, void 0, void 0, function () {
        var IncomeStatements, $, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    IncomeStatements = [];
                    return [4 /*yield*/, Request_lib_1.Request("https://finance.yahoo.com/quote/" + symbol + "/financials")];
                case 1:
                    $ = _a.sent();
                    _loop_1 = function (i) {
                        var IncomeStatement = {
                            date: '',
                            totalRevenue: '',
                            costOfRevenue: '',
                            grossProfit: '',
                            operatingExpense: '',
                            operatingIncome: '',
                            netNonOperatingInterestIncome: '',
                            otherIncomeExpense: '',
                            pretaxIncome: '',
                            taxProvision: '',
                            netIncomeCommonStockholders: '',
                            dilutedNIAvailable: '',
                            basicEPS: '',
                            dilutedEPS: '',
                            basicAverageShares: '',
                            dilutedAverageShares: '',
                            totalOperatingIncome: '',
                            totalExpenses: '',
                            netIncomeFromContinuingOperations: '',
                            normalizedIncome: '',
                            interestIncome: '',
                            interestExpense: '',
                            netInterestIncome: '',
                            EBIT: '',
                            EBITDA: '',
                            reconciledCostOfRevenue: '',
                            reconciledDepreciation: '',
                            netIncomeFromContinuingOperationsMinority: '',
                            totalUnusualItemsExcludingGoodwill: '',
                            totalUnusualItems: '',
                            normalizedEBITDA: '',
                            taxRate: '',
                            taxEffectOfUnusualItems: '',
                        };
                        $('div[class="Pos(r)"] div[class="D(tbhg)"], div[class="Pos(r)"] div[class="D(tbr) fi-row Bgc($hoverBgColor):h"]').each(function (ii, e) {
                            var text = $(e).find("div:nth-child(" + (2 + i) + ")").text();
                            switch (ii) {
                                case 0:
                                    IncomeStatement.date = text;
                                case 1:
                                    IncomeStatement.totalRevenue = text;
                                case 2:
                                    IncomeStatement.costOfRevenue = text;
                                case 3:
                                    IncomeStatement.grossProfit = text;
                                case 4:
                                    IncomeStatement.operatingExpense = text;
                                case 5:
                                    IncomeStatement.operatingIncome = text;
                                case 6:
                                    IncomeStatement.netNonOperatingInterestIncome = text;
                                case 7:
                                    IncomeStatement.otherIncomeExpense = text;
                                case 8:
                                    IncomeStatement.pretaxIncome = text;
                                case 9:
                                    IncomeStatement.taxProvision = text;
                                case 10:
                                    IncomeStatement.netIncomeCommonStockholders = text;
                                case 11:
                                    IncomeStatement.dilutedNIAvailable = text;
                                case 12:
                                    IncomeStatement.basicEPS = text;
                                case 13:
                                    IncomeStatement.dilutedEPS = text;
                                case 14:
                                    IncomeStatement.basicAverageShares = text;
                                case 15:
                                    IncomeStatement.dilutedAverageShares = text;
                                case 16:
                                    IncomeStatement.totalOperatingIncome = text;
                                case 17:
                                    IncomeStatement.totalExpenses = text;
                                case 18:
                                    IncomeStatement.netIncomeFromContinuingOperations = text;
                                case 19:
                                    IncomeStatement.normalizedIncome = text;
                                case 20:
                                    IncomeStatement.interestIncome = text;
                                case 21:
                                    IncomeStatement.interestExpense = text;
                                case 22:
                                    IncomeStatement.netInterestIncome = text;
                                case 23:
                                    IncomeStatement.EBIT = text;
                                case 24:
                                    IncomeStatement.EBITDA = text;
                                case 25:
                                    IncomeStatement.reconciledCostOfRevenue = text;
                                case 26:
                                    IncomeStatement.reconciledDepreciation = text;
                                case 27:
                                    IncomeStatement.netIncomeFromContinuingOperationsMinority = text;
                                case 28:
                                    IncomeStatement.totalUnusualItemsExcludingGoodwill = text;
                                case 29:
                                    IncomeStatement.totalUnusualItems = text;
                                case 30:
                                    IncomeStatement.normalizedEBITDA = text;
                                case 31:
                                    IncomeStatement.taxRate = text;
                                case 32:
                                    IncomeStatement.taxEffectOfUnusualItems = text;
                            }
                        });
                        IncomeStatements.push(IncomeStatement);
                    };
                    for (i = 0; i < 5; i++) {
                        _loop_1(i);
                    }
                    return [2 /*return*/, IncomeStatements];
            }
        });
    });
}
exports.GetIncome = GetIncome;
//# sourceMappingURL=Income.lib.js.map