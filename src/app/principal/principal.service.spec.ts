import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrincipalService } from './principal.service';

describe('PrincipalService', () => {
  let service: PrincipalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PrincipalService]
    });
    service = TestBed.inject(PrincipalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
