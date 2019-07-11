import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule,
MatToolbarModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatDividerModule, MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatToolbarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatExpansionModule,
  MatTabsModule
  ],
  exports: [
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatToolbarModule,
  MatSelectModule,
  MatSnackBarModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatExpansionModule,
  MatTabsModule
  ]
})
export class MaterialModule { }