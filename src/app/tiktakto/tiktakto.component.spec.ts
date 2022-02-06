import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiktaktoComponent } from './tiktakto.component';

describe('TiktaktoComponent', () => {
  let component: TiktaktoComponent;
  let fixture: ComponentFixture<TiktaktoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiktaktoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiktaktoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
