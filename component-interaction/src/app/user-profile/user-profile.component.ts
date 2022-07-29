import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/service/user.service';
import { UserModel } from '../user.model';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	public user?: UserModel;


	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
	) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			let userId = Number(params.get('id'));
			this.user = this.userService.getUserById(userId);

		});

		//console.log(this.route.snapshot.paramMap.("id"));
	}

}
