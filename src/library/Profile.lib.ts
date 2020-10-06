import { Request } from './Request.lib';

export interface ExecutiveInterface {
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
}

export async function GetProfile(symbol: string): Promise<ProfileInterface> {
    const Profile: ProfileInterface = {
        street: '',
        city: '',
        country: '',
        number: '',
        website: '',
        sector: '',
        industry: '',
        employees: '',
        executives: [],
    }

    const $ = await Request(`https://finance.yahoo.com/quote/${symbol}/profile`);

    $("div.asset-profile-container p").each((i, e) => {
        if (i === 0) {
            const html = $(e).html();
            html.split('-->').forEach((item, ii) => {
                const text = item.split('<!--')[0];
                if (text.indexOf('<br') === -1) {
                    switch(ii) {
                        case 0:
                            Profile.street = text;
                        case 1:
                            Profile.city = text;
                        case 2:
                            Profile.country = text;
                    }
                }                
            });

            $(e).find('a').each((ii, ee) => {
                const text = $(ee).text();
                switch(ii) {
                    case 0:
                        Profile.number = text;
                    case 1:
                        Profile.website = text;
                }
            })
        } else {
            $(e).find('span:nth-of-type(even)').each((ii, ee) => {
                const text = $(ee).text();
                switch(ii) {
                    case 0:
                        Profile.sector = text;
                    case 1:
                        Profile.industry = text;
                    case 2:
                        Profile.employees = text;
                }
            });
        }
    });


    $('section.quote-subsection table tbody tr').each((i, e) => {
        const Executive: ExecutiveInterface = {
            name: '',
            title: '',
            pay: '',
            exercised: '',
            born: '',
        };

        $(e).find('td').each((ii, ee) => {
            const text = $(ee).text();
            switch(ii) {
                case 0:
                    Executive.name = text;
                case 1:
                    Executive.title = text;
                case 2:
                    Executive.pay = text;
                case 3:
                    Executive.exercised = text;
                case 4:
                    Executive.born = text;
            }
        });

        Profile.executives.push(Executive);
    });

    return Profile;
} 