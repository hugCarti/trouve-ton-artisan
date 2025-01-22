import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanFormComponent } from './artisan-form.component';

describe('ArtisanFormComponent', () => {
  let component: ArtisanFormComponent;
  let fixture: ComponentFixture<ArtisanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
