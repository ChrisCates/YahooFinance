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
exports.GetAnalysis = void 0;
var Request_lib_1 = require("./Request.lib");
function GetAnalysis(symbol) {
    return __awaiter(this, void 0, void 0, function () {
        var Analysis, $, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Analysis = {
                        earningsEstimate: [],
                        revenueEstimate: [],
                        earningsHistory: [],
                        epsTrend: [],
                        epsRevisions: [],
                        growthEstimates: [],
                    };
                    return [4 /*yield*/, Request_lib_1.Request("https://finance.yahoo.com/quote/" + symbol + "/analysis")];
                case 1:
                    $ = _a.sent();
                    _loop_1 = function (i) {
                        $('section[data-test="qsp-analyst"] table').each(function (ii, e) {
                            switch (ii) {
                                case 0:
                                    var EarningsEstimate_1 = {
                                        date: '',
                                        analystsAmt: '',
                                        avgEstimate: '',
                                        lowEstimate: '',
                                        highEstimate: '',
                                        yearAgoEPS: '',
                                    };
                                    EarningsEstimate_1.date = $(e).find("thead tr th:nth-child(" + (2 + i) + ")").text();
                                    $(e).find('tbody tr').each(function (iii, ee) {
                                        var text = $(ee).find("td:nth-child(" + (2 + i) + ")").text();
                                        switch (iii) {
                                            case 0:
                                                EarningsEstimate_1.analystsAmt = text;
                                            case 1:
                                                EarningsEstimate_1.avgEstimate = text;
                                            case 2:
                                                EarningsEstimate_1.lowEstimate = text;
                                            case 3:
                                                EarningsEstimate_1.highEstimate = text;
                                            case 4:
                                                EarningsEstimate_1.yearAgoEPS = text;
                                        }
                                    });
                                    Analysis.earningsEstimate.push(EarningsEstimate_1);
                                case 1:
                                    var RevenueEstimate_1 = {
                                        date: '',
                                        analystsAmt: '',
                                        avgEstimate: '',
                                        lowEstimate: '',
                                        highEstimate: '',
                                        yearAgoSales: '',
                                        salesGrowth: '',
                                    };
                                    RevenueEstimate_1.date = $(e).find("thead tr th:nth-child(" + (2 + i) + ")").text();
                                    $(e).find('tbody tr').each(function (iii, ee) {
                                        var text = $(ee).find("td:nth-child(" + (2 + i) + ")").text();
                                        switch (iii) {
                                            case 0:
                                                RevenueEstimate_1.analystsAmt = text;
                                            case 1:
                                                RevenueEstimate_1.avgEstimate = text;
                                            case 2:
                                                RevenueEstimate_1.lowEstimate = text;
                                            case 3:
                                                RevenueEstimate_1.highEstimate = text;
                                            case 4:
                                                RevenueEstimate_1.yearAgoSales = text;
                                            case 5:
                                                RevenueEstimate_1.salesGrowth = text;
                                        }
                                    });
                                    Analysis.revenueEstimate.push(RevenueEstimate_1);
                                case 2:
                                    var EarningsHistory_1 = {
                                        date: '',
                                        epsEstimate: '',
                                        epsActual: '',
                                        difference: '',
                                        surprise: '',
                                    };
                                    EarningsHistory_1.date = $(e).find("thead tr th:nth-child(" + (2 + i) + ")").text();
                                    $(e).find('tbody tr').each(function (iii, ee) {
                                        var text = $(ee).find("td:nth-child(" + (2 + i) + ")").text();
                                        switch (iii) {
                                            case 0:
                                                EarningsHistory_1.epsEstimate = text;
                                            case 1:
                                                EarningsHistory_1.epsActual = text;
                                            case 2:
                                                EarningsHistory_1.difference = text;
                                            case 3:
                                                EarningsHistory_1.surprise = text;
                                        }
                                    });
                                    Analysis.earningsHistory.push(EarningsHistory_1);
                                case 3:
                                    var EPSTrend_1 = {
                                        date: '',
                                        currentEstimate: '',
                                        daysAgo7: '',
                                        daysAgo30: '',
                                        daysAgo60: '',
                                        daysAgo90: '',
                                    };
                                    EPSTrend_1.date = $(e).find("thead tr th:nth-child(" + (2 + i) + ")").text();
                                    $(e).find('tbody tr').each(function (iii, ee) {
                                        var text = $(ee).find("td:nth-child(" + (2 + i) + ")").text();
                                        switch (iii) {
                                            case 0:
                                                EPSTrend_1.currentEstimate = text;
                                            case 1:
                                                EPSTrend_1.daysAgo7 = text;
                                            case 2:
                                                EPSTrend_1.daysAgo30 = text;
                                            case 3:
                                                EPSTrend_1.daysAgo60 = text;
                                            case 4:
                                                EPSTrend_1.daysAgo90 = text;
                                        }
                                    });
                                    Analysis.epsTrend.push(EPSTrend_1);
                                case 4:
                                    var EPSRevisions_1 = {
                                        date: '',
                                        upLast7Days: '',
                                        upLast30Days: '',
                                        downLast7Days: '',
                                        downLast30Days: '',
                                    };
                                    EPSRevisions_1.date = $(e).find("thead tr th:nth-child(" + (2 + i) + ")").text();
                                    $(e).find('tbody tr').each(function (iii, ee) {
                                        var text = $(ee).find("td:nth-child(" + (2 + i) + ")").text();
                                        switch (iii) {
                                            case 0:
                                                EPSRevisions_1.upLast7Days = text;
                                            case 1:
                                                EPSRevisions_1.upLast30Days = text;
                                            case 2:
                                                EPSRevisions_1.downLast7Days = text;
                                            case 3:
                                                EPSRevisions_1.downLast30Days = text;
                                        }
                                    });
                                    Analysis.epsRevisions.push(EPSRevisions_1);
                                case 5:
                                    var GrowthEstimates_1 = {
                                        date: '',
                                        currentQuarter: '',
                                        nextQuarter: '',
                                        currentYear: '',
                                        nextYear: '',
                                        next5Years: '',
                                        past5Years: '',
                                    };
                                    GrowthEstimates_1.date = $(e).find("thead tr th:nth-child(" + (2 + i) + ")").text();
                                    $(e).find('tbody tr').each(function (iii, ee) {
                                        var text = $(ee).find("td:nth-child(" + (2 + i) + ")").text();
                                        switch (iii) {
                                            case 0:
                                                GrowthEstimates_1.currentQuarter = text;
                                            case 1:
                                                GrowthEstimates_1.nextQuarter = text;
                                            case 2:
                                                GrowthEstimates_1.currentYear = text;
                                            case 3:
                                                GrowthEstimates_1.nextYear = text;
                                            case 4:
                                                GrowthEstimates_1.next5Years = text;
                                            case 5:
                                                GrowthEstimates_1.past5Years = text;
                                        }
                                    });
                                    Analysis.growthEstimates.push(GrowthEstimates_1);
                            }
                        });
                    };
                    for (i = 0; i < 4; i++) {
                        _loop_1(i);
                    }
                    return [2 /*return*/, Analysis];
            }
        });
    });
}
exports.GetAnalysis = GetAnalysis;
//# sourceMappingURL=Analysis.lib.js.map