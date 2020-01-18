import { Component, OnInit, Inject } from '@angular/core';
import { MynewserviceService } from '../mynewservice.service';
import {inject} from '@angular/core/testing';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  students:any[];
show:boolean= false;
showthen:boolean= true;
  // constructor(@Inject(MynewserviceService)myservices) {
    constructor(private myservices: MynewserviceService) {
    this.students =myservices.Student;
console.log(myservices);


   }
 
   lists = [
    {Ecode:'001',Name:'Manish' },
    {Ecode:'002',Name:'Prince' },
    {Ecode:'001',Name:'Mohit' },
    {Ecode:'001',Name:'Vikas' },
    
  ];

  Countrydetails:any[]=[
{'Country':'India', 
'People':[
{'Name':'Manish'},
{'Name':'Vikas'},
{'Name':'Traun'},
{'Name':'Neeta'}


]

},
{'Country':'US', 
'People':[
{"Name":"Indu"},
{"Name":"Rohit"},
{"Name":"shivendra"},
{"Name":"Priyanka"}


]

}
];
Country:any[]=[
{"name":"zyx",
"Country":"US"
},
{"name":"abc",
"Country":"india"
},

{"name":"bcd",
"Country":"london"
},

];
getcolor(Country){

  switch(Country){
    case  'india':
    return 'green';

    case 'london':
    return 'red';

    case 'US':
    return 'blue'

  }
}

  ngOnInit() {
  }

}
