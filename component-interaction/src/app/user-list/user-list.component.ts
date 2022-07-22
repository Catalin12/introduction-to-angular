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
				name: "Catalin",
				email: "catalin@gmail.xyz"
			},
			{
				name: "Mihai",
				email: "mihai@gmail.xyz"
			},
			{
				name: "Daniel",
				email: "daniel@gmail.xyz"
			},
			{
				name: "Iulia",
				email: "iulia@gmail.xyz"
			},
			{
				name: "popina-florin",
				email: "popina-florin@gmail.xyz"
			},
			{
				name: "gandore-mihai",
				email: "gandore-mh@gmail.xyz"
			}

		]
	}
}
