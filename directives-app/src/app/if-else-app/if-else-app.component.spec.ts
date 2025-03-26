import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseAppComponent } from './if-else-app.component';

describe('IfElseAppComponent', () => {
  let component: IfElseAppComponent;
  let fixture: ComponentFixture<IfElseAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
