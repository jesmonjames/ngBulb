import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jbulb',
  templateUrl: './jbulb.component.html',
  styleUrls: ['./jbulb.component.css']
})
export class JbulbComponent implements OnInit {

  constructor() { }
  display=false;
 
  clicked=function()
  {
    this.display=!this.display;
  }
  ngOnInit(): void {
  }

}
