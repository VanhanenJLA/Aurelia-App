import { bindable, inject } from 'aurelia-framework';
import { UserService } from '../user/user-service'
import { MockService } from '../../shared/mock-service';

@inject(UserService)
export class UserPage {

  @bindable user;
  tweets;

  constructor(userService) {

    let m = new MockService();

    this.userService = userService;
    this.user = this.userService.createUser(m.FirstName, m.LastName, m.handle, m.Bio, null, null);
    let comments = [
      this.userService.createComment(this.userService.createUser(m.FirstName, m.LastName, m.handle, m.Bio, null, null), m.Comment),
      this.userService.createComment(this.userService.createUser(m.FirstName, m.LastName, m.handle, m.Bio, null, null), m.Comment)
    ];

    let tweet = this.userService.createTweet(this.user,
      m.Tweet, comments);

    this.tweets = [tweet];
  }

  attached() {
    setInterval(() => {
      let m = new MockService();
      let comments = [
        this.userService.createComment(this.userService.createUser(m.FirstName, m.LastName, m.handle, m.Bio, null, null), m.Comment),
        this.userService.createComment(this.userService.createUser(m.FirstName, m.LastName, m.handle, m.Bio, null, null), m.Comment),
        this.userService.createComment(this.userService.createUser(m.FirstName, m.LastName, m.handle, m.Bio, null, null), m.Comment)
      ];
      this.tweets
        .push(this.userService.createTweet(this.user,
          m.Tweet, comments))
    }, 5000);
  }

}


