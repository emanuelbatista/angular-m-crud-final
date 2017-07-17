import { Component } from '@angular/core';

import {FormLineComponent as FormLine} from "angularm"

@Component({
    selector: 'div [mgFormLine]',
    template:
        `<label for="{{propertyType.entityType.singular}}_{{propertyType.name}}" [ngClass]="'control-label col-lg-2 w3-text-blue'"
            >{{propertyType.name | titleCase}}</label>
        <input
          type="{{configuration.inputType}}" [ngClass]="'form-control w3-input w3-border'"
          id="{{propertyType.entityType.singular}}_{{propertyType.name}}"
          placeholder="{{propertyType.name | titleCase}}"
          [formControl]="mgFormControl">
        <br>`,
})
export class FormLineComponent extends FormLine { }