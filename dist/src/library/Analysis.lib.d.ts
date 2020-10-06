export interface EarningsEstimateInterface {
    date: string;
    analystsAmt: string;
    avgEstimate: string;
    lowEstimate: string;
    highEstimate: string;
    yearAgoEPS: string;
}
export interface RevenueEstimateInterface {
    date: string;
    analystsAmt: string;
    avgEstimate: string;
    lowEstimate: string;
    highEstimate: string;
    yearAgoSales: string;
    salesGrowth: string;
}
export interface EarningsHistoryInterface {
    date: string;
    epsEstimate: string;
    epsActual: string;
    difference: string;
    surprise: string;
}
export interface EPSTrendInterface {
    date: string;
    currentEstimate: string;
    daysAgo7: string;
    daysAgo30: string;
    daysAgo60: string;
    daysAgo90: string;
}
export interface EPSRevisionsInterface {
    date: string;
    upLast7Days: string;
    upLast30Days: string;
    downLast7Days: string;
    downLast30Days: string;
}
export interface GrowthEstimatesInterface {
    date: string;
    currentQuarter: string;
    nextQuarter: string;
    currentYear: string;
    nextYear: string;
    next5Years: string;
    past5Years: string;
}
export interface AnalysisInterface {
    earningsEstimate: Array<EarningsEstimateInterface>;
    revenueEstimate: Array<RevenueEstimateInterface>;
    earningsHistory: Array<EarningsHistoryInterface>;
    epsTrend: Array<EPSTrendInterface>;
    epsRevisions: Array<EPSRevisionsInterface>;
    growthEstimates: Array<GrowthEstimatesInterface>;
}
export declare function GetAnalysis(symbol: string): Promise<AnalysisInterface>;
