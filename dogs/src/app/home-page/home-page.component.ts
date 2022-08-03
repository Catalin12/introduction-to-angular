import { Component, OnInit } from "@angular/core";
import { ApiDogService } from "../shared/api-dog.service";

@Component({
	selector: "app-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {

	public dogNames: string[] = [];
	public recivedData: any;

	public constructor(private dogService: ApiDogService) { }

	public ngOnInit(): void {
		this.prepareDogList();
	}

	private prepareDogList(): void {
		this.dogService.getDogBreedNames().subscribe((dataReceived: Object) => {
			this.recivedData = dataReceived;
			for (let breed in this.recivedData.message) {
				if (this.recivedData.message[breed].length) {
					for (let secondBreed of this.recivedData.message[breed]) this.dogNames.push(`${secondBreed} ${breed}`);
				} else this.dogNames.push(breed);
			}
		});
	}
}
