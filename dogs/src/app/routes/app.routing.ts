import { Routes } from "@angular/router";
import { BreedPageComponent } from "../breed-page/breed-page.component";

import { HomePageComponent } from "../home-page/home-page.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { SubBreedPageComponent } from "../sub-breed-page/sub-breed-page.component";

export const AppRoutes: Routes = [
	{
		path: "",
		component: HomePageComponent
	},
	{
		path: "breed/:breedName/:subBreed",
		component: SubBreedPageComponent
	},
	{
		path: "breed/:breedName",
		component: BreedPageComponent
	},
	{
		path: "not-found",
		component: NotFoundComponent
	},
	{
		path: "**",
		component: NotFoundComponent
	}
]