import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UtilitiesService } from 'src/pages/home/common/utilities.service';

@Component({
  selector: 'app-create-flexi-block',
  templateUrl: './create-flexi-block.component.html',
  styleUrls: ['./create-flexi-block.component.scss']
})
export class CreateFlexiBlockComponent implements OnInit {
form:FormGroup
  constructor(
    public dialogRef:MatDialogRef<CreateFlexiBlockComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb:FormBuilder,
    private utilitiesService:UtilitiesService
  ) { }

  ngOnInit(): void {
    this.formInit()
  }
  formInit(){
    this.form=this.fb.group({
      name:['',Validators.required],
      backgroundColor:['',Validators.required]
    })
  }
  save(){
    if(this.form.valid){
      this.dialogRef.close(this.form.value)
    }
    else{
      this.utilitiesService.errorMessage('Invalid Form')
    }
  }
  close(){
    this.dialogRef.close()
  }

}
