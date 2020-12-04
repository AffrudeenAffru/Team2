import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesubreqComponent } from './changesubreq.component';

describe('ChangesubreqComponent', () => {
  let component: ChangesubreqComponent;
  let fixture: ComponentFixture<ChangesubreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesubreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesubreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
