import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiesService } from '../common/utilities.service';
import { Location } from "@angular/common";
enum seatTypeEnum {
  'Open Seat' = 1,
  'Block Seat' = 2


}
@Component({
  selector: 'app-page-builder',
  templateUrl: './create-venue.component.html',
  styleUrls: ['./create-venue.component.scss']
})
export class CreateVenueComponent implements OnInit {
  seatTypeEnum: seatTypeEnum
  public element: any = [];
  seatType = [
    { id: 1, name: 'Open Seat' },
    { id: 2, name: 'Block Seat' }
  ]
  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private utilitiesService: UtilitiesService,
    private location:Location
    ) {
  }
  public ngOnInit() {
    this.formInit()
    this.addHtmlElement()
  }
  back(){
    this.location.back()
  }
  formInit() {
    this.form = this.fb.group({
      venue_name: ['', Validators.required],
      hall_name: '',
      hall_capacity: '0',
      seat_type: 'Block Seat',
      venue_list: this.fb.array([])
    })
  }
  addHtmlElement() {
    this.form.patchValue({
      hall_name: `Hall ${this.element.length + 1}`,
      hall_capacity: '0',
      seat_type: 'Block Seat',
    })
    let element = {
      hall_name: `Hall ${this.element.length + 1}`,
      hall_capacity: 0,
      edit: true,
      seat_type: 'Block Seat'
    }
    this.element.push(element)

  }
  editHall(data, index_data, index) {
    console.log(index_data)
    this.form.patchValue({
      hall_name: index_data.hall_name,
      hall_capacity: index_data.hall_capacity,
      seat_type: index_data.seat_type
    })
    data[index].edit = true
  }
  deleteHall(data, index_data, index) {
    data.splice(index, 1)
  }
  saveHall(data, index_data, index) {
    let form = this.form.value
    data[index].edit = false
    data[index].hall_capacity = form.hall_capacity
    data[index].hall_name = form.hall_name
    data[index].seat_type = form.seat_type
  }
  save() {
    let venueList = this.form.controls['veneu_list'] as FormArray;
    console.log(venueList)
    let form = this.form.value
    if (!form.venue_name) {
      this.utilitiesService.errorMessage('Venue name is required')
    }
    form.venue_list = [...this.element]
    const reqBody = {
      venue_name: form.venue_name,
      venue_list: form.venue_list
    }
    reqBody.venue_list.map(ele=>{
      return ele.edit=false
    })
    console.log(form)
    if (this.form.valid) {
      localStorage.setItem('HotelDetail', JSON.stringify(reqBody))
      this.utilitiesService.successMessage('Saved successfully')
      this.location.back()
    }
  }
}