import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })

export class ApiDogService {
	public dogBreed: string[] = [];
	public recivedData: any;

	public constructor(private http: HttpClient) { }

	public getDogBreed(): string[] {
		this.http.get("https://dog.ceo/api/breeds/list/all").subscribe((dataReceived) => {
			this.recivedData = dataReceived;
			for (let breed in this.recivedData.message) {
				if (this.recivedData.message[breed].length) {
					for (let secondBreed of this.recivedData.message[breed]) this.dogBreed.push(`${secondBreed} ${breed}`);
				} else this.dogBreed.push(breed);
			}
		});
		return this.dogBreed;
	}

}