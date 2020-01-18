import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
CustomerTitle ="Customer Detail";
  constructor() { }
customers =[
{name: 'Manish', id: '001'},
{name: 'Vikas', id: '002'},
{name: 'Neeraj', id: '003'}


];
  ngOnInit() {
  }

  customertotal(){

   return  this.customers.length;
  }

}
