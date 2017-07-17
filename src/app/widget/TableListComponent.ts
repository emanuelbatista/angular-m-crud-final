import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListingTableComponent } from "angularm";

@Component({
  selector: 'div [mgListingTable]',
  template: `<div *ngIf="entityType">
    <style>{{configuration('generalStyle')}}</style>
    <h1>Listing {{ entityType.plural | titleCase }}</h1>
    <table data-toggle="table" data-pagination="true" data-search="true" [ngClass]="'table table-striped'">
      <thead>
        <tr>
          <th *ngFor="let propertyType of entityType.propertyTypes">{{propertyType.name | titleCase}}</th>
          <th> Actions </th>
        </tr>
      </thead>
      <tbody>
        <div *ngFor="let entity of entities" [mgEntity]="'table_line'" [entity]="entity">
        </div>
      </tbody>
    </table>
    <a href="#" (click)="create()" [ngClass]="'btn btn-primary'">New {{entityType.singular | titleCase}}</a>
    <a href="#" (click)="back()">Back</a>
  </div>`
})
export class TableListComponent extends ListingTableComponent {

 
}
