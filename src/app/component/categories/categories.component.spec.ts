import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { FormsModule } from '@angular/forms';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CategoriesComponent ]
    })
    .compileComponents();
  }));

  const CATEGORIES = ['groceries'];
  const LOCAL_CATEGORY = 'work';

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    component.categories = CATEGORIES;
    component.selectedCategory = '';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new category', () => {
    component.addCategory();

    const nativeElement = fixture.nativeElement;

    const addCategoryButton = nativeElement.querySelector('.add-button');
    addCategoryButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.editing).toBe(true);
  });

  it('should save a new category', () => {
    component.addCategory();
    spyOn(component.createNewCategory, 'emit');

    const nativeElement = fixture.nativeElement;

    const addCategoryButton = nativeElement.querySelector('.add-button');
    addCategoryButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const newCategoryInput = nativeElement.querySelector('.todo-input');
    newCategoryInput.value = LOCAL_CATEGORY;
    newCategoryInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const saveCategoryButton = nativeElement.querySelector('.todo-action-confirm');
    saveCategoryButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.editing).toBe(false);
    expect(component.createNewCategory.emit).toHaveBeenCalledWith(LOCAL_CATEGORY);
  });

  it('should not save a new category due to no user input', () => {
    component.addCategory();
    spyOn(component.createNewCategory, 'emit');

    const nativeElement = fixture.nativeElement;

    const addCategoryButton = nativeElement.querySelector('.add-button');
    addCategoryButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const saveCategoryButton = nativeElement.querySelector('.todo-action-confirm');
    saveCategoryButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.editing).toBe(false);
    expect(component.createNewCategory.emit).not.toHaveBeenCalledWith(LOCAL_CATEGORY);
  });

  it('should select a category', () => {
    component.clickCategory(CATEGORIES[0]);
    spyOn(component.selectCategory, 'emit');

    const nativeElement = fixture.nativeElement;

    const categoryButton = nativeElement.querySelector('.secondary-item');
    categoryButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.selectCategory.emit).toHaveBeenCalledWith(CATEGORIES[0]);
  });

  it('should return to main view', () => {
    component.goBack();
    spyOn(component.toggleCategoriesView, 'emit');

    const nativeElement = fixture.nativeElement;

    const backButton = nativeElement.querySelector('.categories-back');
    backButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.toggleCategoriesView.emit).toHaveBeenCalled();
  });
});
