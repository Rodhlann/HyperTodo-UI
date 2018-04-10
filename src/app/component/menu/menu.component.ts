import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input()
  public showMenuView: boolean;
  @Input()
  public user: User;

  @Output()
  public logOutEvent = new EventEmitter();
  @Output()
  public toggleMenuView = new EventEmitter();

  goBack() {
    this.toggleMenuView.emit();
  }

  logOut() {
    console.log('bye');
  }
}
