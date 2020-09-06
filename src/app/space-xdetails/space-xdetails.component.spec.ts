import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXDetailsComponent } from './space-xdetails.component';

describe('SpaceXDetailsComponent', () => {
  let component: SpaceXDetailsComponent;
  let fixture: ComponentFixture<SpaceXDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceXDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
