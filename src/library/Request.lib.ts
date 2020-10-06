import cheerio from 'cheerio';
import { get } from 'superagent';

export async function Request(url: string) {
    const payload = await get(url).set('User-Agent', '@chriscates/yahoofinance v1.0.0');
    return cheerio.load(payload.text);
}