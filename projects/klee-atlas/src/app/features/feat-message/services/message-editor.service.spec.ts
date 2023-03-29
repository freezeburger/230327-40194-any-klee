import { TestBed } from '@angular/core/testing';

import { MessageEditorService } from './message-editor.service';

describe('MessageEditorService', () => {
  let service: MessageEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
