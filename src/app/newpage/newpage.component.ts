import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user/users.service';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})
export class NewpageComponent  implements OnInit {
  name:string=''
  constructor(private  siva:UsersService){

  }
  ngOnInit(): void {
    this.name=this.siva.name;
  }
  save(){
    alert("Data saved successfully");
  }
  
  title='Customer Management System';

  
}
