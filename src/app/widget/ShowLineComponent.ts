import { Component } from '@angular/core';
import {ShowLineComponent as ShowLine} from 'angularm';


@Component({
    selector: 'p [mgShowLine]',
    template:
        `<dt><strong>{{property.propertyType.name | titleCase}}:</strong></dt>
        <dd>{{property.value}}</dd>`,
})
export class ShowLineComponent extends ShowLine { }
