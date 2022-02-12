import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsCircularModule } from './jobs-circular/jobs-circular.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobCategoryModule } from './common/job-category/job-category.module';
import { JobTypeModule } from './common/job-type/job-type.module';
import { JobLevelModule } from './common/job-level/job-level.module';
import { CityModule } from './common/city/city.module';
import { JobSeekerModule } from './profile/job-seeker/job-seeker.module';
import { JobPosterModule } from './profile/job-poster/job-poster.module';
import { TagsModule } from './common/tags/tags.module';
import { MailModule } from './common/mail/mail.module';
//import { KafkaModule } from './message-queue/kafka/kafka.module';
import { PuppeteerModule } from './common/crawler/puppeteer/puppeteer.module';
import { DataAcquisitionModule } from './data-acquisition/data-acquisition.module';
import { ScheduleModule } from '@nestjs/schedule';

const mySQLUrl = process.env.DB_URL
  ? process.env.DB_URL
  : 'mysql://root:12345678@localhost:3306/nest_ejobs';
const driverType = 'mysql';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: driverType,
      url: mySQLUrl,
      entities: [`${__dirname}/**/entities/*.{ts,js}`],
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
    JobsCircularModule,
    AuthModule,
    CompanyModule,
    UserModule,
    JobCategoryModule,
    JobTypeModule,
    JobLevelModule,
    CityModule,
    JobSeekerModule,
    JobPosterModule,
    TagsModule,
    MailModule,
    // KafkaModule,
    PuppeteerModule,
    DataAcquisitionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
