import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userInfo:boolean=false
  hide_menu:boolean=true
  @Output() hiddenMenu: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  avatarClick(){
    this.userInfo=!this.userInfo
  }
  hideMenu(){
    this.hide_menu=!this.hide_menu
    console.log(this.hide_menu)
    this.hiddenMenu.emit(this.hide_menu)
  }
}
