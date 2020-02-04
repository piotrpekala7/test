import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { MainLayoutComponent } from './main-layout.component';
import { PeopleLayoutComponent } from './people-layout/people-layout.component';
import { PlayerComponent } from './people-layout/player/player.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MainLayoutComponent', () => {
    let fixture: ComponentFixture<MainLayoutComponent>;
    let component: MainLayoutComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            HttpClientModule,
            NoopAnimationsModule
        ],
        declarations: [
            MainLayoutComponent,
            PeopleLayoutComponent,
            PlayerComponent
        ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have correct title', () => {
        expect(component.title).toBe('Front-End test Angular');
    });
});
