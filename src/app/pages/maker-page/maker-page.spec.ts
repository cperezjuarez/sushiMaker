import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerPage } from './maker-page';

describe('MakerPage', () => {
  let component: MakerPage;
  let fixture: ComponentFixture<MakerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakerPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
