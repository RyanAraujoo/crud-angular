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
  dataVehicle$?: Observable<Vehicle[]>
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
  redirectFunctionVehicle(id: number | null) {
    id === null ?  this.route.navigateByUrl('/cadastrar-veiculo') : this.route.navigateByUrl(`/editar-veiculo/${id}`)
  }

  removeVehicle(id: number | null) {
    this.vehicleService.deleteDataVehicleById(id as number)
    .pipe(first())
    .subscribe(
      (sucess: MessageCode) => {
        this.deleteMessageCode = sucess
          this.requiredAlert(sucess)
          this.reload()
      },
      (error: MessageCode) => {
        this.deleteMessageCode = error
          this.requiredAlert(error)
          this.reload()
      }
    )
  }

  requiredAlert(typeMessage: MessageCode) {
    this.global.showAlertInterfaceResult(`${typeMessage.message}`)
  }

  reload () {
    this.global.reload('consultar-veiculo')
  }
}
