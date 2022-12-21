import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-venue',
  templateUrl: './view-venue.component.html',
  styleUrls: ['./view-venue.component.scss']
})
export class ViewVenueComponent implements OnInit {
  element=[]
  data
  constructor(
    private location: Location,
    private route:Router

    ) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    let data=JSON.parse(localStorage.getItem('HotelDetail'))
    this.data=data
    this.element=[...data.venue_list]
    console.log(this.element)
  }
  back(){
    this.location.back()
  }
  hallClick(index_data){
    console.log(index_data)
    if(index_data.seat_type==="Block Seat"){
      this.route.navigate(['/seat/block-seat'])
    }
    if(index_data.seat_type==="Open Seat"){
      this.route.navigate(['/seat/open-seat'])
    }
  }

}
