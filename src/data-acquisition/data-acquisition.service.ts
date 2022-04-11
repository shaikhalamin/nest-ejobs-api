import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PuppeteerService } from 'src/common/crawler/puppeteer/puppeteer.service';

@Injectable()
export class DataAcquisitionService {
  constructor(private readonly puppeteerService: PuppeteerService) {}

  // @Cron(CronExpression.EVERY_MINUTE)
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

      console.log('category list', category.length, category);
    } catch (error) {
      console.log('error', error);
      await this.puppeteerService.close();
    } finally {
      console.log('closing the connection');
      await this.puppeteerService.close();
    }
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  async fetchJobCategory() {
    try {
      console.log('Data fetching started at ', new Date().toISOString());
      const page = await this.puppeteerService.open(
        'https://www.ejobs.ro/en/jobs/pagina2',
      );

      const category = await page.evaluate(() => {
        return Array.from(
          document.querySelectorAll('.JobList__List li .JCContent'),
        ).map((item) => {
          const topContentNode = item.querySelector('.JCContentTop');
          const dateElement = topContentNode?.querySelector(
            '.JCContentTop__Date',
          );
          let date = '';
          if (dateElement instanceof HTMLElement) {
            date = dateElement.innerText;
          }

          const middleContentNode = item.querySelector('.JCContentMiddle');
          const jobTitleNode = middleContentNode?.querySelector(
            '.JCContentMiddle__Title',
          );
          const jobTitleAnchorNode = jobTitleNode?.querySelector('a');
          const jobTitle = jobTitleAnchorNode?.querySelector('span')?.innerText;
          const jobDetailsLink = jobTitleAnchorNode?.getAttribute('href');

          const companyNameNode = middleContentNode?.querySelector('h3');
          const companyName = companyNameNode?.querySelector('a')?.innerText;

          const salaryElement = middleContentNode?.querySelector(
            'div.JCContentMiddle__Info',
          );

          const salary =
            salaryElement instanceof HTMLElement ? salaryElement.innerText : '';

          const jobLocationElement = middleContentNode?.querySelector(
            'span.JCContentMiddle__Info',
          );

          const jobLocation =
            jobLocationElement instanceof HTMLElement
              ? jobLocationElement.innerText
              : '';

          const logoContentNode = item.querySelector('a.JCContent__Logo');
          const imageLink = logoContentNode?.querySelector('img')?.src;

          return {
            job_title: jobTitle,
            company_name: companyName,
            salary: salary ? salary : '',
            job_location: jobLocation ? jobLocation : '',
            image_link: imageLink,
            job_details_link: `https://www.ejobs.ro${jobDetailsLink}`,
            created_date: date,
          };
        });
      });

      console.log('category list', category);
    } catch (error) {
      console.log('error', error);
      await this.puppeteerService.close();
    } finally {
      console.log('closing the connection');
      await this.puppeteerService.close();
    }
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  async fetchJobDetails() {
    try {
      console.log('Data fetching started at ', new Date().toISOString());
      const page = await this.puppeteerService.open(
        'https://www.ejobs.ro/en/user/jobs/workforce-management-analyst/1522127',
      );

      const jobDetails = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.JDDetails')).map(
          (item: HTMLElement) => {
            const JDCardNode = item.querySelector('.JDCard');

            const JDCardContentNodeList = JDCardNode.querySelector(
              '.JDCard__Content--Expandable',
            );

            const JDHeaderNode =
              JDCardContentNodeList.querySelector('.JDHeader');

            const JDHeaderInfosNode =
              JDHeaderNode.querySelector('.JDHeaderInfos');

            const JDHeaderInfosTitleNode = JDHeaderInfosNode.querySelector(
              '.JDHeaderInfos__Title',
            );

            const jobTitle =
              JDHeaderInfosTitleNode instanceof HTMLElement
                ? JDHeaderInfosTitleNode.innerText
                : '';

            const JDHeaderInfosPositions = JDHeaderInfosNode.querySelector(
              '.JDHeaderInfos__Positions',
            );

            const numberOfPositionsContent =
              JDHeaderInfosPositions instanceof HTMLElement
                ? JDHeaderInfosPositions.innerText
                : '';

            const numberOfPosition = numberOfPositionsContent
              .split('-')[1]
              .trim()
              .split(' ')[0]
              .trim();

            const JDSummariesNode = JDCardContentNodeList.querySelectorAll(
              '.JDSummaries .JDSummary',
            );

            const jobDetailsSummary = Array.from(JDSummariesNode).map(
              (item: HTMLElement) => {
                const keyNameNode = item.querySelector('span');
                const valueNode = item.querySelector('.JDSummary__Value');

                const keyName =
                  keyNameNode instanceof HTMLElement
                    ? keyNameNode.innerText
                        .replace(/\r?\n?/g, '')
                        .split(' ')
                        .join('')
                    : '';
                const value =
                  valueNode instanceof HTMLElement
                    ? valueNode.innerText
                        .replace(/\r?\n?/g, '')
                        .split(' ')
                        .join('')
                    : '';

                return {
                  key: keyName,
                  value: value,
                };
              },
            );

            return {
              job_title: jobTitle,
              no_of_position: numberOfPosition ? numberOfPosition : 0,
              job_details: JSON.stringify(jobDetailsSummary),
            };
          },
        );
      });

      console.log(jobDetails);
    } catch (error) {
      console.log('error', error);
      await this.puppeteerService.close();
    }
  }
}
