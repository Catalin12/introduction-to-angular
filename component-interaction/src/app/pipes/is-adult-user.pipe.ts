import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "isAdult" })
export class IsAdultUserPipe implements PipeTransform {
	public transform(userAge: number): boolean {
		return userAge < 18;
	}
}