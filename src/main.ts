import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  // 1. Gelen verileri otomatik doğrulama (Validation)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO'da tanımlı olmayan fazlalık verileri otomatik siler
      transform: true, // String gelen sayıları otomatik number'a çevirir
    }),
  );

  // 2. Swagger (API Dokümantasyonu) Ayarları
  const config = new DocumentBuilder()
    .setTitle('Restful API Project')
    .setDescription('Optimization & Management API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  logger.log(`Application is running on: http://localhost:${PORT}`);
  logger.log(`Swagger is running on:     http://localhost:${PORT}/api`);
}
bootstrap();
