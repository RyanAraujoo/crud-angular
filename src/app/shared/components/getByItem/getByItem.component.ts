import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';
import { VehicleMockService } from '../../services/applications/vehicle/vehicle-mock.service';
import { Vehicle } from './../../model/Vehicle.model';

@Component({
  selector: 'app-getByItem',
  templateUrl: './getByItem.component.html',
  styleUrls: ['./getByItem.component.css']
})
export class GetByItemComponent implements OnInit {
  private stringSeach: Subject<string> = new Subject<string>()
  vehicle: Observable<Vehicle[]> = of([])
  valueOfSerach: string = ''
  @Output() vehicleOutput: EventEmitter<Observable<Vehicle[]>> = new EventEmitter<Observable<Vehicle[]>>()

  constructor(private vehicleService: VehicleMockService) {}

  ngOnInit(): void {
    this.stringSeach.next('');
  }

  getCaracterForRequest() {
  this.vehicle = this.stringSeach.pipe(
      distinctUntilChanged(),
      switchMap((str: string) => {
        if (str.trim() === '') {
          return this.vehicleService.getDataVehicle()
        }
          return this.vehicleService.getDataVehicleByPlaque(str)
      })
    )
      this.vehicleOutput.emit(this.vehicle)
  }

  seach(arg: string) {
    this.stringSeach.next(arg);
  }

  cleanSeacher(): void {
    this.stringSeach.next('');
  }


}
