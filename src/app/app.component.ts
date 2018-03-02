import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { ModalService } from '@app/core/services/modal.service';
import { NotificationService } from '@app/core/services/notification.service';
import { AuthService, UserService } from '@app/shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private modalService: ModalService,
    private swUpdate: SwUpdate,
    private swPush: SwPush
  ) {
    auth.user$.subscribe(user => {
      if (user) {
        this.userService.save(user);
        const returnUrl = localStorage.getItem('returnUrl');

        if (returnUrl !== 'null') {
          localStorage.removeItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
      }
    });
  }

  ngOnInit() {

    // How abaut push notifications?
    // if (this.swPush.isEnabled) {
    //   this.swPush.requestSubscription({
    // tslint:disable-next-line:max-line-length
    //     serverPublicKey: 'AAAATfQfZoQ:APA91bHA3U0yTY_3UoBvaZ5pgbdFTxnsEVvK2QabgrRzY1nof7Qp7c9IfA2bubDmPpvZ01YS5azH39XBYjnSBAO9AGThRLnIMNRjix3ukB2ElTwTPJKG-1c3KgHqiZvx8VhwlPI3pVtJ'
    //   })
    //     .then(pushSubscription => {

    //       console.log(pushSubscription);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //     });
    // }

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        this.swUpdate.activateUpdate().then(() => {
          console.log('Update!!');
          this.modalService.confirm('Newer version is available!', 'Update?')
            .take(1)
            .filter(Boolean)
            .subscribe(() => window.location.reload());
        });
      });
    }
  }
}
