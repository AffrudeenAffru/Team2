import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Prepaidtopostpaid } from '../prepaidtopostpaid';

@Component({
  selector: 'app-changesubreq',
  templateUrl: './changesubreq.component.html',
  styleUrls: ['./changesubreq.component.css']
})
export class ChangesubreqComponent implements OnInit {
  _prepaidtopostpaid: Prepaidtopostpaid[]; 
  constructor(private _route:Router, private _service:NgserviceService , private _activatedRoute:ActivatedRoute) { }


  
  ngOnInit(): void {
    this._service.fetchsubreq().subscribe(
      data => {this._prepaidtopostpaid=data,
      
      console.log("response recieved",data);
      },
      error => console.log("response not recieved")

    );
  }}
  