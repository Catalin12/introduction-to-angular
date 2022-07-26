import { Pipe, PipeTransform } from "@angular/core";

import { UserModel } from './user.model';

@Pipe({ name: "sortUsers" })
export class SortUsers implements PipeTransform {

	public transform(value: UserModel[], args?: string) {
		console.log(`sortUsers was called.`);
		if (args === "DSC") {
			return value.sort((user: UserModel, nextUser: UserModel) => nextUser.name.toLowerCase() < user.name.toLowerCase() ? -1 : nextUser.name.toLowerCase() > user.name.toLowerCase() ? 1 : 0);
		}
		return value.sort((user: UserModel, nextUser: UserModel) => user.name.toLowerCase() < nextUser.name.toLowerCase() ? -1 : user.name.toLowerCase() > nextUser.name.toLowerCase() ? 1 : 0);
	}
}