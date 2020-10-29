import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { MaterialModule } from './material/material.module';
import { EmployeeService } from './shared/employee.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {DepartmentService} from './shared/department.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    AppRoutingModule,
    MaterialModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [EmployeeService,DepartmentService,DatePipe],
  bootstrap: [AppComponent],
  entryComponents :[EmployeeComponent,MatConfirmDialogComponent]
})
export class AppModule { }
