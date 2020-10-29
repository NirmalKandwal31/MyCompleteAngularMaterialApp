import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import{MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DepartmentService } from 'src/app/shared/department.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EmployeeComponent } from '../employee/employee.component';
import { DialogService } from 'src/app/shared/dialog.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(public service:EmployeeService,
    public departmentService:DepartmentService,
    public dialog:MatDialog,
    public dialogService:DialogService,
    public notificationService:NotificationService) { }
  listData: MatTableDataSource<any>;
  displayedColumns:string[]=['fullName','email','mobile','city','departmentName','actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  searchKey:string;



  ngOnInit() {
    this.service.getEmployees().subscribe(
      list=>{
      let array=list.map(item=>{
        let departmentName=this.departmentService.getDepartmentName(item.payload.val()['department']);
        return {
          $key:item.key,
          departmentName,
          ...item.payload.val()
        };
        
      });
      this.listData=new MatTableDataSource(array);
      this.listData.sort=this.sort;
      this.listData.paginator=this.paginator;
      //filter restriction : Custom filter
      this.listData.filterPredicate=(data,filter)=>{
        return this.displayedColumns.some( ele => {
	return ele !='actions' && data[ele].toLowerCase().indexOf(filter) !=-1;
	
	});
      };
    });
  }
  onSearchClear()  {
    this.searchKey="";
    this.applyFilter();
  }
  applyFilter()  {
    this.listData.filter=this.searchKey.trim().toLowerCase();
  }
  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(EmployeeComponent,dialogConfig);

  }
  //Edit
  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EmployeeComponent,dialogConfig);
  }
  onDelete($key){
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.service.deleteEmployee($key);
        this.notificationService.warn('! Deleted successfully');
      }
    });
  }

}
