import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleButtonComponent } from './simple-button/simple-button.component';

@NgModule({
	declarations: [
		AppComponent,
		SimpleButtonComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }