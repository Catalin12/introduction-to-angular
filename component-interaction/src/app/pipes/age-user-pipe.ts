import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "ageUser" })
export class AgeUserPipe implements PipeTransform {

	public transform(date: Date): number {
		return new Date().getFullYear() - date?.getFullYear();
	}
}