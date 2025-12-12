import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://artibots-id-form.onrender.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: true, // set to true only if you send cookies/auth from frontend
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Listening on ${port}`);
}
bootstrap();
