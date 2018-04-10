import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { NgModule } from '@angular/core';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  }));

  const USER: User = {
    id: 0,
    firstName: 'what',
    lastName: '???',
    email: 'what@???.com'
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.user = USER;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('toggles Menu View', () => {
    component.goBack();
    spyOn(component.toggleMenuView, 'emit');

    const nativeElement = fixture.nativeElement;
    const backButton = nativeElement.querySelector('.menu-back');

    backButton.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.toggleMenuView.emit).toHaveBeenCalled();
  });

  it('logs out of app', () => {
    component.goBack();
    spyOn(component.logOutEvent, 'emit');

    const nativeElement = fixture.nativeElement;
    const backButton = nativeElement.querySelector('#log-out');

    backButton.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.logOutEvent.emit).toHaveBeenCalled();
  });
});
