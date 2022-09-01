import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbDatepickerModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { HttpIntercepterService } from './core/http-intercepter.service';
import { MaterialLibsModule } from './modules/material-libs.module';
import { NebularLibsModule } from './modules/nebular-libs.module';
import { CategoryComponent } from './components/category/category.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    CreateEventComponent,
    CategoryComponent,
    CreateCategoryComponent
  ],
  imports: [
    BrowserModule,
    NebularLibsModule,
    BrowserAnimationsModule,
    NbDatepickerModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MaterialLibsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
