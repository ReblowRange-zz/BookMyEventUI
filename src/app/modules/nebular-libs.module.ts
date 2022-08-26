import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbInputModule, NbButtonModule, NbIconModule, NbThemeModule, NbLayoutModule, NbSelectModule } from '@nebular/theme';



@NgModule({
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  exports: [
    NbInputModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbThemeModule,
    NbLayoutModule,
    NbSelectModule,
  ]
})
export class NebularLibsModule { }
