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

      //working data fetching code from ejobs

      // const jobNodeList = document.querySelectorAll(".JobList__List li .JCContent");

      // const data = Array.from(jobNodeList).map((item) => {
      //   const topContentNode = item.querySelector(".JCContentTop");
      //   let date = topContentNode?.querySelector(".JCContentTop__Date")?.innerText;

      //   const middleContentNode = item.querySelector(".JCContentMiddle");
      //   const jobTitleNode = middleContentNode?.querySelector(
      //     ".JCContentMiddle__Title"
      //   );
      //   const jobTitleAnchorNode = jobTitleNode?.querySelector("a");
      //   const jobTitle = jobTitleAnchorNode?.querySelector("span")?.innerText;

      //   const companyNameNode = middleContentNode?.querySelector("h3");
      //   const companyName = companyNameNode?.querySelector("a")?.innerText;

      //   const salary = middleContentNode?.querySelector(
      //     "div.JCContentMiddle__Info"
      //   )?.innerText;

      //   const jobLocation = middleContentNode?.querySelector(
      //     "span.JCContentMiddle__Info"
      //   )?.innerText;

      //   const logoContentNode = item.querySelector("a.JCContent__Logo");
      //   const imageLink = logoContentNode?.querySelector("img")?.src;

      //   return {
      //     job_title: jobTitle,
      //     company_name: companyName,
      //     salary: salary ? salary : "",
      //     job_location: jobLocation ? jobLocation : "",
      //     image_link: imageLink,
      //     created_date: date,
      //   };
      // });

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
