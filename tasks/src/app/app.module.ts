import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleButtonComponent } from './simple-button/simple-button.component';
import { OrderedListComponent } from './ordered-list/ordered-list.component';

@NgModule({
	declarations: [
		AppComponent,
		SimpleButtonComponent,
		OrderedListComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }