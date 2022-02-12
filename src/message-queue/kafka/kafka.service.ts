import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaService implements OnModuleInit {
  //@Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,

  async onModuleInit(): Promise<void> {
    //this.kafkaClient.subscribeToResponseOf('job.created');
    //await this.kafkaClient.connect();
  }

  public send(pattern: string, data: any) {
    //return this.kafkaClient.send({ cmd: pattern }, data);
  }

  public emit(pattern: string, data: any) {
    //return this.kafkaClient.emit(pattern, data);
  }
}
