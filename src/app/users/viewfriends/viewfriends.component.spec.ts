import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfriendsComponent } from './viewfriends.component';

describe('ViewfriendsComponent', () => {
  let component: ViewfriendsComponent;
  let fixture: ComponentFixture<ViewfriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
