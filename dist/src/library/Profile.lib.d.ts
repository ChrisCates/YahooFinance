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
export declare function GetProfile(symbol: string): Promise<ProfileInterface>;
