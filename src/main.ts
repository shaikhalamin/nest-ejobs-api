import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       brokers: ['broker:9092'],
  //     },
  //     consumer: {
  //       groupId: 'e-jobs-consumer-group',
  //     },
  //   },
  // });

  // await app.startAllMicroservices();

  await app.listen(3000, () => console.log('Server started at port 3000'));
}
bootstrap();
