import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })

export class ApiDogService {

	public constructor(private http: HttpClient) { }

	public getDogBreedNames(): Observable<Object> {
		return this.http.get("https://dog.ceo/api/breeds/list/all");
	}
}