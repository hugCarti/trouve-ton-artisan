import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneePersComponent } from './donnee-pers.component';

describe('DonneePersComponent', () => {
  let component: DonneePersComponent;
  let fixture: ComponentFixture<DonneePersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonneePersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonneePersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
