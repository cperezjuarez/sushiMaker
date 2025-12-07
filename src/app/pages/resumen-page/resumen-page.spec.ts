import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPage } from './resumen-page';

describe('ResumenPage', () => {
  let component: ResumenPage;
  let fixture: ComponentFixture<ResumenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
