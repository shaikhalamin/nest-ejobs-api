import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PuppeteerService } from 'src/common/crawler/puppeteer/puppeteer.service';

@Injectable()
export class DataAcquisitionService {
  constructor(private readonly puppeteerService: PuppeteerService) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async fetchData() {
    try {
      console.log('Data fetching started at ', new Date().toISOString());
      const page = await this.puppeteerService.open('https://bdjobs.com/');

      const category = await page.evaluate(() => {
        return Array.from(
          document.querySelectorAll('div.functional div.col-md-4 ul li'),
        ).map((item: HTMLElement) => ({
          name: item?.innerText?.split('(')[0]?.trim(),
          url: item?.querySelector('a')?.href,
        }));
      });

      // const fetchCategory = Array.from(
      //   document.querySelectorAll('.category-list div.col-md-4 ul li'),
      // ).map((item: HTMLElement) => ({
      //   name: item.innerText.trim(),
      //   url: item.querySelector('a').href,
      // }));

      // const eachJobListNorm = Array.from(
      //   document.querySelectorAll('.norm-jobs-wrapper div.job-title-text'),
      // ).map((item: HTMLElement) => ({
      //   job: item.innerText,
      //   url: item.querySelector('a').href,
      // }));

      //Array.from(document.querySelectorAll('.norm-jobs-wrapper div.job-title-text'),).map((item: HTMLElement) => ({job: item.innerText,url: item.querySelector('a').href}));

      // const eachJobListSout = Array.from(
      //   document.querySelectorAll('.sout-jobs-wrapper div.job-title-text'),
      // ).map((item: HTMLElement) => ({
      //   job: item.innerText,
      //   url: item.querySelector('a').href,
      // }));

      console.log('category list', category);
    } catch (error) {
      console.log('error', error);
      await this.puppeteerService.close();
    } finally {
      console.log('closing the connection');
      await this.puppeteerService.close();
    }
  }
}
