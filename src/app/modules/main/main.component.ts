import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  show_menu:boolean=true

  constructor() { }

  ngOnInit(): void {
  }
  hiddenMenu(e){
    this.show_menu=!this.show_menu
  }

}
