import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'simple-button',
	templateUrl: './simple-button.component.html',
	styleUrls: ['./simple-button.component.css']
})
export class SimpleButtonComponent implements OnInit {
	public isInputEnable: boolean;
	public greetingText: string;

	public constructor() {
		this.isInputEnable = false;
		this.greetingText = "";
	}

	public ngOnInit(): void {
	}

	public changeInputStatus(): void {
		this.isInputEnable = !this.isInputEnable;
	}

	public handleKeyUp(event: any): void {
		this.greetingText = event.target.value;
	}

}
