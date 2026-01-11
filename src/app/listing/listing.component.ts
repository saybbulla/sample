import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  customersdata:any;
  constructor(private customerService:CustomerService){
    this.customerService.getCustomers().subscribe(data=>{
    this.customersdata=data
    console.log(this.customersdata);
  });
  
}
deletecustomer(id:any){
  if(confirm("Are you sure to delete this record?")){
  this.customerService.removeCustomer(id).subscribe(result=>{
    console.log(result);

  })
}
}
  
}
