import { Routes } from "@angular/router";

import { HomePageComponent } from "../home-page/home-page.component";
import { NotFoundComponent } from "../not-found/not-found.component";

export const AppRoutes: Routes = [
	{
		path: "",
		component: HomePageComponent
	},
	{
		path: "**",
		component: NotFoundComponent
	}
]