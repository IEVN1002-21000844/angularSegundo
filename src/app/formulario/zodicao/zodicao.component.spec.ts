import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodicaoComponent } from './zodicao.component';

describe('ZodicaoComponent', () => {
  let component: ZodicaoComponent;
  let fixture: ComponentFixture<ZodicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZodicaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZodicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
