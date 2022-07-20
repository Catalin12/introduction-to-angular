import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'simple-button',
	templateUrl: './simple-button.component.html',
	styleUrls: ['./simple-button.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleButtonComponent implements OnInit {
	public inputStatus: boolean;
	public showedText: string;
	public saveShowedText: string;

	public constructor() {
		this.inputStatus = false;
		this.saveShowedText = "";
		this.showedText = "";
	}

	public ngOnInit(): void {
	}

	public changeInputStatus(): void {
		this.inputStatus = !this.inputStatus;
		if (this.inputStatus === false) {
			this.saveShowedText = this.showedText;
			this.showedText = "";
		} else this.showedText = this.saveShowedText;

	}

	public handleKeyUp(event: any): void {
		if (this.inputStatus) {
			this.showedText = "greetings " + event.target.value;
		} else {
			this.showedText = "";
		}
	}

}
