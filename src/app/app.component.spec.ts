import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MainLayoutComponent } from './components/main-layout.component';
import { PeopleLayoutComponent } from './components/people-layout/people-layout.component';
import { PlayerComponent } from './components/people-layout/player/player.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        MainLayoutComponent,
        PeopleLayoutComponent,
        PlayerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
  it('should have correct title', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Front-End test Angular');
  }));
});
