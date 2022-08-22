import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"
import { AppComponent } from "./app.component";
import { ButtonModule } from "primeng/button";

import { HomePageComponent } from "./home-page/home-page.component";
import { AppRoutes } from "./routes/app.routing";
import { NotFoundComponent } from "./not-found/not-found.component";
import { BreedPageComponent } from "./breed-page/breed-page.component";
import { SubBreedPageComponent } from "./sub-breed-page/sub-breed-page.component";

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		NotFoundComponent,
		BreedPageComponent,
		SubBreedPageComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(AppRoutes),
		ButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
