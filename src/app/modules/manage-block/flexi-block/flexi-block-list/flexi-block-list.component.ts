import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { MatDialog } from '@angular/material';
import { CreateFlexiBlockComponent } from '../create-flexi-block/create-flexi-block.component';
import { UtilitiesService } from 'src/pages/home/common/utilities.service';
import { blocks } from 'src/pages/home/common/open-seat-data';
@Component({
  selector: 'app-flexi-block-list',
  templateUrl: './flexi-block-list.component.html',
  styleUrls: ['./flexi-block-list.component.scss']
})
export class FlexiBlockListComponent implements OnInit {
  blocks=blocks
  displayedColumns: string[] = ['name'];
  dataSource = []
  constructor(
    private location: Location,
    private dialog:MatDialog,
    private utilitiesService:UtilitiesService
  ) { }

  ngOnInit(): void {
    this.getflexiBlock()
  }
  getflexiBlock(){
    let flexiBlock
    if(localStorage.getItem('flexiBlock')){
      flexiBlock=JSON.parse(localStorage.getItem('flexiBlock'))
    }
    console.log(flexiBlock)
    if(flexiBlock?.length>blocks.length){
      this.dataSource=[...flexiBlock]
    }
    else{
      this.dataSource=blocks
    }
  }
  addFlexiBlock() {
    const dialogRef=this.dialog.open(CreateFlexiBlockComponent,
      {
        width:'auto',
        height:'auto'
      })

      dialogRef.afterClosed().subscribe(res=>{
        if(res){
          res.id=this.dataSource.length+1
          this.dataSource.push(res)
          this.dataSource=[...this.dataSource]
          localStorage.setItem('flexiBlock',JSON.stringify(this.dataSource))
          this.utilitiesService.successMessage("Block created successfully")
        }
      })

  }
  rowClick() {

  }
  back() {
    this.location.back()
  }

}
