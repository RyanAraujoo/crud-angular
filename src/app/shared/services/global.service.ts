import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private router: Router) {}
  showAlertInterfaceResult(alert: string) { window.alert(alert) }

  reload(route: string) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([`${route}`]);
      });
  }
}
