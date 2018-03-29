import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  inputs: ['showCategoriesView', 'categories', 'selectedCategory'],
  outputs: ['toggleCategoriesView', 'createNewCategory', 'selectCategory'],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less'],
})
export class CategoriesComponent implements OnInit {
  public categories: Array<string>;
  public showCategoriesView: boolean;
  public toggleCategoriesView = new EventEmitter();
  public createNewCategory = new EventEmitter();
  public selectCategory = new EventEmitter();
  public selectedCategory: string;
  public localCategory: string;
  public editing = false;

  constructor() { }

  ngOnInit() {
  }

  addCategory() { 
    this.editing = true;
  }

  saveCategory() {
    this.editing = false;
    if(this.localCategory) {
      this.createNewCategory.next(this.localCategory);
      this.localCategory = '';
    }
  }

  clickCategory(category) { 
    this.selectCategory.next(category);
  }

  goBack() {
    this.toggleCategoriesView.next();
  }
}
