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
	private identity: number = 0;

	public ngOnInit(): void {
		this.prepareUsers();
		this.identity = Object.keys(this.users).length + 1;
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
			}
		]
	}

	public onDeleteUserId(deleteUserId: number) {
		this.users = this.users.filter((user: UserModel) => user.id !== deleteUserId);
	}
	public onButtonForInsertClicked(): void {
		let user: UserModel = {
			id: this.identity,
			name: "random-name",
			email: "random-emails"
		};
		this.users.push(user);
		this.identity++;
	}
}
