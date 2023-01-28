import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  vehicleForm: FormGroup = new FormGroup({
    cod_vehicle: new FormControl({value: '', disabled: true}),
    typeTruck: new FormControl("",[Validators.required]),
    registrationDate: new FormControl({value: new Date().toLocaleDateString('pt-BR'), disabled: true}),
    plaque: new FormControl("",[Validators.required]),
    color: new FormControl(""),
    year: new FormControl("",[Validators.required]),
    maximumWeight: new FormControl(""),
    typeFuel: new FormControl("", [Validators.required]),
    acquisitionKm: new FormControl("", [Validators.required]),
    chassis: new FormControl("",[Validators.required]),
    motor: new FormControl("",[Validators.required]),
    reindeer: new FormControl("",[Validators.required]),
    owner: new FormControl("",[Validators.required]),
    vehicleDocument: new FormControl("",[Validators.required]),
    vehiclePicture: new FormControl(""),
    description: new FormControl(""),
    rulesCheck: new FormControl(false,[Validators.required])
  })

  registrationDataCurrent() {
    
  }
}
