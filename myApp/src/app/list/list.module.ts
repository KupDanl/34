import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './list/list.component';
import { ItemsListComponent } from './list/itemList/itemList.component';
import { AddItemComponent } from './list/form/form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ToDoListComponent
  ],
  declarations: [ToDoListComponent, ItemsListComponent, AddItemComponent]
})
export class ToDoListModule { }
