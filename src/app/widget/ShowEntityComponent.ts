import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EntityDetailsComponent } from "angularm";

@Component({
  selector: 'div [mgEntityDetails]',
  template: `<div *ngIf="entity">
  <dl [ngClass]="'dl-horizontal'" [mgForeachProperty]="'show_line'" [entity]="entity">
  </dl>
  <a href="#" (click)="edit()">Edit</a>
  <a href="#" (click)="back()">Back</a>
</div>`
})
export class ShowEntityComponent extends EntityDetailsComponent {

 

}
