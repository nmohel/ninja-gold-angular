import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActLogComponent } from './act-log.component';

describe('ActLogComponent', () => {
  let component: ActLogComponent;
  let fixture: ComponentFixture<ActLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
