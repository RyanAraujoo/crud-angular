import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleMockService } from 'src/app/shared/services/vehicle/vehicle-mock.service';
import { Vehicle } from './../../../shared/model/Vehicle.model';
import { Observable, first, of } from 'rxjs';
import { MessageCode } from 'src/app/shared/model/message-code';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
  dataVehicle$: Observable<Vehicle[]> = of([])
  constructor(private vehicleService: VehicleMockService,private route: Router) {}
  deleteMessageCode?: MessageCode

  ngOnInit(): void {
   this.dataVehicle$ = this.vehicleService
    .getDataVehicle()
  }

  redirectNewVehicle () {
    this.route.navigateByUrl('/cadastrar-veiculo');
  }

  redirectEditVehicle(id: number | null) {
    this.route.navigateByUrl(`/editar-veiculo/${id}`);
  }

  removeVehicle(id: number | null) {
    this.vehicleService.deleteDataVehicle(id)
    .pipe(first())
    .subscribe(
      (data: MessageCode) => { this.deleteMessageCode = data},
      (error: MessageCode) => {this.deleteMessageCode = error}
    )
  }
}
