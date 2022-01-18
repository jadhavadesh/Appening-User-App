import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ComponentsModule} from './components/components.module';
import {SigninoutModule} from './signinout/signinout.module';
import {SigninComponent} from './signinout/signin/signin.component'

import {HttpClientModule} from '@angular/common/http';
import {AnimationPlayer} from '@angular/animations';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

import { MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import {MatDialogModule} from '@angular/material/dialog';


import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { environment } from '../environments/environment';
import { MatDatepicker, MatDatepickerModule, MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
   SidenavComponent,
   SigninComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
   
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
  
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
     
  ],
  exports:[
     MatDatepickerModule,
     MatNativeDateModule,
     MatDateRangePicker,
     
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
