import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipes',
  templateUrl: './custompipes.component.html',
  styleUrls: ['./custompipes.component.css']
})
export class CustompipesComponent implements OnInit {

  constructor() { }
  titlecase="the best titlecase pipes";
  title="pipes custiom"
  ngOnInit(): void {
  }

}
