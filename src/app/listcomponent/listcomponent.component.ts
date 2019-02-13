import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html'
})
export class ListcomponentComponent implements OnInit {
  presidents: string[] = ["Higgins","McAleese","Robinson","Hillery"];  

  presidents2: object[] =
    [{name: "Higgins", term:"2011-"},
    {name: "McAleese", term:"1997-2011"},
    {name: "Robinson", term:"1990-1997"},
    {name: "Hillery", term:"1976-1990"},
    {name: "O Dalaigh", term:"1974-1976"}];

  constructor() { }
  
    
  ngOnInit() {
    this.presidents.push("Daniel");
  }


}
