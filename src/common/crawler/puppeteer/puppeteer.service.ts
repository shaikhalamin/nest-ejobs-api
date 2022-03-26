import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
//import * as userAgent from 'user-agents';

@Injectable()
export class PuppeteerService {
  private crawler: puppeteer.Browser;

  public async open(url: string): Promise<puppeteer.Page> {
    this.crawler = await puppeteer.launch({
      headless: true,
      executablePath: '/usr/bin/google-chrome',
      ignoreDefaultArgs: ['--disable-extensions'],

      args: [
        '--disable-gpu',
        '--disable-setuid-sandbox',
        '--no-sandbox',
        '--no-zygote',
      ],
    });
    const page = await this.crawler.newPage();
    //await page.setUserAgent(userAgent.toString());
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 0,
    });
    //await page.screenshot({ path: 'screenshot.png' });
    // await this.crawler.close();
    return page;
  }
  public async close() {
    if (this.crawler) {
      this.crawler.close();
    }
    this.crawler = undefined;
  }
}
