import { Request } from './Request.lib';

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

export async function GetAnalysis(symbol: string): Promise<AnalysisInterface> {
    const Analysis = {
        earningsEstimate: [],
        revenueEstimate: [],
        earningsHistory: [],
        epsTrend: [],
        epsRevisions: [],
        growthEstimates: [],
    };

    const $ = await Request(`https://finance.yahoo.com/quote/${symbol}/analysis`);

    for (let i = 0; i < 4; i++) {
        $('section[data-test="qsp-analyst"] table').each((ii, e) => {
            switch (ii) {
                case 0:
                    const EarningsEstimate: EarningsEstimateInterface = {
                        date: '',
                        analystsAmt: '',
                        avgEstimate: '',
                        lowEstimate: '',
                        highEstimate: '',
                        yearAgoEPS: '',
                    };

                    EarningsEstimate.date = $(e).find(`thead tr th:nth-child(${2 + i})`).text();

                    $(e).find('tbody tr').each((iii, ee) => {
                        const text = $(ee).find(`td:nth-child(${2 + i})`).text();
                        switch (iii) {
                            case 0:
                                EarningsEstimate.analystsAmt = text;
                            case 1:
                                EarningsEstimate.avgEstimate = text;
                            case 2:
                                EarningsEstimate.lowEstimate = text;
                            case 3:
                                EarningsEstimate.highEstimate = text;
                            case 4:
                                EarningsEstimate.yearAgoEPS = text;
                        }
                    });

                    Analysis.earningsEstimate.push(EarningsEstimate);
                case 1:
                    const RevenueEstimate: RevenueEstimateInterface = {
                        date: '',
                        analystsAmt: '',
                        avgEstimate: '',
                        lowEstimate: '',
                        highEstimate: '',
                        yearAgoSales: '',
                        salesGrowth: '',
                    };

                    RevenueEstimate.date = $(e).find(`thead tr th:nth-child(${2 + i})`).text();

                    $(e).find('tbody tr').each((iii, ee) => {
                        const text = $(ee).find(`td:nth-child(${2 + i})`).text();
                        switch (iii) {
                            case 0:
                                RevenueEstimate.analystsAmt = text;
                            case 1:
                                RevenueEstimate.avgEstimate = text;
                            case 2:
                                RevenueEstimate.lowEstimate = text;
                            case 3:
                                RevenueEstimate.highEstimate = text;
                            case 4:
                                RevenueEstimate.yearAgoSales = text;
                            case 5:
                                RevenueEstimate.salesGrowth = text;
                        }
                    });

                    Analysis.revenueEstimate.push(RevenueEstimate);
                case 2:
                    const EarningsHistory: EarningsHistoryInterface = {
                        date: '',
                        epsEstimate: '',
                        epsActual: '',
                        difference: '',
                        surprise: '',
                    };

                    EarningsHistory.date = $(e).find(`thead tr th:nth-child(${2 + i})`).text();

                    $(e).find('tbody tr').each((iii, ee) => {
                        const text = $(ee).find(`td:nth-child(${2 + i})`).text();
                        switch (iii) {
                            case 0:
                                EarningsHistory.epsEstimate = text;
                            case 1:
                                EarningsHistory.epsActual = text;
                            case 2:
                                EarningsHistory.difference = text;
                            case 3:
                                EarningsHistory.surprise = text;
                        }
                    });

                    Analysis.earningsHistory.push(EarningsHistory);
                case 3:
                    const EPSTrend: EPSTrendInterface = {
                        date: '',
                        currentEstimate: '',
                        daysAgo7: '',
                        daysAgo30: '',
                        daysAgo60: '',
                        daysAgo90: '',
                    };

                    EPSTrend.date = $(e).find(`thead tr th:nth-child(${2 + i})`).text();

                    $(e).find('tbody tr').each((iii, ee) => {
                        const text = $(ee).find(`td:nth-child(${2 + i})`).text();
                        switch (iii) {
                            case 0:
                                EPSTrend.currentEstimate = text;
                            case 1:
                                EPSTrend.daysAgo7 = text;
                            case 2:
                                EPSTrend.daysAgo30 = text;
                            case 3:
                                EPSTrend.daysAgo60 = text;
                            case 4:
                                EPSTrend.daysAgo90 = text;
                        }
                    });

                    Analysis.epsTrend.push(EPSTrend);
                case 4:
                    const EPSRevisions: EPSRevisionsInterface = {
                        date: '',
                        upLast7Days: '',
                        upLast30Days: '',
                        downLast7Days: '',
                        downLast30Days: '',
                    };

                    EPSRevisions.date = $(e).find(`thead tr th:nth-child(${2 + i})`).text();

                    $(e).find('tbody tr').each((iii, ee) => {
                        const text = $(ee).find(`td:nth-child(${2 + i})`).text();
                        switch (iii) {
                            case 0:
                                EPSRevisions.upLast7Days = text;
                            case 1:
                                EPSRevisions.upLast30Days = text;
                            case 2:
                                EPSRevisions.downLast7Days = text;
                            case 3:
                                EPSRevisions.downLast30Days = text;
                        }
                    });

                    Analysis.epsRevisions.push(EPSRevisions);
                case 5:
                    const GrowthEstimates: GrowthEstimatesInterface = {
                        date: '',
                        currentQuarter: '',
                        nextQuarter: '',
                        currentYear: '',
                        nextYear: '',
                        next5Years: '',
                        past5Years: '',
                    };

                    GrowthEstimates.date = $(e).find(`thead tr th:nth-child(${2 + i})`).text();

                    $(e).find('tbody tr').each((iii, ee) => {
                        const text = $(ee).find(`td:nth-child(${2 + i})`).text();
                        switch (iii) {
                            case 0:
                                GrowthEstimates.currentQuarter = text;
                            case 1:
                                GrowthEstimates.nextQuarter = text;
                            case 2:
                                GrowthEstimates.currentYear = text;
                            case 3:
                                GrowthEstimates.nextYear = text;
                            case 4:
                                GrowthEstimates.next5Years = text;
                            case 5:
                                GrowthEstimates.past5Years = text;
                        }
                    });

                    Analysis.growthEstimates.push(GrowthEstimates);
            }
        });
    }

    return Analysis;
}