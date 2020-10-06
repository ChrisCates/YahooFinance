export interface CashFlowInterface {
    date: string;
    operatingCashFlow: string;
    investingCashFlow: string;
    financingCashFlow: string;
    endCashPosition: string;
    incomeTaxPaid: string;
    interestPaid: string;
    capitalExpenditure: string;
    issuanceCapitalStock: string;
    issuanceDebt: string;
    repaymentDebt: string;
    freeCashFlow: string;
}
export declare function GetCash(symbol: string): Promise<CashFlowInterface[]>;
