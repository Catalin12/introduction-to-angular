import { Component } from '@angular/core';

@Component({
	selector: 'simple-button',
	templateUrl: './simple-button.component.html',
	styleUrls: ['./simple-button.component.css']
})
export class SimpleButtonComponent {
	public isInputEnable: boolean;
	public greetingText: string;

	public constructor() {
		this.isInputEnable = false;
		this.greetingText = "";
	}

	public changeInputStatus(): void {
		this.isInputEnable = !this.isInputEnable;
	}

	public handleKeyUp(event: any): void {
		this.greetingText = event.target.value;
	}

}
