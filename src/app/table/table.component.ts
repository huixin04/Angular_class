import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  toppings = new FormControl('');
  toppingList: string[] = [
    '客需單號',
    '專案代號-機台數量',
    '負責人',
    '客服',
    '客戶',
    '起始日',
    '結束日',
    '編輯',
    '範本',
    '複製轉新增'


  ];

  displayedColumns: string[] = [

    'number',
    'number_quantity',
    'name',
    'service',
    'customer',
    'start',
    'end',
    'edit',
    'template',
    'add',
  ];
  dataSource = new MatTableDataSource<order>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

interface order {
  number:string;
  number_quantity:string;
  name: string;
  service:string;
  customer:string;
  start:string;
  end:string;

}



const ELEMENT_DATA: order[] = [
  { number: 'CR-20230001', number_quantity:'CR-20230001-2', name: 'Hydrogen', service: 'Amy', customer: '', start: formatDate(new Date('2023-03-17')), end: formatDate(new Date('2023-04-30'))   },
  { number: 'CR-20230002', number_quantity:'CR-20230002-3', name: 'Helium', service:'Amy', customer: '',start: formatDate(new Date('2023-03-17')), end: formatDate(new Date('2023-04-30'))  },
  { number: 'CR-20230003', number_quantity:'CR-20230003-1', name: 'Lithium', service: 'Amy', customer: '', start: formatDate(new Date('2023-03-17')), end: formatDate(new Date('2023-04-30')) },
  { number: 'CR-20230004', number_quantity:'CR-20230004-2', name: 'Beryllium', service:'Amy', customer: '',start: formatDate(new Date('2023-03-17')), end: formatDate(new Date('2023-04-30'))  },
  { number: 'CR-20230005', number_quantity:'CR-20230005-10', name: 'Boron', service: 'Amy', customer: '', start: formatDate(new Date('2023-03-17')), end: formatDate(new Date('2023-04-30')) },
  { number: 'CR-20230006', number_quantity:'CR-20230006-2', name: 'Carbon', service: 'Amy', customer: '', start: formatDate(new Date('2023-03-17')), end: formatDate(new Date('2023-04-30')) },
  { number: 'CR-20230007', number_quantity:'CR-20230007-9', name: 'Nitrogen', service: 'Amy', customer: '', start: formatDate(new Date('2023-03-17')), end: formatDate(new Date('2023-04-30')) },
  { number: 'CR-20230008', number_quantity:'CR-20230008-3', name: 'Oxygen', service: 'Amy', customer: '',start: formatDate(new Date('2023-03-17')), end: formatDate(new Date('2023-04-30'))  },
  { number: 'CR-20230009', number_quantity:'CR-20230009-5', name: 'Fluorine', service: 'Amy', customer: '', start: formatDate(new Date('2023-03-17')), end: formatDate(new Date('2023-04-30')) },
  { number: 'CR-20230010', number_quantity:'CR-20230010-4', name: 'Neon', service: 'Amy', customer: '',start: formatDate(new Date('2023-03-17')), end: formatDate(new Date('2023-04-30')) },


];

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
}




