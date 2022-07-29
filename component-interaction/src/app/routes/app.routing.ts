import { Routes } from "@angular/router";
import { NotFoundComponent } from "../not-found/not-found.component";
import { UserListComponent } from "../user-list/user-list.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";

export const AppRoutes: Routes = [
	{
		path: "users",
		component: UserListComponent
	},
	{
		path: "users/:id",
		component: UserProfileComponent
	},
	{
		path: "**",
		component: NotFoundComponent
	}
]