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
exports.GetStats = void 0;
var Request_lib_1 = require("./Request.lib");
function GetStats(symbol) {
    return __awaiter(this, void 0, void 0, function () {
        var Stats, $, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Stats = {
                        valuations: [],
                        highlights: {
                            fiscalYearEnd: '',
                            mostRecentQuarter: '',
                            profitMargin: '',
                            operatingMargin: '',
                            returnOnAssets: '',
                            returnOnEquity: '',
                            revenue: '',
                            revenuePerShare: '',
                            quarterlyRevenueGrowth: '',
                            grossProfit: '',
                            EBITDA: '',
                            netIncomeToCommon: '',
                            dilutedEPS: '',
                            quarterlyEarningsGrowth: '',
                            totalCash: '',
                            totalCashPerShare: '',
                            totalDebt: '',
                            totalDebtEquity: '',
                            currentRatio: '',
                            bookValuePerShare: '',
                            operatingCashFlow: '',
                            leveredFreeCashFlow: '',
                        },
                        tradingInfo: {
                            beta5Y: '',
                            yearChange: '',
                            spxYearChange: '',
                            yearHigh: '',
                            yearLow: '',
                            ma50: '',
                            ma200: '',
                            avgVol3m: '',
                            avgVol10d: '',
                            sharesOutstanding: '',
                            float: '',
                            insiderPct: '',
                            institutionPct: '',
                            sharesShort: '',
                            shortRatio: '',
                            shortPctFloat: '',
                            shortPctShares: '',
                            sharesShortPrior: '',
                            forwardDividendRate: '',
                            forwardDividendYield: '',
                            trailingDividendRate: '',
                            trailingDividendYield: '',
                            averageDividendYield: '',
                            payoutRatio: '',
                            dividendDate: '',
                            exDividendDate: '',
                            lastSplitFactor: '',
                            lastSplitDate: '',
                        },
                    };
                    return [4 /*yield*/, Request_lib_1.Request("https://finance.yahoo.com/quote/" + symbol + "/key-statistics")];
                case 1:
                    $ = _a.sent();
                    _loop_1 = function (i) {
                        var valuation = {
                            date: '',
                            marketCap: '',
                            enterpriseValue: '',
                            trailingPE: '',
                            forwardPE: '',
                            PEGRatio: '',
                            priceSale: '',
                            priceBook: '',
                            enterpriseValueRevenue: '',
                            enterpriseValueEBITDA: '',
                        };
                        $("table.BdEnd thead th:nth-child(" + (2 + i) + ")").each(function (ii, e) {
                            var text = $(e).text();
                            valuation.date = text;
                        });
                        $('table.BdEnd tbody tr').each(function (ii, e) {
                            var text = $(e).find("td:nth-child(" + (2 + i) + ")").text();
                            switch (ii) {
                                case 0:
                                    valuation.marketCap = text;
                                case 1:
                                    valuation.enterpriseValue = text;
                                case 2:
                                    valuation.trailingPE = text;
                                case 3:
                                    valuation.forwardPE = text;
                                case 4:
                                    valuation.PEGRatio = text;
                                case 5:
                                    valuation.priceSale = text;
                                case 6:
                                    valuation.priceBook = text;
                                case 7:
                                    valuation.enterpriseValueRevenue = text;
                                case 8:
                                    valuation.enterpriseValueEBITDA = text;
                            }
                        });
                        Stats.valuations.push(valuation);
                    };
                    for (i = 0; i < 5; i++) {
                        _loop_1(i);
                    }
                    $('div[class="Fl(start) W(50%) smartphone_W(100%)"] table').each(function (i, e) {
                        $(e).find('tr').each(function (ii, ee) {
                            var text = $(ee).find('td:nth-child(2)').text();
                            switch (i) {
                                case 0:
                                    switch (ii) {
                                        case 0:
                                            Stats.highlights.fiscalYearEnd = text;
                                        case 1:
                                            Stats.highlights.mostRecentQuarter = text;
                                    }
                                case 1:
                                    switch (ii) {
                                        case 0:
                                            Stats.highlights.profitMargin = text;
                                        case 1:
                                            Stats.highlights.operatingMargin = text;
                                    }
                                case 2:
                                    switch (ii) {
                                        case 0:
                                            Stats.highlights.returnOnAssets = text;
                                        case 1:
                                            Stats.highlights.returnOnEquity = text;
                                    }
                                case 3:
                                    switch (ii) {
                                        case 0:
                                            Stats.highlights.revenue = text;
                                        case 1:
                                            Stats.highlights.revenuePerShare = text;
                                        case 2:
                                            Stats.highlights.quarterlyRevenueGrowth = text;
                                        case 3:
                                            Stats.highlights.grossProfit = text;
                                        case 4:
                                            Stats.highlights.EBITDA = text;
                                        case 5:
                                            Stats.highlights.netIncomeToCommon = text;
                                        case 6:
                                            Stats.highlights.dilutedEPS = text;
                                        case 7:
                                            Stats.highlights.quarterlyEarningsGrowth = text;
                                    }
                                case 4:
                                    switch (ii) {
                                        case 0:
                                            Stats.highlights.totalCash = text;
                                        case 1:
                                            Stats.highlights.totalCashPerShare = text;
                                        case 2:
                                            Stats.highlights.totalDebt = text;
                                        case 3:
                                            Stats.highlights.totalDebtEquity = text;
                                        case 4:
                                            Stats.highlights.currentRatio = text;
                                        case 5:
                                            Stats.highlights.bookValuePerShare = text;
                                    }
                                case 5:
                                    switch (ii) {
                                        case 0:
                                            Stats.highlights.operatingCashFlow = text;
                                        case 1:
                                            Stats.highlights.leveredFreeCashFlow = text;
                                    }
                            }
                        });
                    });
                    $('div[class="Fl(end) W(50%) smartphone_W(100%)"] table').each(function (i, e) {
                        $(e).find('tr').each(function (ii, ee) {
                            var text = $(ee).find('td:nth-child(2)').text();
                            switch (i) {
                                case 0:
                                    switch (ii) {
                                        case 0:
                                            Stats.tradingInfo.beta5Y = text;
                                        case 1:
                                            Stats.tradingInfo.yearChange = text;
                                        case 2:
                                            Stats.tradingInfo.spxYearChange = text;
                                        case 3:
                                            Stats.tradingInfo.yearHigh = text;
                                        case 4:
                                            Stats.tradingInfo.yearLow = text;
                                        case 5:
                                            Stats.tradingInfo.ma50 = text;
                                        case 6:
                                            Stats.tradingInfo.ma200 = text;
                                    }
                                case 1:
                                    switch (ii) {
                                        case 0:
                                            Stats.tradingInfo.avgVol3m = text;
                                        case 1:
                                            Stats.tradingInfo.avgVol10d = text;
                                        case 2:
                                            Stats.tradingInfo.sharesOutstanding = text;
                                        case 3:
                                            Stats.tradingInfo.float = text;
                                        case 4:
                                            Stats.tradingInfo.insiderPct = text;
                                        case 5:
                                            Stats.tradingInfo.institutionPct = text;
                                        case 6:
                                            Stats.tradingInfo.sharesShort = text;
                                        case 7:
                                            Stats.tradingInfo.shortRatio = text;
                                        case 8:
                                            Stats.tradingInfo.shortPctFloat = text;
                                        case 9:
                                            Stats.tradingInfo.shortPctShares = text;
                                        case 10:
                                            Stats.tradingInfo.sharesShortPrior = text;
                                    }
                                case 2:
                                    switch (ii) {
                                        case 0:
                                            Stats.tradingInfo.forwardDividendRate = text;
                                        case 1:
                                            Stats.tradingInfo.forwardDividendYield = text;
                                        case 2:
                                            Stats.tradingInfo.trailingDividendRate = text;
                                        case 3:
                                            Stats.tradingInfo.trailingDividendYield = text;
                                        case 4:
                                            Stats.tradingInfo.averageDividendYield = text;
                                        case 5:
                                            Stats.tradingInfo.payoutRatio = text;
                                        case 6:
                                            Stats.tradingInfo.dividendDate = text;
                                        case 7:
                                            Stats.tradingInfo.exDividendDate = text;
                                        case 8:
                                            Stats.tradingInfo.lastSplitFactor = text;
                                        case 9:
                                            Stats.tradingInfo.lastSplitDate = text;
                                    }
                            }
                        });
                    });
                    return [2 /*return*/, Stats];
            }
        });
    });
}
exports.GetStats = GetStats;
//# sourceMappingURL=Stats.lib.js.map