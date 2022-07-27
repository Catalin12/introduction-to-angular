import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { SortUserPipe } from "./sort-users.pipe";
import { AgeUserPipe } from './age-user-pipe';
import { UserDetailsComponent } from "./user-details/user-details.component"
import { UserListComponent } from "./user-list/user-list.component";

@NgModule({
	declarations: [
		AppComponent,
		UserDetailsComponent,
		UserListComponent,
		SortUserPipe,
		AgeUserPipe
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }