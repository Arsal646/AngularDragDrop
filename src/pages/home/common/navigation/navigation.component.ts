import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  userInfo:boolean=false
  navExpand={
    item1:false,
    item2:false,
    item3:false
  }
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  navItemClick(item?){
    console.log(item)
    if(item){
      this.navExpand[item]=!this.navExpand[item]
    }
    console.log(this.navExpand)

  }
  navigate(url){
    this.router.navigate([url])
  }

}
