import { Request } from './Request.lib';

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

export async function GetCash(symbol: string): Promise<CashFlowInterface[]> {
    const CashFlows: CashFlowInterface[] = [];

    const $ = await Request(`https://finance.yahoo.com/quote/${symbol}/cash-flow`);

    for (let i = 0; i < 4; i++) {
        const CashFlow: CashFlowInterface = {
            date: '',
            operatingCashFlow: '',
            investingCashFlow: '',
            financingCashFlow: '',
            endCashPosition: '',
            incomeTaxPaid: '',
            interestPaid: '',
            capitalExpenditure: '',
            issuanceCapitalStock: '',
            issuanceDebt: '',
            repaymentDebt: '',
            freeCashFlow: '',
        };

        $('div[class="Pos(r)"] div[class="D(tbhg)"], div[class="Pos(r)"] div[class="D(tbr) fi-row Bgc($hoverBgColor):h"]').each((ii, e) => {
            const text = $(e).find(`div:nth-child(${2 + i})`).text();

            switch(ii) {
                case 0:
                    CashFlow.date = text;
                case 1:
                    CashFlow.operatingCashFlow = text;
                case 2:
                    CashFlow.investingCashFlow = text;
                case 3:
                    CashFlow.financingCashFlow = text;
                case 4:
                    CashFlow.endCashPosition = text;
                case 5:
                    CashFlow.incomeTaxPaid = text;
                case 6:
                    CashFlow.interestPaid = text;
                case 7:
                    CashFlow.capitalExpenditure = text;
                case 8:
                    CashFlow.issuanceCapitalStock = text;
                case 9:
                    CashFlow.issuanceDebt = text;
                case 10:
                    CashFlow.repaymentDebt = text;
                case 11:
                    CashFlow.freeCashFlow = text;
            }
        });

        CashFlows.push(CashFlow);
    }

    return CashFlows;
}