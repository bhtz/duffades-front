import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { IonicModule } from 'ionic-angular';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ListComponent, FormComponent],
  entryComponents: [ListComponent, FormComponent]
})
export class DuffadesModule { }
