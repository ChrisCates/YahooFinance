export interface HolderInterface {
    name: string;
    shares: string;
    dateReported: string;
    percentOwned: string;
    value: string;
}
export interface HoldersInterface {
    breakdown: {
        heldByInsiders: string;
        heldByInstitutions: string;
        floatHeldByInstitutions: string;
        numberOfInstitutionsHolding: string;
    };
    topHolders: Array<HolderInterface>;
}
export declare function GetHolders(symbol: string): Promise<HoldersInterface>;
