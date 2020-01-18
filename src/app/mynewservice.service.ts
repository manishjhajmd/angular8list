import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MynewserviceService {


  constructor() {}


  Student = [
    {class:'001',Name:'Manish' },
    {class:'002',Name:'Prince' },
    {class:'001',Name:'Mohit' },
    {class:'001',Name:'Vikas' },
    
  ];

  employees(){
    return[
    {Ecode:'001',Name:'Manish' },
    {Ecode:'002',Name:'Prince' },
    {Ecode:'001',Name:'Mohit' },
    {Ecode:'',Name:'' },  {Ecode:'',Name:'' },
    {Ecode:'001',Name:'Vikas' },
    {Ecode:'',Name:'' },
  ];
  }
  display()
  {
  
    return 'Hello manish';
 
  }
}
