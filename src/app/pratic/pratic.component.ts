import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratic',
  templateUrl: './pratic.component.html',
  styleUrls: ['./pratic.component.css']
})
export class PraticComponent implements OnInit {

  constructor() { }

imageurl = '../assets/image/personal.jpg'
isDisable = false;
status:boolean = true;
minus = true;
count:number=0;
hello:string ="Hello";
checked(valid){
  this.status =valid;
}
Plus(){
  this.count++;
  this.count === 10 ? this.isDisable = true : this.isDisable = false;
  
   
  this.count === 0 ? this.minus = true : this.minus = false;
   }
   Minus(){
    this.count--;
    this.count === 0 ? this.minus = true : this.minus = false;
    this.count === 10 ? this.isDisable = true : this.isDisable = false;
     }

   reset(){
    this.count === 0 ? this.minus = true : this.minus = false;
    this.count === 10 ? this.isDisable = true : this.isDisable = false;
   
    this.count=0;
    this.isDisable = true;
   }
  ngOnInit() {}

}
