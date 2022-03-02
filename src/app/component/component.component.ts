import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
  name:any;
  college:any;
  age:any;
  // male:any;
  // female:any;
  gender:any;
  constructor() { }

  ngOnInit(): void {
  }
  Save(m:any){
    console.log(m.value)
  }
}
