import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { PeopleLayoutComponent } from './people-layout.component';
import { PlayerComponent } from './player/player.component';
import { PeopleService } from '../../services/people-service';
import { of } from 'rxjs';
import { People } from '../../models/people';

describe('PeopleLayoutComponent', () => {
    let fixture: ComponentFixture<PeopleLayoutComponent>;
    let component: PeopleLayoutComponent;
    let peopleService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            HttpClientModule,
            NoopAnimationsModule
        ],
        declarations: [
            PeopleLayoutComponent,
            PlayerComponent
        ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PeopleLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        peopleService = TestBed.get(PeopleService);
        spyOn(peopleService, 'getSinglePerson').and.returnValue(of());
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('generated number should be smaller than number of people', () => {
        component.numberOfPeople = 20;
        expect(component.getRandomNumber(component.numberOfPeople)).toBeLessThanOrEqual(20);
    });

    it('should call service when find clicked', () => {
        component.find('left');
        expect(peopleService.getSinglePerson).toHaveBeenCalled();
    });

    it('should set card visibility to false in new game', () => {
        component.detailsVisibility = true;
        component.playAgain();
        expect(component.detailsVisibility).toBe(false);
    });

    it('should compare by mass value', () => {
        component.leftPlayer = {mass: '20'} as People;
        component.rightPlayer = {mass: '100'} as People;
        component.compare();
        expect(component.leftWins).toBe(0);
        expect(component.rightWins).toBe(1);
    });

    it('should change card visibility after comparison', () => {
        component.leftPlayer = {mass: '20'} as People;
        component.rightPlayer = {mass: '100'} as People;
        component.compare();
        expect(component.detailsVisibility).toBe(true);
    });
});
