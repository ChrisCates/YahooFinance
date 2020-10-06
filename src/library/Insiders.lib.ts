import { Request } from './Request.lib';

export interface InsiderInterface {
    name: string;
    recentTransaction: string;
    date: string;
    sharesOwned: string;
};

export async function GetInsiders(symbol: string): Promise<InsiderInterface[]> {
    const Insiders: InsiderInterface[] = [];

    const $ = await Request(`https://finance.yahoo.com/quote/${symbol}/insider-roster`);

    $('div#Col1-1-Holders-Proxy table tbody tr').each((i, e) => {
        const Insider: InsiderInterface = {
            name: $(e).find('td:nth-child(1) p a').text(),
            recentTransaction: $(e).find('td:nth-child(2)').text(),
            date: $(e).find('td:nth-child(3)').text(),
            sharesOwned: $(e).find('td:nth-child(4)').text(),
        };

        Insiders.push(Insider);
    });

    return Insiders;
}