import { Component, Input, OnInit } from '@angular/core';

import { UserModel } from "../user.model";
import { OrderTypeEnum } from "../task-status.enum";
import { UserService } from '../shared/service/user.service';

@Component({
	selector: 'user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	@Input()
	public users: UserModel[] = [];

	public orderType = OrderTypeEnum;

	public constructor(
		private userService: UserService,

	) { }

	public ngOnInit(): void {
		this.users = this.userService.getUsers();
		console.log(this.users);
	}

	public handleDeleteUser(deleteUserId: number): void {
		this.users = this.userService.removeUser(deleteUserId);
	}

	public handleAddUserClick(): void {
		this.users = this.userService.addUser();
	}

	public handleCheckboxChangeStatus(selectedUserId: number): void {
		this.userService.addSelectedUser(selectedUserId);
	}

	public handleGetNumberOfSelectedUsers(): number {
		return this.userService.getSelectedUsers().length;
	}

	public handleDeleteSelectedUsersClick(): void {
		this.users = this.userService.deleteAllSelectedUsers();
	}
}
