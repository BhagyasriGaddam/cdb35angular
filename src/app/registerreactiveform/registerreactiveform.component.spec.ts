import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterreactiveformComponent } from './registerreactiveform.component';

describe('RegisterreactiveformComponent', () => {
  let component: RegisterreactiveformComponent;
  let fixture: ComponentFixture<RegisterreactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterreactiveformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
