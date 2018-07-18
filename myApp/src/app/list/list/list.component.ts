import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ToDoListComponent implements OnInit {
  title: string = 'Products List';
  progrListProducts: string = 'During';


  constructor() { }

  ngOnInit() {
  }

  productArr: {productName: string, progrListProducts:string}[] = [
    { 
      productName: 'Milk',
      progrListProducts: this.progrListProducts
    },
    {
      productName: 'Eggs',
      progrListProducts: this.progrListProducts
    },
    {
      productName: 'Meat',
      progrListProducts: this.progrListProducts
    },
    {
      productName: 'Bread',
      progrListProducts: this.progrListProducts
    },
    {
      productName: 'Cucumber',
      progrListProducts: this.progrListProducts
    },
    {
      productName: 'Carrot',
      progrListProducts: this.progrListProducts
    }
  ];

  addItem(productArr: object[], itemName: string, itemStatus: string): any {
    let newProdArr: object[] = [{
      productName: itemName,
      progrListProducts: itemStatus
    }];  
    productArr = productArr.concat(newProdArr);
    return productArr;
  }

  onChangeProgress(index: number) {
    this.productArr[index].progrListProducts = 'Done';
  }

  onAddProduct(itemName: string) {
    this.productArr = this.addItem(this.productArr, itemName, this.progrListProducts);
  }

  onRemoveProduct(index: number) {
    this.productArr.splice(index, 1);
  }


}
