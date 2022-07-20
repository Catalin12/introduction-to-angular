import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
	selector: 'simple-button',
	templateUrl: './simple-button.component.html',
	styleUrls: ['./simple-button.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleButtonComponent implements OnInit {
	public inputStatus: boolean;

	public constructor() {
		this.inputStatus = false;
	}

	public changeText(input: string): void {
		console.log(input)
	}

	public ngOnInit(): void {
	}

	public changeInputStatus(): void {
		this.inputStatus = !this.inputStatus;
	}
}
