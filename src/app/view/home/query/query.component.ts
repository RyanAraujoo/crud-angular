import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleMockService } from 'src/app/shared/services/applications/vehicle/vehicle-mock.service';
import { Vehicle } from './../../../shared/model/Vehicle.model';
import { Observable, first, of} from 'rxjs';
import { MessageCode } from 'src/app/shared/model/message-code';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
  dataVehicle$: Observable<Vehicle[]> = of([])
  constructor(
    private vehicleService: VehicleMockService,
    private route: Router,
    private global: GlobalService) {}
  deleteMessageCode?: MessageCode

  ngOnInit(): void {
    this.dataVehicle$ = this.vehicleService
    .getDataVehicle()
  }

  updateSearchVehicle(next: Observable<Vehicle[]>) {
    this.dataVehicle$ = next
  }

  redirectNewVehicle () {
    this.route.navigateByUrl('/cadastrar-veiculo');
  }

  redirectEditVehicle(id: number | null) {
    this.route.navigateByUrl(`/editar-veiculo/${id}`);
  }

  removeVehicle(id: number | null) {
    this.vehicleService.deleteDataVehicleById(id as number)
    .pipe(first())
    .subscribe(
      (sucess: MessageCode) => {
        this.deleteMessageCode = sucess
        setTimeout(() => {
          this.requiredAlert(sucess)
        }, 1000)
      },
      (error: MessageCode) => {
        this.deleteMessageCode = error
        setTimeout(() => {
          this.requiredAlert(error)
        }, 1000)
      }
    )
  }

  requiredAlert(typeMessage: MessageCode) {
    this.global.showAlertInterfaceResult(`${typeMessage.message}`)
    window.location.reload();
  }
}
