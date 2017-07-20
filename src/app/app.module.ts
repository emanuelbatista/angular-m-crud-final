import { FormLinePersonalizedComponent } from './widget/FormLinePersonalizedComponent';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MetaModule, PipesModule } from 'angularm';
import { AngularmModule, FlashMessageComponent, FlashMessageService } from 'angularm';
import {
  ListEntitiesComponent, ShowEntityComponent, NewEntityComponent,
  EditEntityComponent, HomeComponent, PageNotFoundComponent } from 'angularm';
import { EntityLineComponent, CreateEntityComponent, FormLineComponent,
  EditEntityFormComponent, EditFormLineComponent, EntityDetailsComponent, 
  ShowLineComponent, ListingTableComponent } from 'angularm';
import { AppComponent } from "app/app.component";
import { TableLineComponent } from "app/widget/TableLineComponent";
import { TableListComponent } from "app/widget/TableListComponent";
import { ShowEntityComponent as ShowEntityLocalComponent } from "app/widget/ShowEntityComponent";
import { ShowLineComponent as ShowLineLocalComponent } from "app/widget/ShowLineComponent";
import { CreateFormComponent } from "app/widget/CreateFormComponent";
import { FormLineComponent as FormLineLocalComponent} from "app/widget/FormLineComponent";
import { FormLineGenericComponent } from "app/widget/FormLineGenericComponent";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':entitytypename', component: ListEntitiesComponent },
  { path: ':entitytypename/new', component: NewEntityComponent },
  { path: ':entitytypename/:key', component: ShowEntityComponent },
  { path: ':entitytypename/:key/edit', component: EditEntityComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    TableLineComponent,
    ShowEntityLocalComponent,
    ShowLineLocalComponent,
    FormLineLocalComponent,
    CreateFormComponent,
    FormLineGenericComponent,
    FormLinePersonalizedComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularmModule,
    PipesModule,
    MetaModule
  ],
  providers: [
    FlashMessageService
  ],
  entryComponents: [
    EntityLineComponent,
    CreateEntityComponent,
    FormLineComponent,
    EditEntityFormComponent,
    EditFormLineComponent,
    EntityDetailsComponent, 
    ShowLineComponent,
    ListingTableComponent,
    TableListComponent,
    TableLineComponent,
    ShowEntityLocalComponent,
    ShowLineLocalComponent,
    FormLineLocalComponent,
    CreateFormComponent,
    FormLineGenericComponent,
    FormLinePersonalizedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
