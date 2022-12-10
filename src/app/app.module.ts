import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './common/header/header.component';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { TwowaybindingComponent } from './databinding/twowaybinding/twowaybinding.component';
import { StringinterpolationComponent } from './databinding/stringinterpolation/stringinterpolation.component';
import { CustompipesComponent } from './pipes/custompipes/custompipes.component';
import { TruncatePipe } from './truncate.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {QrCodeModule } from "ng-qrcode";
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    TwowaybindingComponent,
    StringinterpolationComponent,
    CustompipesComponent,
    TruncatePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    QrCodeModule,
    MatCardModule,
    
    
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
