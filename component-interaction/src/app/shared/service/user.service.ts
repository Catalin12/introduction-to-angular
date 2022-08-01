/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Injectable, OnInit } from "@angular/core";
import { UserModel } from "src/app/user.model";

@Injectable({ providedIn: "root" })
export class UserService {

	private users: UserModel[] = [];
	public selectedUserIds: number[] = [];

	private id: number = 0;

	constructor() {
		this.prepareUsers();
	}

	public prepareUsers(): void {
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
		this.id = Object.keys(this.users).length;
	}

	public getUsers(): UserModel[] {
		return this.users;
	}

	public addUser(): UserModel[] {
		this.users.push({
			id: this.id,
			name: "random-name",
			email: "random-emails",
			dateOfBirth: new Date()
		});
		this.id++;
		this.users = [...this.users]; //we do this to change the reference of the array in order to enforce the CD (change detection)
		return this.users;
	}

	public removeUser(deleteUserId: number): UserModel[] {
		this.users = this.users.filter((user: UserModel) => user.id !== deleteUserId);
		return this.users;
	}

	public addSelectedUser(selectedUserId: number): number[] {
		if (this.selectedUserIds.includes(selectedUserId)) {
			this.selectedUserIds = this.selectedUserIds.filter((userId) => userId !== selectedUserId);
		} else {
			this.selectedUserIds.push(selectedUserId);
		}
		return this.selectedUserIds;
	}

	public deleteAllSelectedUsers(): UserModel[] {
		if (confirm("Esti sigur ca vrei sa stergi userii selectati?")) {
			this.selectedUserIds.forEach((deleteUserId) => {
				this.users = this.users.filter((user: UserModel) => user.id !== deleteUserId);
			});
			this.selectedUserIds = [];
		}
		return this.users;
	}

	public getSelectedUsers(): number[] {
		return this.selectedUserIds;
	}

	public getUserById(userId: number): UserModel | undefined {
		return this.users.find(user => user.id === userId);
	}
}