import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './components/category/category.module';
import { MaterialLibsModule } from './modules/material-libs.module';
import { NebularLibsModule } from './modules/nebular-libs.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NebularLibsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CategoryModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialLibsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
