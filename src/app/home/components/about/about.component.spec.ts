/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicApp, NavController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';

describe('AboutComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AboutComponent],
            providers: [{ provide: NavController, useValue: mockNavController }],
            imports: [BrowserModule, FormsModule, IonicModule.forRoot(AboutComponent)]
        });
        TestBed.compileComponents();
    });

    it('should create the about component', async(() => {
        const fixture = TestBed.createComponent(AboutComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
