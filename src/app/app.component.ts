import { Component } from '@angular/core';
import {MynewserviceService} from './mynewservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MynewserviceService]
})
export class AppComponent {
  title = 'AngularPratic';
  text:string;
  emp:any[];

constructor(private _employeservices:MynewserviceService){}
ngOnInit(){
this.emp = this._employeservices.employees();
  // this.text=this._employeservices.display();
}


}
