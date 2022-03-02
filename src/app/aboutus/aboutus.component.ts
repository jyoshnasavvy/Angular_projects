import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  username:any;
  password:any;
  mail:any;
  mobile:any;
  date:any;
  address:any;
  surname:any;
  description:any;

  constructor() { }
  ngOnInit(): void { 
  } 
  save(m:any){
    console.log(m.value);
    }
  
   
}
