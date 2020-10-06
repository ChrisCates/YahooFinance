import { Request } from './Request.lib';

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

export async function GetBalance(symbol: string): Promise<BalanceSheetInterface[]> {
    const BalanceSheets: BalanceSheetInterface[] = [];

    const $ = await Request(`https://finance.yahoo.com/quote/${symbol}/balance-sheet`);

    for (let i = 0; i < 4; i++) {
        const BalanceSheet: BalanceSheetInterface = {
            date: '',
            totalAssets: '',
            totalLiabilitiesNetMinorityInterest: '',
            totalEquityGrossMinorityInterest: '',
            totalCapitalization: '',
            commonStockEquity: '',
            capitalLeaseObligations: '',
            netTangibleAssets: '',
            workingCapital: '',
            investedCapital: '',
            tangibleBookValue: '',
            totalDebt: '',
            netDebt: '',
            sharesIssued: '',
            ordinarySharesNumber: '',
        };

        $('div[class="Pos(r)"] div[class="D(tbhg)"], div[class="Pos(r)"] div[class="D(tbr) fi-row Bgc($hoverBgColor):h"]').each((ii, e) => {
            const text = $(e).find(`div:nth-child(${2 + i})`).text();

            switch(ii) {
                case 0:
                    BalanceSheet.date = text;
                case 1:
                    BalanceSheet.totalAssets = text;
                case 2:
                    BalanceSheet.totalLiabilitiesNetMinorityInterest = text;
                case 3:
                    BalanceSheet.totalEquityGrossMinorityInterest = text;
                case 4:
                    BalanceSheet.totalCapitalization = text;
                case 5:
                    BalanceSheet.commonStockEquity = text;
                case 6:
                    BalanceSheet.capitalLeaseObligations = text;
                case 7:
                    BalanceSheet.netTangibleAssets = text;
                case 8:
                    BalanceSheet.workingCapital = text;
                case 9:
                    BalanceSheet.investedCapital = text;
                case 10:
                    BalanceSheet.tangibleBookValue = text;
                case 11:
                    BalanceSheet.totalDebt = text;
                case 12:
                    BalanceSheet.netDebt = text;
                case 13:
                    BalanceSheet.sharesIssued = text;
                case 14:
                    BalanceSheet.ordinarySharesNumber = text;
            }
        });

        BalanceSheets.push(BalanceSheet);
    }

    return BalanceSheets;
}