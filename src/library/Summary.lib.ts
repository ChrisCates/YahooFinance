import { Request } from './Request.lib';

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

export async function GetSummary(symbol: string): Promise<SummaryInterface> {
    const Summary: SummaryInterface = {
        prevClose: '',
        open: '',
        bid: '',
        ask: '',
        dayRange: '',
        yearRange: '',
        volume: '',
        avgVolume: '',

        marketCap: '',
        beta: '',
        peRatio: '',
        eps: '',
        earningsDate: '',
        dividendYield: '',
        exDividend: '',
        yearTarget: '',
    };

    const $ = await Request(`https://finance.yahoo.com/quote/${symbol}`);

    $('div[data-test="left-summary-table"] table tbody tr').each((i, e) => {
        const text = $(e).find('td:nth-child(2)').text();

        switch(i) {
            case 0:
                Summary.prevClose = text;
            case 1:
                Summary.open = text;
            case 2:
                Summary.bid = text;
            case 3:
                Summary.ask = text;
            case 4:
                Summary.dayRange = text;
            case 5:
                Summary.yearRange = text;
            case 6:
                Summary.volume = text;
            case 7:
                Summary.avgVolume = text;
        }
    });

    $('div[data-test="right-summary-table"] table tbody tr').each((i, e) => {
        const text = $(e).find('td:nth-child(2)').text();

        switch(i) {
            case 0:
                Summary.marketCap = text;
            case 1:
                Summary.beta = text;
            case 2:
                Summary.peRatio = text;
            case 3:
                Summary.eps = text;
            case 4:
                Summary.earningsDate = text;
            case 5:
                Summary.dividendYield = text;
            case 6:
                Summary.exDividend = text;
            case 7:
                Summary.yearTarget = text;
        }
    });

    return Summary;
}