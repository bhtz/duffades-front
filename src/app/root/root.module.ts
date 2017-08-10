import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AppComponent } from './components/app.component';
import { appRoutes } from './router';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [HomeModule, IonicModule.forRoot(AppComponent, {mode: 'md'}, {links: appRoutes})],
  bootstrap: [IonicApp],
  entryComponents: [AppComponent],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {

}
