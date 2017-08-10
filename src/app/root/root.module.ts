import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { appRoutes } from './router';
import { HomeModule } from '../home/home.module';
import { AuthModule } from './../auth/auth.module';
import { AppComponent } from './components/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [HomeModule, AuthModule, IonicModule.forRoot(AppComponent, {mode: 'md'}, {links: appRoutes})],
  bootstrap: [IonicApp],
  entryComponents: [AppComponent],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {

}
