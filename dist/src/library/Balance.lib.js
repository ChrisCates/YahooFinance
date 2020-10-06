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
exports.GetBalance = void 0;
var Request_lib_1 = require("./Request.lib");
function GetBalance(symbol) {
    return __awaiter(this, void 0, void 0, function () {
        var BalanceSheets, $, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    BalanceSheets = [];
                    return [4 /*yield*/, Request_lib_1.Request("https://finance.yahoo.com/quote/" + symbol + "/balance-sheet")];
                case 1:
                    $ = _a.sent();
                    _loop_1 = function (i) {
                        var BalanceSheet = {
                            date: '',
                            totalAssets: '',
                            totalLiabilitiesNetMinorityInterest: '',
                            totalEquityGrossMinorityInterest: '',
                            totalCapitalization: '',
                            commonStockEquity: '',
                            capitalLeaseObligations: '',
                            netTangibleAssets: '',
                            workingCapital: '',
                            investedCapital: '',
                            tangibleBookValue: '',
                            totalDebt: '',
                            netDebt: '',
                            sharesIssued: '',
                            ordinarySharesNumber: '',
                        };
                        $('div[class="Pos(r)"] div[class="D(tbhg)"], div[class="Pos(r)"] div[class="D(tbr) fi-row Bgc($hoverBgColor):h"]').each(function (ii, e) {
                            var text = $(e).find("div:nth-child(" + (2 + i) + ")").text();
                            switch (ii) {
                                case 0:
                                    BalanceSheet.date = text;
                                case 1:
                                    BalanceSheet.totalAssets = text;
                                case 2:
                                    BalanceSheet.totalLiabilitiesNetMinorityInterest = text;
                                case 3:
                                    BalanceSheet.totalEquityGrossMinorityInterest = text;
                                case 4:
                                    BalanceSheet.totalCapitalization = text;
                                case 5:
                                    BalanceSheet.commonStockEquity = text;
                                case 6:
                                    BalanceSheet.capitalLeaseObligations = text;
                                case 7:
                                    BalanceSheet.netTangibleAssets = text;
                                case 8:
                                    BalanceSheet.workingCapital = text;
                                case 9:
                                    BalanceSheet.investedCapital = text;
                                case 10:
                                    BalanceSheet.tangibleBookValue = text;
                                case 11:
                                    BalanceSheet.totalDebt = text;
                                case 12:
                                    BalanceSheet.netDebt = text;
                                case 13:
                                    BalanceSheet.sharesIssued = text;
                                case 14:
                                    BalanceSheet.ordinarySharesNumber = text;
                            }
                        });
                        BalanceSheets.push(BalanceSheet);
                    };
                    for (i = 0; i < 4; i++) {
                        _loop_1(i);
                    }
                    return [2 /*return*/, BalanceSheets];
            }
        });
    });
}
exports.GetBalance = GetBalance;
//# sourceMappingURL=Balance.lib.js.map