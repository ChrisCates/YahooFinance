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
require("colors");
var commander_1 = require("commander");
var fs_jetpack_1 = require("fs-jetpack");
var Summary_lib_1 = require("./library/Summary.lib");
var Stats_lib_1 = require("./library/Stats.lib");
var Profile_lib_1 = require("./library/Profile.lib");
var Income_lib_1 = require("./library/Income.lib");
var Balance_lib_1 = require("./library/Balance.lib");
var Cash_lib_1 = require("./library/Cash.lib");
var Analysis_lib_1 = require("./library/Analysis.lib");
var Holders_lib_1 = require("./library/Holders.lib");
var Insiders_lib_1 = require("./library/Insiders.lib");
var InsiderTransactions_lib_1 = require("./library/InsiderTransactions.lib");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        commander_1.program
            .description('Yahoo Finance - A flexible API and Library to aggregate data on Stonks')
            .option('--mute', 'do not display the associated data to console', false)
            .option('--file', 'write the associated data to a JSON file', false)
            .option('--path [path]', 'the path to the file you want to', 'output.json');
        commander_1.program
            .command('summary <symbol>')
            .description('retrieve the summary for the specified symbol')
            .action(function (symbol) { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Summary_lib_1.GetSummary(symbol)];
                    case 1:
                        data = _a.sent();
                        if (!commander_1.program.mute) {
                            console.log(("The summary for " + symbol).green.bold);
                            console.log(data);
                        }
                        if (commander_1.program.file) {
                            fs_jetpack_1.write(commander_1.program.path, JSON.stringify(data, null, 2));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('stats <symbol>')
            .description('retrieve the stats for the specified symbol')
            .action(function (symbol) { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Stats_lib_1.GetStats(symbol)];
                    case 1:
                        data = _a.sent();
                        if (!commander_1.program.mute) {
                            console.log(("The stats for " + symbol).green.bold);
                            console.log(data);
                        }
                        if (commander_1.program.file) {
                            fs_jetpack_1.write(commander_1.program.path, JSON.stringify(data, null, 2));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('profile <symbol>')
            .description('retrieve the profile for the specified symbol')
            .action(function (symbol) { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Profile_lib_1.GetProfile(symbol)];
                    case 1:
                        data = _a.sent();
                        if (!commander_1.program.mute) {
                            console.log(("The profile for " + symbol).green.bold);
                            console.log(data);
                        }
                        if (commander_1.program.file) {
                            fs_jetpack_1.write(commander_1.program.path, JSON.stringify(data, null, 2));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('income-statements <symbol>')
            .description('retrieve historical income statements from the past 4 years for the specified symbol')
            .action(function (symbol) { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Income_lib_1.GetIncome(symbol)];
                    case 1:
                        data = _a.sent();
                        if (!commander_1.program.mute) {
                            console.log(("The income statements for " + symbol).green.bold);
                            console.log(data);
                        }
                        if (commander_1.program.file) {
                            fs_jetpack_1.write(commander_1.program.path, JSON.stringify(data, null, 2));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('balance-sheets <symbol>')
            .description('retrieve historical balance sheets from the past 4 years for the specified symbol')
            .action(function (symbol) { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Balance_lib_1.GetBalance(symbol)];
                    case 1:
                        data = _a.sent();
                        if (!commander_1.program.mute) {
                            console.log(("The balance sheets for " + symbol).green.bold);
                            console.log(data);
                        }
                        if (commander_1.program.file) {
                            fs_jetpack_1.write(commander_1.program.path, JSON.stringify(data, null, 2));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('cash-flows <symbol>')
            .description('retrieve historical cash flows from the past 4 years for the specified symbol')
            .action(function (symbol) { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Cash_lib_1.GetCash(symbol)];
                    case 1:
                        data = _a.sent();
                        if (!commander_1.program.mute) {
                            console.log(("The cash flows for " + symbol).green.bold);
                            console.log(data);
                        }
                        if (commander_1.program.file) {
                            fs_jetpack_1.write(commander_1.program.path, JSON.stringify(data, null, 2));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('analysis <symbol>')
            .description('retrieve historical analysis and estimates from the past 4 years for the specified symbol')
            .action(function (symbol) { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Analysis_lib_1.GetAnalysis(symbol)];
                    case 1:
                        data = _a.sent();
                        if (!commander_1.program.mute) {
                            console.log(("The historical analysis for " + symbol).green.bold);
                            console.log(data);
                        }
                        if (commander_1.program.file) {
                            fs_jetpack_1.write(commander_1.program.path, JSON.stringify(data, null, 2));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('holders <symbol>')
            .description('retrieve the top institutional holders and share breakdown for the specified symbol')
            .action(function (symbol) { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Holders_lib_1.GetHolders(symbol)];
                    case 1:
                        data = _a.sent();
                        if (!commander_1.program.mute) {
                            console.log(("The summary of holders for " + symbol).green.bold);
                            console.log(data);
                        }
                        if (commander_1.program.file) {
                            fs_jetpack_1.write(commander_1.program.path, JSON.stringify(data, null, 2));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('insiders <symbol>')
            .description('retrieve the insiders for the specified symbol')
            .action(function (symbol) { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Insiders_lib_1.GetInsiders(symbol)];
                    case 1:
                        data = _a.sent();
                        if (!commander_1.program.mute) {
                            console.log(("The summary of insiders for " + symbol).green.bold);
                            console.log(data);
                        }
                        if (commander_1.program.file) {
                            fs_jetpack_1.write(commander_1.program.path, JSON.stringify(data, null, 2));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program
            .command('insider-transactions <symbol>')
            .description('retrieve the insider transactions for the specified symbol')
            .action(function (symbol) { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, InsiderTransactions_lib_1.GetInsiderTransactions(symbol)];
                    case 1:
                        data = _a.sent();
                        if (!commander_1.program.mute) {
                            console.log(("The summary of insider transactions for " + symbol).green.bold);
                            console.log(data);
                        }
                        if (commander_1.program.file) {
                            fs_jetpack_1.write(commander_1.program.path, JSON.stringify(data, null, 2));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        commander_1.program.parse(process.argv);
        return [2 /*return*/];
    });
}); })();
//# sourceMappingURL=Yahoo.js.map