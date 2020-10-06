import { Request } from './Request.lib';

export interface InsiderTransactionInterface {
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
}

export interface InsiderTransactionsInterface {
    overview: Array<OverviewInterface>;
    transactions: InsiderTransactionInterface[];
}

export async function GetInsiderTransactions(symbol: string): Promise<InsiderTransactionsInterface> {
    const InsiderTransactions: InsiderTransactionsInterface = {
        overview: [],
        transactions: [],
    };

    const $ = await Request(`https://finance.yahoo.com/quote/${symbol}/insider-transactions`);

    $('table[data-test="insider-purchases"] tbody tr').each((i, e) => {
        const OverviewItem: OverviewInterface = {
            type: $(e).find('td:nth-child(1)').text(),
            shares: $(e).find('td:nth-child(2)').text(),
            transactions: $(e).find('td:nth-child(3)').text(),
        };

        InsiderTransactions.overview.push(OverviewItem);
    });

    $('table[class="W(100%) BdB Bdc($seperatorColor)"] tbody tr').each((i, e) => {
        const InsiderTransaction: InsiderTransactionInterface = {
            name: $(e).find('td:nth-child(1)').text(),
            transaction: $(e).find('td:nth-child(2)').text(),
            type: $(e).find('td:nth-child(3)').text(),
            value: $(e).find('td:nth-child(4)').text(),
            date: $(e).find('td:nth-child(5)').text(),
            shares: $(e).find('td:nth-child(6)').text(),
        };

        InsiderTransactions.transactions.push(InsiderTransaction);
    });

    return InsiderTransactions;
}