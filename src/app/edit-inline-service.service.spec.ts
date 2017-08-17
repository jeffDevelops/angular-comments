import { TestBed, inject } from '@angular/core/testing';

import { EditInlineServiceService } from './edit-inline-service.service';

describe('EditInlineServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditInlineServiceService]
    });
  });

  it('should be created', inject([EditInlineServiceService], (service: EditInlineServiceService) => {
    expect(service).toBeTruthy();
  }));
});
