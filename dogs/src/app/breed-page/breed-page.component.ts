import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DogService } from "../shared/api-dog.service";

@Component({
	selector: "app-breed-page",
	templateUrl: "./breed-page.component.html",
	styleUrls: ["./breed-page.component.css"]
})
export class BreedPageComponent implements OnInit {

	public breedName: string = "";
	public subBreedName: string[] = [];
	public imageURL: string = "";

	public constructor(
		private dogService: DogService,
		private activedRoute: ActivatedRoute
	) { }

	public ngOnInit(): void {

	}




}
