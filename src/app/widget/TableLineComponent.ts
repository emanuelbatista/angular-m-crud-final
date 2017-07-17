import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EntityLineComponent } from "angularm";

@Component({
    selector: 'tr [mgEntityLine]',
    template:
        `<td *ngFor="let property of entity.mountProperties()">{{property.value}}</td>
         <td> 
            <a href="#" (click)="show()" [ngClass]="'btn btn-default btn-xs'">Show</a>
            <a href="#" (click)="edit()" [ngClass]="'btn btn-default btn-xs'">Edit</a>
            <a href="#" (click)="destroy()" [ngClass]="'btn btn-default btn-xs btn-danger'">Destroy</a>
        </td>`,
})
export class TableLineComponent extends EntityLineComponent {
}
