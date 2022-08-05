import { Component, OnInit } from "@angular/core";

import { DogService } from "../shared/api-dog.service";

@Component({
	selector: "app-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {

	public dogBreeds: string[] = [];
	//public dogHasSubBreed:

	public constructor(private dogService: DogService) { }

	public ngOnInit(): void {
		this.prepareDogList();
	}

	private prepareDogList(): void {
		this.dogService.getDogBreedNames().subscribe((data: any) => {
			const recivedData: any = data;
			for (let breed in recivedData.message) {
				if (recivedData.message[breed].length) {
					for (let subBreed of recivedData.message[breed]) this.dogBreeds.push(`${breed} ${subBreed}`);
				} else this.dogBreeds.push(breed);
			}
		});
	}
}
