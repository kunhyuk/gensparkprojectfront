import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardListComponent } from './card-list.component';

import { NO_ERRORS_SCHEMA } from '@angular/compiler';
// import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
