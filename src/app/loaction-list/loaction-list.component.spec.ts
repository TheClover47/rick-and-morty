import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoactionListComponent } from './loaction-list.component';

describe('LoactionListComponent', () => {
  let component: LoactionListComponent;
  let fixture: ComponentFixture<LoactionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoactionListComponent]
    });
    fixture = TestBed.createComponent(LoactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
