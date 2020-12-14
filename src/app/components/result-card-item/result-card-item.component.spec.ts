import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCardItemComponent } from './result-card-item.component';

describe('ResultCardItemComponent', () => {
  let component: ResultCardItemComponent;
  let fixture: ComponentFixture<ResultCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultCardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
