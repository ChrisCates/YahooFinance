export interface InsiderTransactionInterface {
    name: string;
    transaction: string;
    type: string;
    value: string;
    date: string;
    shares: string;
}
export interface OverviewInterface {
    type: string;
    shares: string;
    transactions: string;
}
export interface InsiderTransactionsInterface {
    overview: Array<OverviewInterface>;
    transactions: InsiderTransactionInterface[];
}
export declare function GetInsiderTransactions(symbol: string): Promise<InsiderTransactionsInterface>;
