"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_config_1 = require("./swagger.config");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const document = swagger_1.SwaggerModule.createDocument(app, swagger_config_1.swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map