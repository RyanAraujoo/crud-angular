import { TestBed } from '@angular/core/testing';

import { GlobalService } from './global.service';

describe('GlobalService', () => {
  let service: GlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should render in message alert', () => {
    let spy = spyOn(service, "showAlertInterfaceResult")
    const message = "Veiculo Adicionado com Sucesso!"
    service.showAlertInterfaceResult(message)
    expect(spy).toHaveBeenCalledWith(message)
  })
});
