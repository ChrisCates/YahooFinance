import { Request } from './Request.lib';

export interface ValuationInterface {
    date: string;
    marketCap: string;
    enterpriseValue: string;
    trailingPE: string;
    forwardPE: string;
    PEGRatio: string;
    priceSale: string;
    priceBook: string;
    enterpriseValueRevenue: string;
    enterpriseValueEBITDA: string;
}

export interface StatsInterface {
    valuations: Array<ValuationInterface>;

    highlights: {
        fiscalYearEnd: string;
        mostRecentQuarter: string;

        profitMargin: string;
        operatingMargin: string;

        returnOnAssets: string;
        returnOnEquity: string;
        
        revenue: string;
        revenuePerShare: string;
        quarterlyRevenueGrowth: string;
        grossProfit: string;
        EBITDA: string;
        netIncomeToCommon: string;
        dilutedEPS: string;
        quarterlyEarningsGrowth: string;

        totalCash: string;
        totalCashPerShare: string;
        totalDebt: string;
        totalDebtEquity: string;
        currentRatio: string;
        bookValuePerShare: string;

        operatingCashFlow: string;
        leveredFreeCashFlow: string;
    };

    tradingInfo: {
        beta5Y: string;
        yearChange: string;
        spxYearChange: string;
        yearHigh: string;
        yearLow: string;
        ma50: string;
        ma200: string;

        avgVol3m: string;
        avgVol10d: string;
        sharesOutstanding: string;
        float: string;
        insiderPct: string;
        institutionPct: string;
        sharesShort: string;
        shortRatio: string;
        shortPctFloat: string;
        shortPctShares: string;
        sharesShortPrior: string;

        forwardDividendRate: string;
        forwardDividendYield: string;
        trailingDividendRate: string;
        trailingDividendYield: string;
        averageDividendYield: string;
        payoutRatio: string;
        dividendDate: string;
        exDividendDate: string;
        lastSplitFactor: string;
        lastSplitDate: string;
    };
}

