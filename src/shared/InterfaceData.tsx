export const SummaryInterface = `export interface SummaryInterface {
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
}`;

export const StatsInterface = `export interface ValuationInterface {
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
}`;

export const ProfileInterface = `export interface ExecutiveInterface {
    name: string;
    title: string;
    pay: string;
    exercised: string;
    born: string;
}

export interface ProfileInterface {
    street: string;
    city: string;
    country: string;
    number: string;
    website: string;
    sector: string;
    industry: string;
    employees: string;
    executives: Array<ExecutiveInterface>;    
}`;

export const IncomeInterface = `export interface IncomeStatementInterface {
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
}`;

export const BalanceInterface = `export interface BalanceSheetInterface {
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
}`;

export const CashInterface = `export interface CashFlowInterface {
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
}`;

export const AnalysisInterface = `export interface EarningsEstimateInterface {
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
}`;

export const HoldersInterface = `export interface HolderInterface {
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
}`;

export const InsidersInterface = `export interface InsiderInterface {
    name: string;
    recentTransaction: string;
    date: string;
    sharesOwned: string;
}`;

export const InsiderTransactionsInterface = `export interface InsiderTransactionInterface {
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
}`;