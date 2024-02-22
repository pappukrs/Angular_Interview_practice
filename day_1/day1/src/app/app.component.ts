import { Component } from "@angular/core";

@Component({
  selector:'app-root',
  template:'<h1>{{title}}</h1>',
  styleUrl:'./app.component.scss',
  standalone:true
})

export class AppComponent{
  title:string = "Hello Monica Murugan";

  content:string = "Thanks for Giving those feelings!"
}