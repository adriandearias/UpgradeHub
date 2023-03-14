import { Home } from './../../models/home';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public title: String = "Pokemon Angular";
  public number: Number = 2;
  public arrayString: String[] = ["string", "array"];
  public arrayNumber: Number[] = [1,2,3,4];
  public boolean: Boolean = true;

  public object:Home = {
    name:"Pikachu",
    desc: {
      number: 25,
      image: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAWiImrZsxZDzHMKZYkQfdvLJLbyd_t-qJupNpmgskA&s",
        alt: "Pikachu"
      }
    },
    arrayNumber: [1,2,3,4,5]
  }
  // public img:Image = {
  //   src:"source",
  //   alt:"alt"
  // }

  //ngClass ngStyle
  public alive:Boolean = true;
  public red:String = "red";
  //events
  public hello = () =>{
    alert("Hello");
  }
  public getEvent = (event:any) =>{
    console.log(event);
  }
  public getInput = (event:any) =>{
    console.log(event.target.value);
  }
  public changeNgClass = () =>{
    this.alive = false;
  }

  public result: number = 0;

  public suma = () =>{
    this.result++;
  }
  public resta = () =>{
    this.result--;
  }

  //*ngIf condiciones 
  public hora:number = 21;
  public visible:boolean = true;
  public heroes: string[] = ["Spiderman", "Iron Man", "Ant-Man", "Wasp", "Hulk"]

}

