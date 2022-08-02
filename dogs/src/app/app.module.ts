import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"


import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AppRoutes } from "./routes/app.routing";


@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(AppRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
