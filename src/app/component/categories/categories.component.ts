import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent implements OnInit {
  public editing = false;
  public localCategory: string;

  @Input()
  categories: Array<string>;
  @Input()
  public showCategoriesView: boolean;
  @Input()
  public selectedCategory: string;

  @Output()
  toggleCategoriesView = new EventEmitter();
  @Output()
  createNewCategory = new EventEmitter();
  @Output()
  public selectCategory = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addCategory() {
    this.editing = true;
  }

  saveCategory() {
    this.editing = false;
    if (this.localCategory) {
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
