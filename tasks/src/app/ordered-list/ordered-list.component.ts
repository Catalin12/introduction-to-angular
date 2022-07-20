import { Component } from '@angular/core';

@Component({
	selector: 'ordered-list',
	templateUrl: './ordered-list.component.html',
	styleUrls: ['./ordered-list.component.css']
})
export class OrderedListComponent {
	public isListEnable: boolean;
	public listNames: string[];

	public constructor() {
		this.isListEnable = false;
		this.listNames = ["Catalin", "Mihai", "Daniel"];
	}

	public changeListStatus(): void {
		this.isListEnable = !this.isListEnable;
	}
}