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
}
export declare function GetIncome(symbol: string): Promise<IncomeStatementInterface[]>;
