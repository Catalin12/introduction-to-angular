import { Component, Input, OnInit } from '@angular/core';

import { UserModel } from '../user.model';

@Component({
	selector: 'user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	@Input()
	public users: UserModel[] = [];
	private id: number = 0;
	public selectedUserIds: number[] = [];

	public ngOnInit(): void {
		this.prepareUsers();
		this.id = Object.keys(this.users).length + 1;
	}

	private prepareUsers(): void {
		this.users = [
			{
				id: 1,
				name: "Catalin",
				email: "catalin@gmail.xyz"
			},
			{
				id: 2,
				name: "Mihai",
				email: "mihai@gmail.xyz"
			},
			{
				id: 3,
				name: "Daniel",
				email: "daniel@gmail.xyz"
			},
			{
				id: 4,
				name: "Iulia",
				email: "iulia@gmail.xyz"
			},
			{
				id: 5,
				name: "popina-florin",
				email: "popina-florin@gmail.xyz"
			},
			{
				id: 6,
				name: "gandore-mihai",
				email: "gandore-mh@gmail.xyz"
			},
			{
				id: 7,
				name: "Xin",
				email: "xin-china.io"
			}
		]
	}

	public handleDeleteUser(deleteUserId: number) {
		this.users = this.users.filter((user: UserModel) => user.id !== deleteUserId);
	}

	public handleAddUserClick(): void {
		let user: UserModel = {
			id: this.id,
			name: "random-name",
			email: "random-emails"
		};
		this.users.push(user);
		this.id++;
		this.users = [...this.users]; //we do this to sort again list with users
	}

	public handleCheckboxChangeStatus(selectedUserId: number): void {
		if (this.selectedUserIds.includes(selectedUserId)) {
			this.selectedUserIds = this.selectedUserIds.filter((userId) => userId !== selectedUserId);
		} else {
			this.selectedUserIds.push(selectedUserId);
		}
	}

	public handleDeleteSelectedUsersClick(): void {
		if (!confirm("Esti sigur ca vrei sa stergi userii selectati?")) {
			return;
		}
		this.selectedUserIds.forEach((deleteUserId) => {
			this.users = this.users.filter((user: UserModel) => user.id !== deleteUserId);
		});
		this.selectedUserIds = [];
	}
}
