import { Module } from '@nestjs/common'
import { ConfigModule } from '@sharedModules/config/config.module'
import { HelloWorldController } from './modules/hello.controller'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [HelloWorldController],
  providers: [],
})
export class AppModule {}
