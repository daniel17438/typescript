import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  public name: string= 'gustavo';
  public lastName: string= 'Gutierrez';
  public age: number= 33;


  constructor() {
    let name: string ='pablo';
    let lastName: string ='Escobar';
    let age: number =44;
    console.log(name + ' '+ lastName);
   }

  ngOnInit(): void {
    const name: string = 'daniel';
    const lastName: string = 'falcon';
    const age: number = 38;
  }

}

