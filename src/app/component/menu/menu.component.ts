import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-menu',
  inputs: ['showMenuView', 'user'],
  outputs: ['logOutEvent', 'toggleMenuView'],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public showMenuView: boolean;
  public user: User;
  public logOutEvent = new EventEmitter();
  public toggleMenuView = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.toggleMenuView.next();
  }

  logOut() {
    console.log('bye');
  }
}
