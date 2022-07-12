import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetLogger } from './net-logger';
import { HttpLogger } from './http-logger.service';



@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetLogger,
      multi: true
    },
    HttpLogger
  ]
})
export class NetworkLoggerModule { }
