import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { OnInit } from '@angular/core/src/metadata';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  analytical_Function: string[];
}
enum fx {
  'function1'  = 'function1',
  'function2'  = 'function2',
  'function3'  = 'function3',
  'function4'  = 'function4',
  'function5'  = 'function5',
  'function6'  = 'function6',
  'function7'  = 'function7',
  'function8'  = 'function8',
  'function9'  = 'function9',
  'function10' = 'function10',
  'function11' = 'function11',
  'function12' = 'function12',
  'function13' = 'function13',
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {  
  fxObj  : any =  [] ;
  dataSource : any =  [] ;
  ELEMENT_DATA: PeriodicElement[];
  constructor() {

  }
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'analytical_Function',
  ];
  

  ngOnInit() {       
    this.fxObj.push( {  id: 1,  name :  'Deneme1'});  
    this.fxObj.push( {  id: 2,  name :  'Deneme2'});  
    this.fxObj.push( {  id: 3,  name :  'Deneme3'});  
    this.fxObj.push( {  id: 4,  name :  'Deneme4'});  
    this.fxObj.push( {  id: 5,  name :  'Deneme5'});  
    this.fxObj.push( {  id: 6,  name :  'Deneme6'});  
    this.fxObj.push( {  id: 7,  name :  'Deneme7'});  
    this.fxObj.push( {  id: 8,  name :  'Deneme8'});  
    this.fxObj.push( {  id: 9,  name :  'Deneme9'});  
    this.fxObj.push( {  id: 10,  name :  'Deneme10'});  
    this.fxObj.push( {  id: 11,  name :  'Deneme11'});  
    this.fxObj.push( {  id: 12,  name :  'Deneme12'});  
    this.fxObj.push( {  id: 13,  name :  'Deneme13'});  
    console.log(fx);
 
    //
    this.ELEMENT_DATA = [
      {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        analytical_Function: [fx.function1, fx.function2],
      },
      {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        analytical_Function: [fx.function3],
      },
      {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        analytical_Function: [fx.function4, fx.function5],
      },
      {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        analytical_Function: [this.fxObj[0].name ],
      },
      {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        analytical_Function: [fx.function6],
      },
      {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        analytical_Function: [fx.function7, fx.function8],
      },
      {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        analytical_Function: [fx.function9],
      },
      {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        analytical_Function: [],
      },
      {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        analytical_Function: [],
      },
      {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        analytical_Function: [fx.function10, fx.function12],
      },
    ];
  

    this.dataSource = this.ELEMENT_DATA;
  }
  functionAdd(element) {
    console.log(element);
    element.analytical_Function.push(this.fxObj[element.position].name);
  }
  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
