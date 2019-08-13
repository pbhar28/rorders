import { TestBed } from '@angular/core/testing';

import { OrdersDataService } from './orders-data.service';

describe('OrdersDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersDataService = TestBed.get(OrdersDataService);
    expect(service).toBeTruthy();
  });
});
