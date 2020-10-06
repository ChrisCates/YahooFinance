import { Request } from './Request.lib';

export interface IncomeStatementInterface {
    date: string;
    totalRevenue: string;
    costOfRevenue: string;
    grossProfit: string;
    operatingExpense: string;
    operatingIncome: string;
    netNonOperatingInterestIncome: string;
    otherIncomeExpense: string;
    pretaxIncome: string;
    taxProvision: string;
    netIncomeCommonStockholders: string;
    dilutedNIAvailable: string;
    basicEPS: string;
    dilutedEPS: string;
    basicAverageShares: string;
    dilutedAverageShares: string;
    totalOperatingIncome: string;
    totalExpenses: string;
    netIncomeFromContinuingOperations: string;
    normalizedIncome: string;
    interestIncome: string;
    interestExpense: string;
    netInterestIncome: string;
    EBIT: string;
    EBITDA: string;
    reconciledCostOfRevenue: string;
    reconciledDepreciation: string;
    netIncomeFromContinuingOperationsMinority: string;
    totalUnusualItemsExcludingGoodwill: string;
    totalUnusualItems: string;
    normalizedEBITDA: string;
    taxRate: string;
    taxEffectOfUnusualItems: string;
};

export async function GetIncome(symbol: string): Promise<IncomeStatementInterface[]> {
    const IncomeStatements: IncomeStatementInterface[] = [];

    const $ = await Request(`https://finance.yahoo.com/quote/${symbol}/financials`);

    for (let i = 0; i < 5; i++) {
        const IncomeStatement: IncomeStatementInterface = {
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

        $('div[class="Pos(r)"] div[class="D(tbhg)"], div[class="Pos(r)"] div[class="D(tbr) fi-row Bgc($hoverBgColor):h"]').each((ii, e) => {
            const text = $(e).find(`div:nth-child(${2 + i})`).text();

            switch(ii) {
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
    }

    return IncomeStatements;
}

