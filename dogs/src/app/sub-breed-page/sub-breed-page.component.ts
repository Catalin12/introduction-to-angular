import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { DogService } from "../shared/api-dog.service";

@Component({
	selector: "app-sub-breed-page",
	templateUrl: "./sub-breed-page.component.html",
	styleUrls: ["./sub-breed-page.component.css"]
})
export class SubBreedPageComponent implements OnInit {

	public breedName: string = "";
	public subBreedName: string = "";
	public imageURL: any = "";

	public constructor(

		private dogService: DogService,
		private activedRoute: ActivatedRoute,
		private router: Router
	) { }

	public ngOnInit(): void {
		this.getSubBreedImage();
	}

	private getSubBreedImage(): void {
		this.activedRoute.paramMap.subscribe(params => {
			this.breedName = String(params.get("breedName"));
			this.subBreedName = String(params.get("subBreed"));
			this.dogService.getSubBreedImage(this.breedName, this.subBreedName).subscribe(
				(response) => this.imageURL = response.message,
				(error) => this.router.navigate(["not-found"])
			);
		});
	}

}
