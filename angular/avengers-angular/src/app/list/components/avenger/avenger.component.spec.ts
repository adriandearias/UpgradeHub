import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengerComponent } from './avenger.component';

describe('AvengerComponent', () => {
  let component: AvengerComponent;
  let fixture: ComponentFixture<AvengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
