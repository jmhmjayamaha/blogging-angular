import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJokesComponent } from './create-jokes.component';

describe('CreateJokesComponent', () => {
  let component: CreateJokesComponent;
  let fixture: ComponentFixture<CreateJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
