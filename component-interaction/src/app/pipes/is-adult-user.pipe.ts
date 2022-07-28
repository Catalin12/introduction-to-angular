import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "isAdult" })
export class IsAdultUserPipe implements PipeTransform {
	public transform(userAge: number) {
		return userAge < 18;
	}
}