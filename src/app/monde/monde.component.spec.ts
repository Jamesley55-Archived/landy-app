import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MondeComponent } from './monde.component';

describe('MondeComponent', () => {
  let component: MondeComponent;
  let fixture: ComponentFixture<MondeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MondeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
