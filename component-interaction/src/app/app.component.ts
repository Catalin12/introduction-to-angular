import { Component } from '@angular/core';
import { UserModel } from './user.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public users: UserModel[] = [];
}
