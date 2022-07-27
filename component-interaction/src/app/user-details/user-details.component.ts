import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserModel } from '../user.model';

@Component({
	selector: "user-details",
	templateUrl: "./user-details.component.html",
	styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent {
	@Input()
	public user?: UserModel;

	@Output()
	public onDelete = new EventEmitter<number>();

	@Output()
	public onSelect = new EventEmitter<number>();

	public handleDeleteClick(): void {
		this.onDelete.emit(this.user?.id);
	}

	public handleCheckboxChangeStatus(): void {
		this.onSelect.emit(this.user?.id);
	}
}
