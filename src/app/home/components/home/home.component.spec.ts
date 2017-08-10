/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { IonicModule, NavController } from 'ionic-angular';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            providers: [{ provide: NavController, useValue: mockNavController }],
            imports: [IonicModule.forRoot(HomeComponent)]
        });
        TestBed.compileComponents();
    });

    it('should create the home component', async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
