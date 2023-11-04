import { Component } from "@angular/core";
import { CardComponent } from "src/app/shared/components"; 

@Component({
    selector: 'recipe-list-root',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.scss' ],
    standalone: true,
    imports: [ CardComponent ]
})

export class ListComponent {}