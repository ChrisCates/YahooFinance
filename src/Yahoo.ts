import 'colors';
import { program } from 'commander';
import { write } from 'fs-jetpack';

import { GetSummary, SummaryInterface } from './library/Summary.lib';
import { GetStats, StatsInterface } from './library/Stats.lib';
import { GetProfile, ProfileInterface } from './library/Profile.lib';
import { GetIncome, IncomeStatementInterface } from './library/Income.lib';
import { GetBalance, BalanceSheetInterface } from './library/Balance.lib';
import { GetCash, CashFlowInterface } from './library/Cash.lib';
import { GetAnalysis, AnalysisInterface } from './library/Analysis.lib';
import { GetHolders, HoldersInterface } from './library/Holders.lib';
import { GetInsiders, InsiderInterface } from './library/Insiders.lib';
import { GetInsiderTransactions, InsiderTransactionsInterface } from './library/InsiderTransactions.lib';

(async () => {
    program
        .description('Yahoo Finance - A flexible API and Library to aggregate data on Stonks')
        .option('--mute', 'do not display the associated data to console', false)
        .option('--file', 'write the associated data to a JSON file', false)
        .option('--path [path]', 'the path to the file you want to', 'output.json')

    program
        .command('summary <symbol>')
        .description('retrieve the summary for the specified symbol')
        .action(async symbol => {
            const data: SummaryInterface = await GetSummary(symbol);
            if (!program.mute) {
                console.log(`The summary for ${symbol}`.green.bold);
                console.log(data);
            }

            if (program.file) {
                write(program.path, JSON.stringify(data, null , 2));
            }
        });

    program
        .command('stats <symbol>')
        .description('retrieve the stats for the specified symbol')
        .action(async symbol => {
            const data: StatsInterface = await GetStats(symbol);
            if (!program.mute) {
                console.log(`The stats for ${symbol}`.green.bold);
                console.log(data);
            }

            if (program.file) {
                write(program.path, JSON.stringify(data, null , 2));
            }
        });

    program
        .command('profile <symbol>')
        .description('retrieve the profile for the specified symbol')
        .action(async symbol => {
            const data: ProfileInterface = await GetProfile(symbol);
            if (!program.mute) {
                console.log(`The profile for ${symbol}`.green.bold);
                console.log(data);
            }

            if (program.file) {
                write(program.path, JSON.stringify(data, null , 2));
            }
        });

    program
        .command('income-statements <symbol>')
        .description('retrieve historical income statements from the past 4 years for the specified symbol')
        .action(async symbol => {
            const data: IncomeStatementInterface[] = await GetIncome(symbol);
            if (!program.mute) {
                console.log(`The income statements for ${symbol}`.green.bold);
                console.log(data);
            }

            if (program.file) {
                write(program.path, JSON.stringify(data, null , 2));
            }
        });

    program
        .command('balance-sheets <symbol>')
        .description('retrieve historical balance sheets from the past 4 years for the specified symbol')
        .action(async symbol => {
            const data: BalanceSheetInterface[] = await GetBalance(symbol);
            if (!program.mute) {
                console.log(`The balance sheets for ${symbol}`.green.bold);
                console.log(data);
            }

            if (program.file) {
                write(program.path, JSON.stringify(data, null , 2));
            }
        });

    program
        .command('cash-flows <symbol>')
        .description('retrieve historical cash flows from the past 4 years for the specified symbol')
        .action(async symbol => {
            const data: CashFlowInterface[] = await GetCash(symbol);
            if (!program.mute) {
                console.log(`The cash flows for ${symbol}`.green.bold);
                console.log(data);
            }

            if (program.file) {
                write(program.path, JSON.stringify(data, null , 2));
            }
        });

    program
        .command('analysis <symbol>')
        .description('retrieve historical analysis and estimates from the past 4 years for the specified symbol')
        .action(async symbol => {
            const data: AnalysisInterface = await GetAnalysis(symbol);
            if (!program.mute) {
                console.log(`The historical analysis for ${symbol}`.green.bold);
                console.log(data);
            }

            if (program.file) {
                write(program.path, JSON.stringify(data, null , 2));
            }
        });

    program
        .command('holders <symbol>')
        .description('retrieve the top institutional holders and share breakdown for the specified symbol')
        .action(async symbol => {
            const data: HoldersInterface = await GetHolders(symbol);
            if (!program.mute) {
                console.log(`The summary of holders for ${symbol}`.green.bold);
                console.log(data);
            }

            if (program.file) {
                write(program.path, JSON.stringify(data, null , 2));
            }
        });
    
    program
        .command('insiders <symbol>')
        .description('retrieve the insiders for the specified symbol')
        .action(async symbol => {
            const data: InsiderInterface[] = await GetInsiders(symbol);
            if (!program.mute) {
                console.log(`The summary of insiders for ${symbol}`.green.bold);
                console.log(data);
            }

            if (program.file) {
                write(program.path, JSON.stringify(data, null , 2));
            }
        });

    program
        .command('insider-transactions <symbol>')
        .description('retrieve the insider transactions for the specified symbol')
        .action(async symbol => {
            const data: InsiderTransactionsInterface = await GetInsiderTransactions(symbol);
            if (!program.mute) {
                console.log(`The summary of insider transactions for ${symbol}`.green.bold);
                console.log(data);
            }

            if (program.file) {
                write(program.path, JSON.stringify(data, null , 2));
            }
        });
    
    program.parse(process.argv);
})();