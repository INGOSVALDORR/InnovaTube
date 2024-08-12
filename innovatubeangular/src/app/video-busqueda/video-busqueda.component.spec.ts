import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBusquedaComponent } from './video-busqueda.component';

describe('VideoBusquedaComponent', () => {
  let component: VideoBusquedaComponent;
  let fixture: ComponentFixture<VideoBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoBusquedaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
