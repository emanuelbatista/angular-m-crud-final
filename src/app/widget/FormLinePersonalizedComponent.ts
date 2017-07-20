import { Component } from '@angular/core';

import {FormLineComponent as FormLine} from "angularm"

@Component({
    selector: 'div [mgFormLine]',
    template:
        `<label for="{{propertyType.entityType.singular}}_{{propertyType.name}}"
       [ngClass]="configuration.labelClass">{{propertyType.name | titleCase}}</label>
       
        <input type="{{configuration.inputType}}" 
            id="{{propertyType.entityType.singular}}_{{propertyType.name}}"
            placeholder="{{propertyType.name | titleCase}}"
            [formControl]="mgFormControl"
            [ngClass]="configuration.inputClass">
        <br>`,
})
export class FormLinePersonalizedComponent extends FormLine { }