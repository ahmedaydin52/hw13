import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldestandlatestbookComponent } from './oldestandlatestbook.component';

describe('OldestandlatestbookComponent', () => {
  let component: OldestandlatestbookComponent;
  let fixture: ComponentFixture<OldestandlatestbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldestandlatestbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldestandlatestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
