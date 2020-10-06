export interface InsiderInterface {
    name: string;
    recentTransaction: string;
    date: string;
    sharesOwned: string;
}
export declare function GetInsiders(symbol: string): Promise<InsiderInterface[]>;
