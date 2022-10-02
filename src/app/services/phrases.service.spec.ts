/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhrasesService } from './phrases.service';

describe('Service: Phrases', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhrasesService]
    });
  });

  it('should ...', inject([PhrasesService], (service: PhrasesService) => {
    expect(service).toBeTruthy();
  }));
});
