/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GetByItemComponent } from './getByItem.component';

describe('GetByItemComponent', () => {
  let component: GetByItemComponent;
  let fixture: ComponentFixture<GetByItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByItemComponent ],
      imports: [ HttpClientTestingModule]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
