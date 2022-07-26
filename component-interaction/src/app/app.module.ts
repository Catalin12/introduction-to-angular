import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SortUsers } from './sort-users.pipe';
import { UserDetailsComponent } from "./user-details/user-details.component"
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
	declarations: [
		AppComponent,
		UserDetailsComponent,
		UserListComponent,
		SortUsers
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
