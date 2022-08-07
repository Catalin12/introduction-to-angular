import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })

export class DogService {


	public constructor(
		private http: HttpClient
	) { }

	public getDogBreedNames(): Observable<any> {
		return this.http.get("https://dog.ceo/api/breeds/list/all");
	}

	public getBreedImage(breed: string): Observable<any> {
		return this.http.get(`https://dog.ceo/api/breed/${breed}/images/random`);
	}

	public getSubBreeds(breed: string): Observable<any> {
		return this.http.get(`https://dog.ceo/api/breed/${breed}/list`)
	}
	public getSubBreedImage(breed: string, subBreed: string): Observable<any> {
		return this.http.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`);
	}
}