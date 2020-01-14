import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatPaginatorModule, MatMenuModule, MatButtonModule, MatListModule, MatIconModule, MatDividerModule, MatCheckboxModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMultiSortModule } from 'mat-multi-sort';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTableModule,
    MatMultiSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatListModule,
    DragDropModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
