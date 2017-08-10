/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { IonicApp, IonicModule, NavController, Nav, DeepLinker } from 'ionic-angular';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { mockNavController, mockDeepLinker, mockMenu } from 'ionic-angular/util/mock-providers';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [IonicModule.forRoot(AppComponent)]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
