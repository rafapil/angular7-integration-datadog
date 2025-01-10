import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeMoneyComponent } from './poke-money.component';

describe('PokeMoneyComponent', () => {
  let component: PokeMoneyComponent;
  let fixture: ComponentFixture<PokeMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
