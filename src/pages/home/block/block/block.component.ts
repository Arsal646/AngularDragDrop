import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  Seats:any=[]
  form:FormGroup
  addForm:FormGroup
  isAddBlock:boolean=true

  constructor(
    @Optional()public dialogRef: MatDialogRef<BlockComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder
  ) {
    console.log(data)
    this.Seats=data?.Seats
   }

  ngOnInit(): void {
    this. formInit()
  }
  formInit(){
    this.form=this.fb.group({
      block_name:this.data?.block_name ?  this.data.block_name:'',
      block_limit:[this.data?.block_limit ? this.data.block_limit:'']
    })
    this.addForm=this.fb.group({
      block_name:['',Validators.required],
      block_limit:['',Validators.required],
      row:['',Validators.required]

    })
  }
  save(){
    this.dialogRef.close()
  }

  close(){
    this.dialogRef.close()
  }
  addBlock(){
    this.isAddBlock=false
  }

}
