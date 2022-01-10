import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSlideComponent } from './content-slide.component';

describe('ContentSlideComponent', () => {
  let component: ContentSlideComponent;
  let fixture: ComponentFixture<ContentSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
