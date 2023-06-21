import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationPanelComponent } from './side-navigation-panel.component';

describe('SideNavigationPanelComponent', () => {
  let component: SideNavigationPanelComponent;
  let fixture: ComponentFixture<SideNavigationPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavigationPanelComponent]
    });
    fixture = TestBed.createComponent(SideNavigationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
