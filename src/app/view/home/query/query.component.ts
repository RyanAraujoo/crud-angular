import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent {

  constructor(private route: Router) {}

  redirectNewVehicle () {
    this.route.navigateByUrl('/cadastrar-veiculo');
  }
}
