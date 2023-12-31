import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentModule } from './agent/agent.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AgentModule, TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345',
    database: 'Tourism_Management_System',
    autoLoadEntities: true,
    synchronize: true,
    } ), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
