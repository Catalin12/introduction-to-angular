import { Component, Input, OnInit } from '@angular/core';

import { UserModel } from "../user.model";
import { OrderTypeEnum } from "../task-status.enum";

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
	public TaskStatus = OrderTypeEnum;

	public ngOnInit(): void {
		this.prepareUsers();
		this.id = Object.keys(this.users).length + 1;
	}

	private prepareUsers(): void {
		this.users = [
			{
				id: 1,
				name: "Catalin",
				email: "catalin@gmail.xyz",
				dateOfBirth: new Date(2000, 5, 11)
			},
			{
				id: 2,
				name: "Mihai",
				email: "mihai@gmail.xyz",
				dateOfBirth: new Date(2005, 11, 21)
			},
			{
				id: 3,
				name: "Daniel",
				email: "daniel@gmail.xyz",
				dateOfBirth: new Date(2010, 1, 3)
			},
			{
				id: 4,
				name: "Iulia",
				email: "iulia@gmail.xyz",
				dateOfBirth: new Date(1998, 3, 16)
			},
			{
				id: 5,
				name: "popina-florin",
				email: "popina-florin@gmail.xyz",
				dateOfBirth: new Date(1988, 5, 1)
			},
			{
				id: 6,
				name: "gandore-mihai",
				email: "gandore-mh@gmail.xyz",
				dateOfBirth: new Date(2003, 11, 8)
			},
			{
				id: 7,
				name: "Xin",
				email: "xin-china.io",
				dateOfBirth: new Date(1993, 12, 8)
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
			email: "random-emails",
			dateOfBirth: new Date()
		};
		this.users.push(user);
		this.id++;
		this.users = [...this.users]; //we do this to change the reference of the array in order to enforce the CD (change detection)
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
