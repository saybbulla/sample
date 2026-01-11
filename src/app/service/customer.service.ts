import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }
  getCustomers(){
    return this.http.get(this.apiUrl)
  }
  savecustomer(data:any){
    return this.http.post(this.apiUrl,data)
  }
  loadcustomerbyid(id:any){
    return this.http.get(this.apiUrl+'/'+id)
  }
  removeCustomer(id:any){
    return this.http.delete(this.apiUrl+'/'+id)

  }
}
