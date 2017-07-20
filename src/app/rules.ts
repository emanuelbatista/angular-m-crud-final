import { FormLinePersonalizedComponent } from './widget/FormLinePersonalizedComponent';
import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    EditFormLineComponent,
    EntityDetailsComponent,
    ListingTableComponent
} from 'angularm';
import { TableListComponent } from "app/widget/TableListComponent";
import { TableLineComponent } from "app/widget/TableLineComponent";
import { ShowEntityComponent } from "app/widget/ShowEntityComponent";
import { ShowLineComponent } from "app/widget/ShowLineComponent";
import { CreateFormComponent } from "app/widget/CreateFormComponent";
import { FormLineComponent } from "app/widget/FormLineComponent";
import { FormLineGenericComponent } from "app/widget/FormLineGenericComponent";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'name', null, FormLinePersonalizedComponent, {inputType: 'text', fieldBlue: true, labelClass: 'w3-hover-yellow  w3-wide', inputClass: 'w3-hover-text-red w3-opacity'})
        .ptr('form_line', 'client', '*', null, FormLinePersonalizedComponent, {inputType: 'text', fieldBlue: true, labelClass: 'w3-hover-yellow  w3-opacity', inputClass: 'w3-hover-text-red w3-wide'})
        .ptr('form_line', '*', '*', 'string', FormLinePersonalizedComponent, {inputType: 'text', fieldBlue: true, labelClass: 'w3-hover-text-red  w3-opacity', inputClass: 'w3-hover-yellow  w3-opacity'})
        .dptr('form_line', FormLineGenericComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', TableListComponent)
        .der('table_line', TableLineComponent)
        .der('show_entity', ShowEntityComponent)
        .detr('create_form', CreateFormComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
