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

	public ngOnInit(): void {
		this.prepareUsers();
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

	public handleDeleteClick(event: number) {
		console.log(`Delete use with index ${event}`);
	}
}
