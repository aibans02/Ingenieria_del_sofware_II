import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameIndexComponent } from './game-index/game-index.component';
import { ForumsComponent } from './forums/forums.component';
import { GuidesComponent } from './guides/guides.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { SupportComponent } from './support/support.component';

import { GameRoutingModule } from './game-routing.module';
import { MatTreeModule, 
  MatButtonModule, 
  MatCheckboxModule, 
  MatInputModule,  
  MatAutocompleteModule,  
  MatDatepickerModule,  
  MatFormFieldModule,  
  MatRadioModule,  
  MatSelectModule,  
  MatSliderModule,  
  MatSlideToggleModule,  
  MatMenuModule,  
  MatSidenavModule,  
  MatToolbarModule,  
  MatListModule,  
  MatGridListModule,  
  MatCardModule,  
  MatStepperModule,  
  MatTabsModule,  
  MatExpansionModule,  
  MatButtonToggleModule,  
  MatChipsModule,  
  MatIconModule,  
  MatProgressSpinnerModule,  
  MatProgressBarModule,  
  MatDialogModule,  
  MatTooltipModule,  
  MatSnackBarModule,  
  MatTableModule,  
  MatSortModule,  
  MatPaginatorModule,  
  MatNativeDateModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [GameIndexComponent, ForumsComponent, GuidesComponent, NewsUpdatesComponent, SupportComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatTreeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ScrollingModule,
  ]
})
export class GameModule { }
