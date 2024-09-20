// src/swagger.config.ts
import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Lunch Order API')
  .setDescription('API for managing daily lunch orders')
  .setVersion('1.0')
  .build();
