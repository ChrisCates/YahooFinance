export interface SummaryInterface {
    prevClose: string;
    open: string;
    bid: string;
    ask: string;
    dayRange: string;
    yearRange: string;
    volume: string;
    avgVolume: string;
    marketCap: string;
    beta: string;
    peRatio: string;
    eps: string;
    earningsDate: string;
    dividendYield: string;
    exDividend: string;
    yearTarget: string;
}
export declare function GetSummary(symbol: string): Promise<SummaryInterface>;
