import { Module } from '@nestjs/common'
import { ConfigModule } from '@sharedModules/config/config.module'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
