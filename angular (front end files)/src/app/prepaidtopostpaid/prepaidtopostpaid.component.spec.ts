import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidtopostpaidComponent } from './prepaidtopostpaid.component';

describe('PrepaidtopostpaidComponent', () => {
  let component: PrepaidtopostpaidComponent;
  let fixture: ComponentFixture<PrepaidtopostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepaidtopostpaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidtopostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
