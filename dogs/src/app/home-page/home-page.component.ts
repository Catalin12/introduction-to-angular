import { Component, OnInit } from "@angular/core";

import { DogService } from "../shared/api-dog.service";

@Component({
	selector: "app-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {

	public breedNames: string[] = [];

	public constructor(private dogService: DogService) { }

	public ngOnInit(): void {
		this.prepareBreedNames();
	}

	private prepareBreedNames(): void {
		this.dogService.getBreedNames().subscribe((data: any) => {
			const recivedData: any = data;
			for (let breed in recivedData.message) {
				this.breedNames.push(breed);
			}
		});
	}
}
