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
	@Output()
	public selectClick = new EventEmitter<number>();

	public handleDeleteClick(): void {
		this.deleteClick.emit(this.user?.id);
	}
	public handleCheckboxChangeStatus(): void {
		this.selectClick.emit(this.user?.id);
	}
}
