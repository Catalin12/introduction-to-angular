import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'simple-button',
	templateUrl: './simple-button.component.html',
	styleUrls: ['./simple-button.component.css']
})
export class SimpleButtonComponent implements OnInit {
	public numberOfClicks: number;
	public constructor() {
		this.numberOfClicks = 0;
	}

	public ngOnInit(): void {
	}
	increseNumberOfCounts() {
		this.numberOfClicks++;
	}

}
