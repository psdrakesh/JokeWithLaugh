import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesDetailComponent } from './jokes-detail.component';

describe('JokesDetailComponent', () => {
  let component: JokesDetailComponent;
  let fixture: ComponentFixture<JokesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
