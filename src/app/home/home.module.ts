import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HomeComponent } from '../home/components/home/home.component';
import { AboutComponent } from '../home/components/about/about.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [IonicModule],
  entryComponents: [HomeComponent, AboutComponent]
})
export class HomeModule {

}
