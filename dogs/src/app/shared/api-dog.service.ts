import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })

export class DogService {


	public constructor(private http: HttpClient) { }

	public hasSubBreed(dogName: string): boolean {
		return dogName.indexOf(" ") > 0;
	}

	public getDogBreedNames(): Observable<any> {
		return this.http.get("https://dog.ceo/api/breeds/list/all");
	}

	public getBreedImage(breed: string): Observable<any> {
		const breedName: string = "";
		if (this.hasSubBreed(breed)) {
			const params: string[] = breed.split(" ");
			return this.http.get(`https://dog.ceo/api/breed/${params[0]}/${params[1]}/images/random`);
		}
		return this.http.get(`https://dog.ceo/api/breed/${breed}/images/random`);
	}
}