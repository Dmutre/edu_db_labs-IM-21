import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('DB PRACTICE')
    .setDescription('Here is decumentation of api, that communicate with mysql DB')
    .setVersion('0.1')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT);
  console.log(`Server started on ${process.env.PORT}`);
}
bootstrap();
