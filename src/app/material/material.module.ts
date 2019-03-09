import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatRadioModule } from '@angular/material/radio'; 
import { MatListModule } from '@angular/material/list'; 

@NgModule({
    imports: [
      CommonModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatInputModule,
      MatFormFieldModule,
      MatSnackBarModule,
      MatRadioModule,
      MatListModule
    ],
    exports: [
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatInputModule,
      MatFormFieldModule,
      MatSnackBarModule,
      MatRadioModule,
      MatListModule
    ],
    declarations: []
  })
export class MaterialModule { }