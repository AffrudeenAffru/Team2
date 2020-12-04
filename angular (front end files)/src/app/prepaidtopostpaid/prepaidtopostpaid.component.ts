import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prepaidtopostpaid } from '../prepaidtopostpaid';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-prepaidtopostpaid',
  templateUrl: './prepaidtopostpaid.component.html',
  styleUrls: ['./prepaidtopostpaid.component.css']
})
export class PrepaidtopostpaidComponent implements OnInit {
  prepaidtopostpaid =new Prepaidtopostpaid();
  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }
  reguest(){

    this._service.pretopost(this.prepaidtopostpaid).subscribe(
      data => {
        
        this._router.navigate(['/userlogin'])
      },
      error => {
        console.log("Error occured");
        
      }
     )
   }







  gotorecharge(){
    this._router.navigate(['/rechargeplans'])
  }
  gotocontactus(){
    this._router.navigate(['/contactuss'])
  }
  gotomaster(){
    this._router.navigate(['/masterlogin'])
  }

  gotoplans(){
    this._router.navigate(['/rechargeplans'])
  }

  gotobill(){
    this._router.navigate(['/paymentportal'])
  }
  contactus(){
    this._router.navigate(['/contactuss'])
  }
  faq(){
    this._router.navigate(['/faq'])
  }
  gotoJoffers(){
    this._router.navigate(['/joffers'])
  }
  gotoJtitle(){
    this._router.navigate(['/jtitle'])
 }


  mainpage(){
    this._router.navigate(['/userlogin'])
  }
 //pretopost
 gotopretopost(){
  this._router.navigate(['/prepaidtopostpaid'])
}
 

  reg(){
    this._router.navigate(['/subregistration'])
  }
  log(){
    this._router.navigate(['/sublogin'])
  }
}
