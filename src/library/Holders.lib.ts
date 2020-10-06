import { Request } from './Request.lib';

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

export async function GetHolders(symbol: string): Promise<HoldersInterface> {
    const Holders: HoldersInterface = {
        breakdown: {
            heldByInsiders: '',
            heldByInstitutions: '',
            floatHeldByInstitutions: '',
            numberOfInstitutionsHolding: '',
        },

        topHolders: [],
    };

    const $ = await Request(`https://finance.yahoo.com/quote/${symbol}/holders`);

    $('div[data-test="holder-summary"] table tbody tr').each((i, e) => {
        const text = $(e).find('td:nth-child(1)').text();

        switch(i) {
            case 0:
                Holders.breakdown.heldByInsiders = text;
            case 1:
                Holders.breakdown.heldByInstitutions = text;
            case 2:
                Holders.breakdown.floatHeldByInstitutions = text;
            case 3:
                Holders.breakdown.numberOfInstitutionsHolding = text;
        }
    });

    $('div[class="Mt(25px) Ovx(a) W(100%)"] table tbody tr').each((i, e) => {
        const Holder: HolderInterface = {
            name: $(e).find('td:nth-child(1)').text(),
            shares: $(e).find('td:nth-child(2)').text(),
            dateReported: $(e).find('td:nth-child(3)').text(),
            percentOwned: $(e).find('td:nth-child(4)').text(),
            value: $(e).find('td:nth-child(5)').text(),
        };

        Holders.topHolders.push(Holder);
    });

    return Holders;
}