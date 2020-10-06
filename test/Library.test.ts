import { deepStrictEqual } from 'assert';

import { GetSummary, SummaryInterface } from '../src/library/Summary.lib';
import { GetStats, StatsInterface } from '../src/library/Stats.lib';
import { GetProfile, ProfileInterface } from '../src/library/Profile.lib';
import { GetIncome, IncomeStatementInterface } from '../src/library/Income.lib';
import { GetBalance, BalanceSheetInterface } from '../src/library/Balance.lib';
import { GetCash, CashFlowInterface } from '../src/library/Cash.lib';
import { GetAnalysis, AnalysisInterface } from '../src/library/Analysis.lib';
import { GetHolders, HoldersInterface } from '../src/library/Holders.lib';
import { GetInsiders, InsiderInterface } from '../src/library/Insiders.lib';
import { GetInsiderTransactions, InsiderTransactionsInterface } from '../src/library/InsiderTransactions.lib';

describe('Library Testing Suite', () => {
    it('Should get the summary for MSFT', async () => {
        const Summary: SummaryInterface = await GetSummary('MSFT');
        deepStrictEqual(Summary !== null, true);
    });

    it('Should get the stats for MSFT', async () => {
        const Stats: StatsInterface = await GetStats('MSFT');
        deepStrictEqual(Stats !== null, true);
    });

    it('Should get the profile for MSFT', async () => {
        const Profile: ProfileInterface = await GetProfile('MSFT');
        deepStrictEqual(Profile !== null, true);
    });

    it('Should get the income statements for MSFT', async () => {
        const Incomes: IncomeStatementInterface[] = await GetIncome('MSFT');
        deepStrictEqual(Incomes !== null, true);
    });

    it('Should get the balance sheets for MSFT', async () => {
        const Balances: BalanceSheetInterface[] = await GetBalance('MSFT');
        deepStrictEqual(Balances !== null, true);
    });

    it('Should get the cash flows for MSFT', async () => {
        const CashFlows: CashFlowInterface[] = await GetCash('MSFT');
        deepStrictEqual(CashFlows !== null, true);
    });

    it('Should get the analysis for MSFT', async () => {
        const Analysis: AnalysisInterface = await GetAnalysis('MSFT');
        deepStrictEqual(Analysis !== null, true);
    });

    it('Should get the holders for MSFT', async () => {
        const Holders: HoldersInterface = await GetHolders('MSFT');
        deepStrictEqual(Holders !== null, true);
    });

    it('Should get the insiders for MSFT', async () => {
        const Insiders: InsiderInterface[] = await GetInsiders('MSFT');
        deepStrictEqual(Insiders !== null, true);
    });

    it('Should get the holders for MSFT', async () => {
        const InsiderTransactions: InsiderTransactionsInterface = await GetInsiderTransactions('MSFT');
        deepStrictEqual(InsiderTransactions !== null, true);
    });
});