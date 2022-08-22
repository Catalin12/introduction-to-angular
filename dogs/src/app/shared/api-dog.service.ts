import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })

export class DogService {

	private dogURL = "https://dog.ceo/api/";

	public constructor(
		private http: HttpClient
	) { }

	public getBreedNames(): Observable<any> {
		return this.http.get(this.dogURL + "breeds/list/all");
	}

	public getBreedImage(breedName: string): Observable<any> {
		return this.http.get(this.dogURL + "breed/" + breedName + "/images/random");
	}

	public getSubBreedNames(breedName: string): Observable<any> {
		return this.http.get(this.dogURL + "breed/" + breedName + "/list")
	}

	public getSubBreedImage(breed: string, subBreed: string): Observable<any> {
		return this.http.get(this.dogURL + "breed/" + breed + "/" + subBreed + "/images/random");
	}
}