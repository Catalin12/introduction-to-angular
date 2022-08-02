import { Component, OnInit } from "@angular/core";
import { ApiDogService } from "../shared/api-dog.service";

@Component({
	selector: "app-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {

	public dogList: string[] = [];

	public constructor(
		private dogService: ApiDogService,
	) { }

	// eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, no-empty-function
	public ngOnInit(): void {
		this.dogList = this.dogService.getDogBreed();
	}



}
