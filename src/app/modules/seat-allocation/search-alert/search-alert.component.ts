import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Tickets_dataSource } from 'src/pages/home/common/open-seat-data';
import { UtilitiesService } from 'src/pages/home/common/utilities.service';

@Component({
  selector: 'app-search-alert',
  templateUrl: './search-alert.component.html',
  styleUrls: ['./search-alert.component.scss']
})
export class SearchAlertComponent implements OnInit {
  Tickets_dataSource = Tickets_dataSource
  form: FormGroup
  constructor(
    public dialogRef: MatDialogRef<SearchAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private utilitiesService: UtilitiesService
  ) { }

  ngOnInit(): void {
    this.formInit()
  }
  formInit() {
    this.form = this.fb.group({
      category: [''],
      age_start: [''],
      age_end: ['']
    })
    // this.form.get('age_start').valueChanges.subscribe(res=>{
    //   if(res){
    //     this.form.get('age_end').setValidators([Validators.required])
    //     this.form.controls['age_end'].updateValueAndValidity()
    //   }else{
    //     this.form.get('age_end').removeValidators
    //     this.form.controls['age_end'].updateValueAndValidity()
    //   }
    // })
    // this.form.get('age_end').valueChanges.subscribe(res=>{
    //   if(res){
    //     this.form.get('age_start').setValidators([Validators.required])
    //     this.form.controls['age_start'].updateValueAndValidity()
    //   }else{
    //     this.form.get('age_start').removeValidators
    //     this.form.controls['age_start'].updateValueAndValidity()
    //   }
    // })

  }
  save() {
    let form=this.form.value
    if(form.age_start){
      this.form.get('age_end').setValidators([Validators.required])
        this.form.controls['age_end'].updateValueAndValidity()
    }else{
      this.form.get('age_end').removeValidators
      this.form.controls['age_end'].updateValueAndValidity()
    }
    if(form.age_end){
      this.form.get('age_start').setValidators([Validators.required])
        this.form.controls['age_start'].updateValueAndValidity()
    }else{
      this.form.get('age_start').removeValidators
      this.form.controls['age_start'].updateValueAndValidity()
    }
    if (this.form.valid) {
      this.dialogRef.close(this.form.value)
    }
    else {
      this.utilitiesService.errorMessage('Invalid Form')
    }
  }
  close() {
    this.dialogRef.close()
  }

}
