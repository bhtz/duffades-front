import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, FormComponent]
})
export class DuffadesModule { }
