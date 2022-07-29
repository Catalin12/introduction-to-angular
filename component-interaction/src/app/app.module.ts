import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { SortUserPipe } from "./pipes/sort-users.pipe";
import { AgeUserPipe } from './pipes/age-user-pipe';
import { UserDetailsComponent } from "./user-details/user-details.component"
import { UserListComponent } from "./user-list/user-list.component";
import { IsAdultUserPipe } from './pipes/is-adult-user.pipe';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes/app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
	declarations: [
		AppComponent,
		UserDetailsComponent,
		UserListComponent,
		SortUserPipe,
		AgeUserPipe,
		IsAdultUserPipe,
		NotFoundComponent,
		UserProfileComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(AppRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }