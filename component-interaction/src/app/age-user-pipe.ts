import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "ageUsers" })
export class AgeUserPipe implements PipeTransform {

	public transform(date: any, ...args: any[]): number {
		return new Date().getFullYear() - date.getFullYear();
	}
}