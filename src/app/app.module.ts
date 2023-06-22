import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { FormComponent } from './form/form.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RegisterComponent } from './register/register.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatCommonModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { DisplayInformationComponent } from './display-information/display-information.component';









@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    FormComponent,
    RegisterComponent,
    DisplayInformationComponent,
    
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatListModule,
    MatProgressBarModule,
    MatSelectModule,
    MatMenuModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
