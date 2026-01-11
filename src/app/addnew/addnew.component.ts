import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent {
  message:string="";
  messageclass:string="";
  customerid:any;
  editdata:any;
constructor(private fb:FormBuilder,private customerService:CustomerService,private route:ActivatedRoute){
  this.customerid=this.route.snapshot.paramMap.get('id');
  console.log(this.customerid);
  if(this.customerid != null){
    this.updatecustomer(this.customerid);
  }
}

register=this.fb.group({
  userid:['',Validators.required],
  id:['',Validators.required],
  title:['',Validators.required],
  body:['',Validators.required]
})
savecustomer(){
  
if (this.register.valid){
  this.customerService.savecustomer(this.register.value).subscribe(result=>{
  if(result != null){
    console.log(result);
    this.message="Customer saved successfully";
    this.messageclass="alert alert-success";
    this.register.reset();
  }
})
}
else{
  this.message="All fields are required";
  this.messageclass="alert alert-danger";
}
}
updatecustomer(id:any){
  this.customerService.loadcustomerbyid(id).subscribe(data=>{
    this.editdata = data;

    this.register.patchValue({
      userid: this.editdata.userid,
      id: this.editdata.id,
      title: this.editdata.title,
      body: this.editdata.body
    });
  });
}


}
