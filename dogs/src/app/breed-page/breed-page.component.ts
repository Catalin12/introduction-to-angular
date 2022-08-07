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
	public subBreedName: string[] = [];

	public constructor(
		private dogService: DogService,
		private activedRoute: ActivatedRoute,
		private dogRoute: Router
	) { }

	public ngOnInit(): void {
		this.getBreedImage();
		this.getSubBreed();
	}

	private getBreedImage(): void {
		this.activedRoute.paramMap.subscribe(params => {
			this.breedName = String(params.get("breedName"));
			this.dogService.getBreedImage(this.breedName).subscribe(
				(data: any) => {
					this.imageURL = data.message;
      			},
				(error: any) => {
					this.dogRoute.navigate(["**"]);
				}
			);
		});
	}

	private getSubBreed(): void {
		this.dogService.getSubBreeds(this.breedName).subscribe((data: any) => {
			for(let dogName of data.message) {
				this.subBreedName.push(dogName);
			}
	   });

	}

}
