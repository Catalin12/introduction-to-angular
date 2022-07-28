import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { SortUserPipe } from "./pipes/sort-users.pipe";
import { AgeUserPipe } from './pipes/age-user-pipe';
import { UserDetailsComponent } from "./user-details/user-details.component"
import { UserListComponent } from "./user-list/user-list.component";
import { IsAdultUserPipe } from './pipes/is-adult-user.pipe';

@NgModule({
	declarations: [
		AppComponent,
		UserDetailsComponent,
		UserListComponent,
		SortUserPipe,
		AgeUserPipe,
		IsAdultUserPipe
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }