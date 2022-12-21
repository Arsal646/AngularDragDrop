import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { MatDialog } from '@angular/material';
import { CreateFlexiBlockComponent } from '../create-flexi-block/create-flexi-block.component';
import { UtilitiesService } from 'src/pages/home/common/utilities.service';
const blocks = 	[
  {
    name: 'block1',
    backgroundColor: 'blue'
  },
  {
    name: 'block2',
    backgroundColor: 'yellow'
  },
  {
    name: 'block3',
    backgroundColor: 'orange'
  }
]

@Component({
  selector: 'app-flexi-block-list',
  templateUrl: './flexi-block-list.component.html',
  styleUrls: ['./flexi-block-list.component.scss']
})
export class FlexiBlockListComponent implements OnInit {
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
    const flexiBlock=JSON.parse(localStorage.getItem('flexiBlock'))
    if(flexiBlock.length){
      this.dataSource=[...flexiBlock]
    }
    else{
      this.dataSource=[...blocks]
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
