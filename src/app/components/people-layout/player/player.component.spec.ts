import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerComponent } from './player.component';
import { MaterialModule } from 'src/app/material.module';

describe('PlayerComponent', () => {
    let fixture: ComponentFixture<PlayerComponent>;
    let component: PlayerComponent;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            HttpClientModule,
            NoopAnimationsModule
        ],
        declarations: [
            PlayerComponent
        ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
