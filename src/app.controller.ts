import { Controller, Get } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { KafkaService } from './message-queue/kafka/kafka.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // private readonly kafkaService: KafkaService,

  @Get()
  greetings() {
    return this.appService.getHello();
  }

  @Get('/find-all')
  findAll() {
    // this.kafkaService.emit('job.created', {
    //   job_title: 'Senior backend engineer',
    //   job_location: 'Dublin, Ireland',
    //   salary: '120k',
    // });
    // return 'This action returns all cats';
  }

  // @MessagePattern('job.created')
  // killDragon(@Payload() payload: any, @Ctx() context: KafkaContext): any {
  //   const originalMessage = context.getMessage();
  //   console.log('message received in consumer application', payload);
  //   console.log('original message', originalMessage);
  // }
}
