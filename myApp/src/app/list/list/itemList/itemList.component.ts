import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-itemList',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() productsList: {}[];
  @Output() changeProgress = new EventEmitter<number>();
  @Output() removeProduct = new EventEmitter<number>();
    
  constructor() { }

  ngOnInit() {
    
  }

  onChangeProg(index) {
    this.changeProgress.emit(index);
  }

  onRemoveProd(index) {
    this.removeProduct.emit(index);
  }

  onProgressDone(item: {progrListProducts:string}) {
    return item.progrListProducts  === 'Done' ? true :false;
  }
  
}
