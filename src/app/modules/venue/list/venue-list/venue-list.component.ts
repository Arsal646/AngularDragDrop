import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const ELEMENT_DATA= [
  {hall_name: 'Venue 1', hall_capacity: 10, seat_type: 'Block Seat'},
  {hall_name: 'Venue 2', hall_capacity: 10, seat_type: 'Block Seat'},
  {hall_name: 'Venue 3', hall_capacity: 10, seat_type: 'Block Seat'},
  {hall_name: 'Venue 4', hall_capacity: 10, seat_type: 'Block Seat'},
  {hall_name: 'Venue 5', hall_capacity: 10, seat_type: 'Block Seat'},
  {hall_name: 'Venue 6', hall_capacity: 10, seat_type: 'Block Seat'},
  {hall_name: 'Venue 7', hall_capacity: 10, seat_type: 'Block Seat'},
  {hall_name: 'Venue 8', hall_capacity: 10, seat_type: 'Block Seat'},
  {hall_name: 'Venue 9', hall_capacity: 10, seat_type: 'Block Seat'},
  {hall_name: 'Venue 10', hall_capacity: 10, seat_type: 'Block Seat'},
];
@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.scss']
})
export class VenueListComponent implements OnInit {
  displayedColumns: string[] = ['hall_name'];
  dataSource = ELEMENT_DATA;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  rowClick(){
    this.route.navigate(['venue/view'])
  }
  addvenue(){
    this.route.navigate(['venue/create'])
  }

}
