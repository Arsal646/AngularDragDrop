import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDragStart, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { blocks, Seats, Tickets_dataSource } from 'src/pages/home/common/open-seat-data';
import { Location } from "@angular/common";
import { debounceTime, reduce, timeInterval, timeout } from 'rxjs';
import { UtilitiesService } from 'src/pages/home/common/utilities.service';
import { Router } from '@angular/router';
import { CreateFlexiBlockComponent } from 'src/app/modules/manage-block/flexi-block/create-flexi-block/create-flexi-block.component';
import { MatDialog, MatSliderChange } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchAlertComponent } from '../../search-alert/search-alert.component';
export enum filterBy {
	Category = 'category',
	Name = 'name',
	Age = 'age'
}
@Component({
	selector: 'app-open-seat',
	templateUrl: './open-seat.component.html',
	styleUrls: ['./open-seat.component.scss']
})
export class OpenSeatComponent implements OnInit {
	FormKeys = []
	form: FormGroup
	blocks = blocks
	flexi_dataSource = []
	Seats: any = Seats
	Tickets_dataSource: any = Tickets_dataSource
	dropSeatRowIndex: any
	dropSeatIndex: any
	AllSelected: any
	checkedSeatList: any = []
	seatEditMode: boolean = false
	selectedBlock: any = null
	Ticket_fullData: any = []
	constructor(
		private location: Location,
		private utilitiesService: UtilitiesService,
		private router: Router,
		private dialog: MatDialog,
		private fb: FormBuilder,
	) {
	}
	ngOnInit(): void {
		this.getTickets()
		this.getSeats()
		//this.SelectPlaceHolder = this.Tickets_dataSource[this.Categoryindex].name
		this.getflexiBlock()
		this.formInit()
	}
	formInit() {
		this.form = this.fb.group({
			name: '',
			category: '',
			age_start: '',
			age_end: '',
			age: ''
		});
		let form = this.form.value
		let keys = Object.keys(form)
		// Replacing age_start and age_end with age
		keys.splice(2, 2)
		this.form.valueChanges.subscribe(res => {
			console.log(res)
			for (let key of keys) {
				console.log(key)
				if (res[key] !== '') {
					this.FormKeys.push(key)
				}
				else {
					console.log(key)
					let index = this.FormKeys.indexOf(key)
					if (index !== -1) {
						this.FormKeys.splice(index, 1)
					}
				}
			}
			this.FormKeys = [... new Set(this.FormKeys)]
			console.log(this.FormKeys)
		})
	}
	getflexiBlock() {
		const flexiBlock = JSON.parse(localStorage.getItem('flexiBlock'))
		if (flexiBlock?.length) {
			this.flexi_dataSource = [...flexiBlock]
		}
		else {
			this.flexi_dataSource = [...this.blocks]
		}
	}
	back() {
		this.location.back()
	}
	selectAll(e: any) {
		if (e.checked) {
			this.AllSelected = e.checked
		} else {
			this.AllSelected = e.checked
		}
	}
	// categorySelection(e: any) {
	// 	this.category_value = e
	// 	this.ticketFilter(this.category_value, filterBy.Category)
	// }
	getSeats() {
		this.Seats.forEach((ele: any, index: any) => {
			ele.seat = []
			if (ele.numberOfSeat) {
				for (let i = 1; i <= ele.numberOfSeat; i++) {
					const seat = {
						id: `R${index + 1}S${i}`,
						name: `R${index + 1}S${i}`,
						row: index + 1,
						col: i,
						isChecked: false,
						block_id: 0,
						ticket: [
						]
					}
					ele.seat.push(seat)
				}
			}
			////console.log(ele)
		})
		let getSeatFromLocalStorage = []
		if (localStorage.getItem('blockSeat')) {
			getSeatFromLocalStorage = JSON.parse(localStorage?.getItem('blockSeat'))
		}
		////console.log(getSeatFromLocalStorage)
		if (getSeatFromLocalStorage.length) {
			this.checkedSeatList = getSeatFromLocalStorage
			this.Seats.forEach(ele => {
				getSeatFromLocalStorage.forEach(seat => {
					const index = ele.seat.findIndex(item => item.name === seat.name)
					if (index !== -1) {
						ele.seat[index] = seat
					}
				})
			})
		}
	}
	getTickets() {
		this.Tickets_dataSource.forEach((ele: any, index: any) => {
			if (ele.numberOfTicket) {
				for (let i = 1; i <= ele.numberOfTicket; i++) {
					const ticket = {
						name: 'Name ' + i,
						id: 'C' + (index + 1) + 'T' + i,
						age: `${i + 10}`,
						title: 'Mr/Ms',
						category: ele.name
					}
					ele.tickets.push(ticket)
					this.Ticket_fullData.push(ticket)
				}
			}
		})
		//console.log(this.Ticket_fullData)
	}
	drop(event: CdkDragDrop<string[]>) {
		//console.log(event)
		// If current element has ".selected"
		if (event.item.element.nativeElement.classList.contains("selected")) {
			this.multiDrag.dropListDropped(event);
			//	this.removeFromTicketMainArray(event.container.data, event.previousContainer.data)
		}
		// If dont have ".selected" (normal case)
		else {
			if (event.previousContainer === event.container) {
				moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
			} else {
				transferArrayItem(event.previousContainer.data,
					event.container.data,
					event.previousIndex,
					event.currentIndex);
			}
		}
		this.Seats.forEach((ele: any) => {
			ele.seat.forEach((dropSeat: any) => {
				if (dropSeat.ticket === event.container.data) {
					this.dropSeatRowIndex = dropSeat.row - 1
					this.dropSeatIndex = dropSeat.col - 1
				}
			})
		})
		console.log('rowIndex', this.dropSeatRowIndex, 'seatIndex', this.dropSeatIndex)
		if(this.dropSeatRowIndex!==undefined && this.dropSeatIndex!==undefined){
			this.singleItemIndropZone(event.container.data, this.dropSeatRowIndex, this.dropSeatIndex)
		}
	}
	singleItemIndropZone(seats: any, i: any, dropSeatIndex: any) {
		// will keep only 1 ticket in 1 seat and rest of them will store in extraSeats Array
		let extraSeats: any = []
		//index of seat where ticket dropped
		let seatIndex = dropSeatIndex
		//index of seat's row where ticket dropped
		let rowIndex: any = i
		//getting seat data where ticket is dropped so that we can use it to find out block info
		let blockInfo = this.Seats[rowIndex].seat[seatIndex]
		console.log(blockInfo)
		let blockSeatArr = []
		this.Seats.forEach(row => {
			row.seat.forEach(seat => {
				if (seat.block_id === blockInfo.block_id) {
					//creating a new array of specific seat block where list of ticket was dropped
					blockSeatArr.push(seat)
				}
			})
		})
	//	console.log(blockSeatArr)
		if (blockInfo.ticket.length) {
			this.Seats[rowIndex].seat[seatIndex].ticket = blockInfo.ticket.filter((ele, i) => {
				//keeping 1 ticket in 1 seat
				if (i == 0) {
					return ele
				}
				else {
					//rest of the ticket we are going to push to extraSeat Array
					extraSeats.push(ele)
				}
			})
		}
		///console.log(extraSeats)
		//now we gonna get all the ticket from extraSeat array and will place one by one according to blockSeatArr's Index ...
		//blockSeatArr is having all the index detail of that specific block seat where we dropped list of ticket
		if (extraSeats.length) {
			extraSeats.forEach(seat => {
					for(const block of blockSeatArr){
						//check if current rowIndex and seatIndex index has ticket
					if (this.Seats[block.row - 1].seat[block.col - 1].ticket.length <= 0) {
						//current rowIndex and seatIndex index has ticket so we gonna change the index to next blockSeatArr index
						rowIndex = block.row - 1
						seatIndex = block.col - 1
					//	console.log('row',rowIndex,'col',seatIndex)
						//gonna break the loop
						break;
					}
				}
				if (this.Seats[rowIndex].seat[seatIndex].ticket.length <= 0) {
					this.Seats[rowIndex].seat[seatIndex].ticket.push(seat)
				}
				else {
					//removing extra ticket from seat block and placing it to ticket array
					this.dragedLastItemMovingBack(seat)
				}
			})
		}
	}
	singleItemIndropZoneTest(seats: any, i: any, dropSeatIndex: any) {
		console.log('mainSeatArray', this.Seats)
		//	console.log(seats)
		let extraSeats: any = []
		//index of seat where ticket dropped
		let seatIndex = dropSeatIndex
		//index of seat's row where ticket dropped
		let rowIndex: any = i
		//getting seat data where ticket is dropped so that we can use it to find out block info
		let blockInfo = this.Seats[rowIndex].seat[seatIndex]
		console.log(blockInfo)
		this.Seats.map((seats: any) => {
			seats.seat.map((seat: any) => {
				//check if seat where ticket dropped having more than 1 ticket
				if (seat.ticket.length > 1) {
					seat.ticket = seat.ticket.filter((child: any, i: any) => {
						//keeping only 1 ticket in one seat
						if (i == 0) {
							return child
						}
						//push extra ticket to new array called extraSeats
						extraSeats.push(child)
					})
					console.log('extraSeat', extraSeats)
					if (extraSeats.length) {
						extraSeats.forEach((ele: any, i: any) => {
							this.Seats.forEach((seats: any) => {
								seats.seat.forEach((seat: any) => {
									//console.log(seatIndex === this.Seats[rowIndex].seat.length)
									if (seatIndex === this.Seats[rowIndex].seat.length) {
										if ((this.Seats.length - 1) > rowIndex) {
											rowIndex = rowIndex + 1
											seatIndex = 0
										} else {
											this.dragedLastItemMovingBack(ele)
										}
									}
									else {
										//check if seat having ticket or not
										if (this.Seats[rowIndex].seat[seatIndex].ticket.length >= 1) {
											// moving to next index because this seat is already having one ticket
											seatIndex = seatIndex + 1
										}
									}
								})
							})
							if (seatIndex != this.Seats[rowIndex].seat.length) {
								this.Seats[rowIndex].seat[seatIndex].ticket.push(ele)
							}
						})
					}
				}
			})
		})
	}
	dragedLastItemMovingBack(item) {
		console.log(item)
		if (item) {
			if (!this.Ticket_fullData.includes(item)) {
				this.Ticket_fullData.push(item)
			}
		}
	}
	removeTicket(data, item) {
		this.Ticket_fullData.push(item)
		const index = data.ticket.findIndex(ele => ele.id === item.id)
		data.ticket.splice(index, 1)
	}
	True() {
		return true
	}
	False() {
		return false
	}
	/* TWO OBJECTS */
	// Multi Select
	multiSelect = {
		// Put ".selected" on elements when clicking after longPress or Ctrl+Click
		// Initial Variables
		longPressTime: 100, // in ms unit
		verifyLongPress: 0,
		multiSelect: false,
		verifyDragStarted: false,
		ctrlMode: false,
		firstContainer: null as unknown as HTMLElement,
		selectDrag(el: HTMLElement) {
			while (!el.classList.contains('cdk-drag')) {
				el = el.parentElement as HTMLElement;
			}
			return el;
		},
		mouseDown(e: Event) {
			let target = this.selectDrag(e.target as HTMLElement);
			let ctrlKey = (e as KeyboardEvent).ctrlKey;
			if (this.multiSelect) {
				// If multiSelect is enabled
				/* The responsibility for removing only the first ".selected" has to be with mouseDown and not with mouseUp.
						   if not you can't add the first one */
				// Remove
				let allSelected = document.querySelectorAll('.selected').length;
				if (
					allSelected == 1 &&
					target.classList.contains('selected') &&
					(this.ctrlMode ? ctrlKey : true)
				) {
					// If only have one ".selected" and it was clicked
					target.classList.remove('selected', 'last'); // remove ".selected" and ".last"
					this.multiSelect = false; // turns off multiSelect
				}
			} else {
				// If multiSelect is disabled
				// Do this
				let addSelected = () => {
					this.multiSelect = true; // enable multiSelect
					this.firstContainer = target.parentElement as HTMLElement; //saves the container of the first selected element
					target.classList.add('selected', 'last'); // and add ".selected" and ".last" to the current element clicked
				};
				// If using CTRL
				if (ctrlKey) {
					this.ctrlMode = true;
					addSelected();
				}
				// If using longPress
				this.verifyLongPress = <any>setTimeout(() => {
					// If there is a LongPress
					this.ctrlMode = false;
					addSelected();
				}, this.longPressTime); // after "longPressTime"(ms)
			}
			//   //console.log('selected length',document.querySelectorAll('.selected').length)
		},
		mouseUp(e: Event) {
			clearTimeout(this.verifyLongPress); // cancel LongPress
			if (this.multiSelect && !this.verifyDragStarted) {
				// If multiSelect is enabled AND not start DragStarted
				let target = this.selectDrag(e.target as HTMLElement);
				let allSelected = document.querySelectorAll('.selected');
				let ctrlKey = (e as KeyboardEvent).ctrlKey;
				let last = document.querySelector('.last');
				// If use Shift
				if (last && (e as KeyboardEvent).shiftKey) {
					// take range informations
					let containerLast = Array.from(last.parentElement!.children);
					let lastIndex = containerLast.indexOf(last);
					let currIndex = containerLast.indexOf(target);
					let max = Math.max(lastIndex, currIndex);
					let min = Math.min(lastIndex, currIndex);
					// toggle .selected in the range
					for (let i = min; i <= max; i++) {
						if (i != lastIndex) {
							// Does not toggle the penult element clicked
							containerLast[i].classList.toggle('selected');
						}
					}
					// put .last if last clicked was selected at end
					if (target.classList.contains('selected')) {
						last && last.classList.remove('last'); // remove .last from penult element clicked
						target.classList.add('last'); // and add ".last" to the current element
					}
				}
				//If don't use shift
				else {
					// To remove from selection
					/* responsibility to remove from selection assigned to mouseUp */
					if (
						target.classList.contains('selected') &&
						allSelected.length > 1 &&
						(this.ctrlMode ? ctrlKey : true)
					) {
						// If the clicked element already has ".selected" AND If you have more than 1 (not to remove the first one added)
						target.classList.remove('selected'); // remove ".selected"
						target.classList.remove('last'); // remove ".last"
					}
					// To add to selection
					else {
						// if the clicked element does not have the ".selected"
						if (
							this.firstContainer == target.parentElement &&
							(this.ctrlMode ? ctrlKey : true)
						) {
							//if the item click is made within the same container
							last && last.classList.remove('last'); // remove .last from penult element clicked
							target.classList.add('selected', 'last'); // add ".selected" and ".last"
						} else if (this.ctrlMode ? ctrlKey : true) {
							// if in different container, and with ctrl (if ctrl)
							allSelected.forEach((el) => {
								// remove all selected from last container
								el.classList.remove('selected', 'hide', 'last');
							});
							this.firstContainer = target.parentElement as HTMLElement; //saves the container of the new selected element
							target.classList.add('selected', 'last'); // and add ".selected" to the element clicked in the new container
						}
					}
				}
			}
			//  //console.log('mouse up selected length',document.querySelectorAll('.selected').length)
		},
		dragStarted() {
			// //console.log('test selected length',document.querySelectorAll('.selected').length)
			this.verifyDragStarted = true; // shows to mouseDown and mouseUp that Drag started
			clearTimeout(this.verifyLongPress); // cancel longPress
		},
		dragEnded() {
			this.verifyDragStarted = false; // show mouseDown and mouseUp that Drag is over
		},
		dropListDropped(e: CdkDragDrop<string[]>) {
			let el = e.item.element.nativeElement;
			el.classList.add('dragStarted')
			if (el.classList.contains('selected')) {
				// the dragged element was of the "selected" class
				this.multiSelect = false; // disable multiSelect
			}
		},
	};
	// Multi Drag
	multiDrag = {
		// Adjusts clicked items that have ".selected" to organize together
		// Initial Variables
		dragList: [''], // has the value of the selected items in sequence from listData
		dragListCopy: [''], // a copy of the listData, but with the selected elements marked with "DragErase" to delete later
		dragErase: Symbol('DragErase') as any, // a symbol to have unique value when deleting
		dragStarted(e: CdkDragStart) {
			if (e.source.element.nativeElement.classList.contains('selected')) {
				// If the dragged element has ".selected"
				//prepare
				let listData = e.source.dropContainer.data; // get list data value
				this.dragList = []; // reset the dragList
				this.dragListCopy = [...listData]; // copy listData into variable
				let DOMdragEl = e.source.element.nativeElement; // dragged element
				////console.log('ele', DOMdragEl);
				let DOMcontainer = Array.from(DOMdragEl.parentElement!.children); // container where all draggable elements are
				let DOMdragElIndex = DOMcontainer.indexOf(DOMdragEl); // index of the dragged element
				let allSelected = document.querySelectorAll('.selected'); // get all the ".selected"
				// Goes through all ".selected"
				allSelected.forEach((eli) => {
					////console.log(eli);
					// get index of current element
					let CurrDOMelIndexi = DOMcontainer.indexOf(eli);
					// Add listData of current ".selected" to dragList
					this.dragList.push(listData[CurrDOMelIndexi]);
					//  //console.log(this.dragList);
					// Replaces current position in dragListCopy with "DragErase" (to erase exact position later)
					this.dragListCopy[CurrDOMelIndexi] = this.dragErase;
					// Put opacity effect (by CSS class ".hide") on elements (after starting Drag)
					if (DOMdragElIndex !== CurrDOMelIndexi) {
						eli.classList.add('hide');
					}
				});
			}
		},
		dropListDropped(e: CdkDragDrop<string[]>) {
			// //console.log('dropListDropped selected length',document.querySelectorAll('.selected').length)
			if (e.previousContainer === e.container) {
				// If in the same container
				let posAdjust = e.previousIndex < e.currentIndex ? 1 : 0; // Adjusts the placement position
				this.dragListCopy.splice(
					e.currentIndex + posAdjust,
					0,
					...this.dragList
				); // put elements in dragListCopy
				this.dragListCopy = this.dragListCopy.filter(
					(el) => el !== this.dragErase
				); // remove the "DragErase" from the list
				// Pass item by item to final list
				for (let i = 0; i < e.container.data.length; i++) {
					e.container.data[i] = this.dragListCopy[i];
				}
			} else {
				// If in different containers
				// remove the "DragErase" from the list
				this.dragListCopy = this.dragListCopy.filter(
					(el) => el !== this.dragErase
				);
				// Pass item by item to initial list
				for (let i = 0; i < e.previousContainer.data.length; i++) {
					e.previousContainer.data[i] = this.dragListCopy[i];
				}
				for (let i = 0; i < this.dragList.length; i++) {
					e.previousContainer.data.pop();
				}
				let otherListCopy = [...e.container.data]; // list of new container
				otherListCopy.splice(e.currentIndex, 0, ...this.dragList); // put elements in otherListCopy
				// Pass item by item to final list
				for (let i = 0; i < otherListCopy.length; i++) {
					e.container.data[i] = otherListCopy[i];
					//console.log(e.container.data[i])
				}
			}
			// Remove ".hide"
			let allHidden = document.querySelectorAll('.hide');
			allHidden.forEach((el) => {
				el.classList.remove('hide');
			});
			// Remove ".selected" after 300ms
			setTimeout(() => {
				let allSelected = document.querySelectorAll('.selected');
				allSelected.forEach((el) => {
					el.classList.remove('selected', 'last');
				});
			}, 300);
			this.dragListCopy = []; // reset the dragListCopy
			this.dragList = []; // reset the dragList
		},
	};
	/* END TWO OBJECTS */
	manageBlock(e) {
		this.router.navigate(['/block/flexi-block-list'])
	}
	colSeatCheckAll(e, Seats, col_name) {
		if (this.selectedBlock?.backgroundColor) {
			let selctedColItem = []
			Seats.filter(ele => {
				ele.seat.filter(item => {
					if (item.col === col_name) {
						item.isChecked = true
						selctedColItem.push(item)
					}
				})
			})
			selctedColItem = [...selctedColItem]
			this.rowSeatCheckAll(e, selctedColItem)
		}
		else {
			this.utilitiesService.errorMessage('Please select a block ')
			e.target.checked = false
		}
	}
	rowSeatCheckAll(e, row) {
		if (this.selectedBlock?.backgroundColor) {
			row.forEach((ele, i) => {
				ele.isChecked = e.target.checked
				this.seatCheck(e, i, ele)
			})
		}
		else {
			this.utilitiesService.errorMessage('Please select a block ')
			e.target.checked = false
		}
	}
	clickTocheck(index, data) {
		if (this.selectedBlock?.backgroundColor) {
			data.isChecked = !data.isChecked
			const event = {
				target: {
					checked: data.isChecked
				}
			}
			console.log(this.selectedBlock, data)
			this.seatCheck(event, index, data)
		}
		else {
			this.utilitiesService.errorMessage('Please select a block ')
		}
	}
	seatCheck(e, index, data) {
		if (this.selectedBlock?.backgroundColor) {
			if (e.target.checked === true) {
				data.backgroundColor = this.selectedBlock?.backgroundColor
				data.block_id = this.selectedBlock?.id
				this.checkedSeatList.push(data)
				console.log(data)
			}
			if (e.target.checked === false) {
				data.backgroundColor = ''
				data.block_id = ''
				this.checkedSeatList.splice(this.checkedSeatList.findIndex(d => d.name === data.name), 1);
			}
			this.checkedSeatList = [... new Set(this.checkedSeatList)]
			//console.log(this.checkedSeatList)
		}
		else {
			this.utilitiesService.errorMessage('Please select a block ')
			e.target.checked = false
			//console.log('event', e.target.checked)
		}
	}
	seatEdit() {
		this.seatEditMode = true
	}
	saveSeat() {
		this.seatEditMode = false
		localStorage.setItem('blockSeat', JSON.stringify(this.checkedSeatList))
		// let blockSeat=JSON.parse(localStorage.getItem('blockSeat'))
		// console.log(blockSeat)
		// this.selectedBlock = null
	}
	cancelEdit() {
		this.checkedSeatList.forEach(ele => {
		})
		this.checkedSeatList = []
		this.seatEditMode = false
	}
	blockSelection(e) {
		console.log(e)
		this.selectedBlock = e
	}
	setBackgroundColor(f) {
		let styles = {
			'background-color': f.backgroundColor,
			'cursor': 'pointer'
		};
		return styles;
	}
	addFlexiBlock() {
		const dialogRef = this.dialog.open(CreateFlexiBlockComponent,
			{
				width: 'auto',
				height: 'auto'
			})
		dialogRef.afterClosed().subscribe(res => {
			if (res) {
				this.flexi_dataSource.push(res)
				this.flexi_dataSource = [...this.flexi_dataSource]
				localStorage.setItem('flexiBlock', JSON.stringify(this.flexi_dataSource))
				this.utilitiesService.successMessage("Block created successfully")
			}
		})
	}
	// ticketSearch(e) {
	// 	this.ticketFilter(e, filterBy.Name)
	// }
	// ticketFilter(query, filterBy) {
	// 	this.ticketfilterArray = this.Ticket_fullData.filter(ele => {
	// 		return ele[filterBy].includes(query)
	// 	})
	// }
	// onSliderChange(event: MatSliderChange) {
	// 	//console.log(event.value)
	// 	const ageValue = event.value
	// 	this.ticketFilter(ageValue, filterBy.Age)
	// }
	// clearFiler(filter) {
	// 	if (filter === filterBy.Category) {
	// 		this.ticketFilter('', filterBy.Category)
	// 		this.category_value = 'Select Category'
	// 	}
	// 	if (filter === filterBy.Age) {
	// 		this.ticketFilter('', filterBy.Age)
	// 		this.clearAgeSlider = 5
	// 	}
	// }
	advanceFilter() {
		const dialogRef = this.dialog.open(SearchAlertComponent,
			{
				width: 'auto',
				height: 'auto'
			})
		dialogRef.afterClosed().subscribe(res => {
			if (res) {
				this.form.patchValue({
					age_start: res.age_start,
					age_end: res.age_end,
					category: res.category,
					age: res.age_start
				})
			}
		})
	}
	filterRemove(itemName) {
		console.log(itemName)
		if (itemName === 'age') {
			this.form.patchValue({
				age_start: '',
				age_end: '',
				age: ''
			})
		} else {
			this.form.get(itemName).setValue('')
		}
	}
}
