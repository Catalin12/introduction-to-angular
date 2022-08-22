import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { DogService } from "../shared/api-dog.service";

@Component({
	selector: "app-breed-page",
	templateUrl: "./breed-page.component.html",
	styleUrls: ["./breed-page.component.css"]
})
export class BreedPageComponent implements OnInit {

	public breedName: string = "";
	public imageURL: any = "";
	public subBreedNames: string[] = [];

	public constructor(
		private dogService: DogService,
		private activedRoute: ActivatedRoute,
		private router: Router
	) { }

	public ngOnInit(): void {
		this.prepareBreedNameFromURL();
		this.prepareSubBreed();
	}

	private prepareBreedNameFromURL(): void {
		this.activedRoute.paramMap.subscribe(params => {
			this.breedName = String(params.get("breedName"));
			this.dogService.getBreedImage(this.breedName).subscribe(
				(data) => {
					this.imageURL = data.message;
				},
				(error) => {
					// eslint-disable-next-line no-console
					console.error(error);
				}
			);
		});
	}

	private prepareSubBreed(): void {
		this.dogService.getSubBreedNames(this.breedName).subscribe((data: any) => {
			for (let dogName of data.message) {
				this.subBreedNames.push(dogName);
			}
		});
	}
}