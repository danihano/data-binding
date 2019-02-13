import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter:number = 0;
  hide:boolean =true;

  onPress(){
    this.counter++;
  }
  ondblPress(){
    console.log("image clicked");
    if(this.hide == true)
    {
      this.hide = false;
    }
    else
    {
      this.hide = true;
    }
  }
}
