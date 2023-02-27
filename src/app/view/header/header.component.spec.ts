import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { HeaderComponent } from './header.component';
import { QueryComponent } from './../home/query/query.component';
import { HomeComponent } from '../home/home.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let route: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent, QueryComponent, HomeComponent],
      imports: [ RouterTestingModule.withRoutes(
         [
          { path: '', component: HomeComponent, pathMatch: "full" },
          { path: "consultar-veiculo", component: QueryComponent }
         ]
      )]
    })
    .compileComponents();

    location =  TestBed.get<Location>(Location)
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    route = TestBed.get<Router>(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to appear fleet control logo in page', () => {
    const compiled = fixture.nativeElement.querySelector('.navbar-brand img') as HTMLElement
    expect(compiled).toBeTruthy()
  })

  it('should redirect to init page with click in fleet control logo', waitForAsync (() => {
    const routeActive = '/'
    const compiled = fixture.nativeElement.querySelector(`.navbar-brand img`) as HTMLButtonElement
    compiled.click()
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(location.path()).toBe(routeActive)
    })
  }))

  it('should to appear vehicle option in page', () => {
    const compiled = fixture.nativeElement.querySelector(`#vehicle-nav-link`) as HTMLElement
    expect(compiled).toBeTruthy()
  })

  it('should redirect to vehicle page with click in vehicle option nav', waitForAsync(() => {
    const routeActive = '/consultar-veiculo'
    const compiled = fixture.nativeElement.querySelector(`#vehicle-nav-link`) as HTMLButtonElement
    compiled.click()
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(location.path()).toBe(routeActive)
    })
  }))

  it('should to offer an aria current in state page current', () => {
    spyOn(component, 'getClickNavbarForAriaCurrent').and.callThrough()
    component.getClickNavbarForAriaCurrent('navbar-item-2')
    expect(component.currentClickNavbar).toBe('navbar-item-2')
  })
});
