import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
import { GitsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage,
    SharedModule,
    GitsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
