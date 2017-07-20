import { Component } from '@angular/core';

import {FormLineComponent as FormLine} from "angularm"

@Component({
    selector: 'div [mgFormLine]',
    template:
        `<label for="{{propertyType.entityType.singular}}_{{propertyType.name}}" [ngClass]="'control-label col-lg-2'"
            >{{propertyType.name | titleCase}}</label>
        <input
          type="{{configuration.inputType}}" [ngClass]="{'form-control': true, 'w3-text-blue': configuration.fieldBlue}"
          id="{{propertyType.entityType.singular}}_{{propertyType.name}}"
          placeholder="{{propertyType.name | titleCase}}"
          [formControl]="mgFormControl">
        <br>`,
})
export class FormLineGenericComponent extends FormLine { }