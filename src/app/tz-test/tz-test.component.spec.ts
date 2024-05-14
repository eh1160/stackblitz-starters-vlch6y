import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzTestComponent } from './tz-test.component';

describe('TzTestComponent', () => {
  let component: TzTestComponent;
  let fixture: ComponentFixture<TzTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TzTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TzTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
