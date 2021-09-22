import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPhraseComponent } from './start-phrase.component';

describe('StartPhraseComponent', () => {
  let component: StartPhraseComponent;
  let fixture: ComponentFixture<StartPhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPhraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
