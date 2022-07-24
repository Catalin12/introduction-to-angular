import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserModel } from '../user.model';

@Component({
	selector: 'user-details',
	templateUrl: './user-details.component.html',
	styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
	@Input()
	public user?: UserModel;

	@Output()
	public deleteClick = new EventEmitter<number>();

	public onDeleteUserId(): void {
		this.deleteClick.emit(this.user?.id)
	}
}
