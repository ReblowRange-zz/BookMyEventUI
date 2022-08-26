import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { MaterialLibsModule } from 'src/app/modules/material-libs.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    MaterialLibsModule,
    FlexLayoutModule
  ],
  exports:[CategoryComponent]
})
export class CategoryModule { }