export async function GetStats(symbol: string): Promise<StatsInterface> {
    const Stats: StatsInterface = {
        valuations: [],

        highlights: {
            fiscalYearEnd: '',
            mostRecentQuarter: '',
        
            profitMargin: '',
            operatingMargin: '',
        
            returnOnAssets: '',
            returnOnEquity: '',
            
            revenue: '',
            revenuePerShare: '',
            quarterlyRevenueGrowth: '',
            grossProfit: '',
            EBITDA: '',
            netIncomeToCommon: '',
            dilutedEPS: '',
            quarterlyEarningsGrowth: '',
        
            totalCash: '',
            totalCashPerShare: '',
            totalDebt: '',
            totalDebtEquity: '',
            currentRatio: '',
            bookValuePerShare: '',
        
            operatingCashFlow: '',
            leveredFreeCashFlow: '',
        },
        
        tradingInfo: {
            beta5Y: '',
            yearChange: '',
            spxYearChange: '',
            yearHigh: '',
            yearLow: '',
            ma50: '',
            ma200: '',
        
            avgVol3m: '',
            avgVol10d: '',
            sharesOutstanding: '',
            float: '',
            insiderPct: '',
            institutionPct: '',
            sharesShort: '',
            shortRatio: '',
            shortPctFloat: '',
            shortPctShares: '',
            sharesShortPrior: '',
        
            forwardDividendRate: '',
            forwardDividendYield: '',
            trailingDividendRate: '',
            trailingDividendYield: '',
            averageDividendYield: '',
            payoutRatio: '',
            dividendDate: '',
            exDividendDate: '',
            lastSplitFactor: '',
            lastSplitDate: '',
        },
    };

    const $ = await Request(`https://finance.yahoo.com/quote/${symbol}/key-statistics`);

    for (let i = 0; i < 5; i++) {
        const valuation: ValuationInterface = {
            date: '',
            marketCap: '',
            enterpriseValue: '',
            trailingPE: '',
            forwardPE: '',
            PEGRatio: '',
            priceSale: '',
            priceBook: '',
            enterpriseValueRevenue: '',
            enterpriseValueEBITDA: '',
        };

        $(`table.BdEnd thead th:nth-child(${2 + i})`).each((ii, e) => {
            const text = $(e).text();
            valuation.date = text;
        })

        $('table.BdEnd tbody tr').each((ii, e) => {
            const text = $(e).find(`td:nth-child(${2 + i})`).text();

            switch(ii) {
                case 0:
                    valuation.marketCap = text;
                case 1:
                    valuation.enterpriseValue = text;
                case 2:
                    valuation.trailingPE = text;
                case 3:
                    valuation.forwardPE = text;
                case 4:
                    valuation.PEGRatio = text;
                case 5:
                    valuation.priceSale = text;
                case 6:
                    valuation.priceBook = text;
                case 7:
                    valuation.enterpriseValueRevenue = text;
                case 8:
                    valuation.enterpriseValueEBITDA = text;
                
            }
        });

        Stats.valuations.push(valuation);
    }

    $('div[class="Fl(start) W(50%) smartphone_W(100%)"] table').each((i, e) => {
        $(e).find('tr').each((ii, ee) => {
            const text = $(ee).find('td:nth-child(2)').text();

            switch(i) {
                case 0:
                    switch(ii) {
                        case 0:
                            Stats.highlights.fiscalYearEnd = text;
                        case 1:
                            Stats.highlights.mostRecentQuarter = text;
                    }
                case 1:
                    switch(ii) {
                        case 0:
                            Stats.highlights.profitMargin = text;
                        case 1:
                            Stats.highlights.operatingMargin = text;
                    }
                case 2:
                    switch(ii) {
                        case 0:
                            Stats.highlights.returnOnAssets = text;
                        case 1:
                            Stats.highlights.returnOnEquity = text;
                    }
                case 3:
                    switch(ii) {
                        case 0:
                            Stats.highlights.revenue = text;
                        case 1:
                            Stats.highlights.revenuePerShare = text;
                        case 2:
                            Stats.highlights.quarterlyRevenueGrowth = text;
                        case 3:
                            Stats.highlights.grossProfit = text;
                        case 4:
                            Stats.highlights.EBITDA = text;
                        case 5:
                            Stats.highlights.netIncomeToCommon = text;
                        case 6:
                            Stats.highlights.dilutedEPS = text;
                        case 7:
                            Stats.highlights.quarterlyEarningsGrowth = text;
                    }
                case 4:
                    switch(ii) {
                        case 0:
                            Stats.highlights.totalCash = text;
                        case 1:
                            Stats.highlights.totalCashPerShare = text;
                        case 2:
                            Stats.highlights.totalDebt = text;
                        case 3:
                            Stats.highlights.totalDebtEquity = text;
                        case 4:
                            Stats.highlights.currentRatio = text;
                        case 5:
                            Stats.highlights.bookValuePerShare = text;
                    }
                case 5:
                    switch(ii) {
                        case 0:
                            Stats.highlights.operatingCashFlow = text;
                        case 1:
                            Stats.highlights.leveredFreeCashFlow = text;
                    }
            }
        });
    });

    $('div[class="Fl(end) W(50%) smartphone_W(100%)"] table').each((i, e) => {
        $(e).find('tr').each((ii, ee) => {
            const text = $(ee).find('td:nth-child(2)').text();

            switch (i) {
                case 0:
                    switch(ii) {
                        case 0:
                            Stats.tradingInfo.beta5Y = text;
                        case 1:
                            Stats.tradingInfo.yearChange = text;
                        case 2:
                            Stats.tradingInfo.spxYearChange = text;
                        case 3:
                            Stats.tradingInfo.yearHigh = text;
                        case 4:
                            Stats.tradingInfo.yearLow = text;
                        case 5:
                            Stats.tradingInfo.ma50 = text;
                        case 6:
                            Stats.tradingInfo.ma200 = text;
                    }
                case 1:
                    switch(ii) {
                        case 0:
                            Stats.tradingInfo.avgVol3m = text;
                        case 1:
                            Stats.tradingInfo.avgVol10d = text;
                        case 2:
                            Stats.tradingInfo.sharesOutstanding = text;
                        case 3:
                            Stats.tradingInfo.float = text;
                        case 4:
                            Stats.tradingInfo.insiderPct = text;
                        case 5:
                            Stats.tradingInfo.institutionPct = text;
                        case 6:
                            Stats.tradingInfo.sharesShort = text;
                        case 7:
                            Stats.tradingInfo.shortRatio = text;
                        case 8:
                            Stats.tradingInfo.shortPctFloat = text;
                        case 9:
                            Stats.tradingInfo.shortPctShares = text;
                        case 10:
                            Stats.tradingInfo.sharesShortPrior = text;
                    }
                case 2:
                    switch(ii) {
                        case 0:
                            Stats.tradingInfo.forwardDividendRate = text;
                        case 1:
                            Stats.tradingInfo.forwardDividendYield = text;
                        case 2:
                            Stats.tradingInfo.trailingDividendRate = text;
                        case 3:
                            Stats.tradingInfo.trailingDividendYield = text;
                        case 4:
                            Stats.tradingInfo.averageDividendYield = text;
                        case 5:
                            Stats.tradingInfo.payoutRatio = text;
                        case 6:
                            Stats.tradingInfo.dividendDate = text;
                        case 7:
                            Stats.tradingInfo.exDividendDate = text;
                        case 8:
                            Stats.tradingInfo.lastSplitFactor = text;
                        case 9:
                            Stats.tradingInfo.lastSplitDate = text;
                        
                    }
            }
        });
    });

    return Stats;
}