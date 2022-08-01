import { Routes } from "@angular/router";

import { HomePageComponent } from "../home-page/home-page.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { UserListComponent } from "../user-list/user-list.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";

export const AppRoutes: Routes = [
	{
		path: "",
		component: HomePageComponent
	},
	{
		path: "users",
		component: UserListComponent
	},
	{
		path: "user/:id",
		component: UserProfileComponent
	},
	{
		path: "about",
		component: NotFoundComponent
	},
	{
		path: "**",
		component: NotFoundComponent
	}
]