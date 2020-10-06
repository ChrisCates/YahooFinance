export interface BalanceSheetInterface {
    date: string;
    totalAssets: string;
    totalLiabilitiesNetMinorityInterest: string;
    totalEquityGrossMinorityInterest: string;
    totalCapitalization: string;
    commonStockEquity: string;
    capitalLeaseObligations: string;
    netTangibleAssets: string;
    workingCapital: string;
    investedCapital: string;
    tangibleBookValue: string;
    totalDebt: string;
    netDebt: string;
    sharesIssued: string;
    ordinarySharesNumber: string;
}
export declare function GetBalance(symbol: string): Promise<BalanceSheetInterface[]>;
