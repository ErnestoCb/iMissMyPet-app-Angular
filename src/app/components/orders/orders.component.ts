import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../shared/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  appName: String = "I Miss My Pet";
  products = [
    { 
      name: "Chips",
      price: 4  
    },
    { 
      name: "Anvorguesa",
      price: 9  
    },
    { 
      name: "Pollito",
      price: 8 
    },
    { 
      name: "Pescao",
      price: 6  
    },
    { 
      name: "Postresito",
      price: 3  
    },
    { 
      name: "Salsa de Neto",
      price: 1  
    },
    { 
      name: "Cafe",
      price: 1 
    },
    { 
      name: "Cervezita",
      price: 1 
    },
    { 
      name: "Jugo de tu vieja",
      price: 1 
    }
  ]
  totalOrder = 0;
  tempOrder = [];

  constructor(public orderService: OrdersService) { }

  ngOnInit() {
  }

  onAddProduct(product){
    console.log(product);
    this.totalOrder = (this.totalOrder + product.price);
    this.tempOrder.push(product.name);
  }

  removeItemTempOrder= (order) => {
    let index = this.tempOrder.indexOf(order);
    if (index > -1) this.tempOrder.splice(index, 1);
  }

  onSubmit() {
    this.orderService.myForm.value.order = this.tempOrder;
    let data = this.orderService.myForm.value;
    data.totalOrder = this.totalOrder;
    // llamar al service
    this.orderService.createOrder(data);
    this.tempOrder = [];
    this.totalOrder = 0;
    this.orderService.myForm.reset();
  }
}
