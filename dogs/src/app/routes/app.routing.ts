import { Routes } from "@angular/router";
import { HomePageComponent } from "../home-page/home-page.component";


export const AppRoutes: Routes = [
	{
		path: "",
		component: HomePageComponent
	},
	{
		path: "**",
		component: HomePageComponent
	}
]