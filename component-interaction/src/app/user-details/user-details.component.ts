import { Component, Input } from '@angular/core';

import { UserModel } from '../user.model';

@Component({
	selector: 'user-details',
	templateUrl: './user-details.component.html',
	styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
	@Input()
	public user?: UserModel;
}
