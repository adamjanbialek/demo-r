import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-on-offer',
  templateUrl: './on-offer.component.html',
  styleUrls: ['./on-offer.component.scss']
})
export class OnOfferComponent implements AfterViewInit {
  curSlide = 0;
  sliderLength = 0;
  @ViewChildren('sliderItem') sliderItems!: QueryList<ElementRef>;
  @ViewChild('btnLeft') btnLeft!: ElementRef;
  @ViewChild('btnRight') btnRight!: ElementRef;

  ngAfterViewInit(): void {
    this.sliderItems.forEach((s, i) => {
      s.nativeElement.style.transform = `translateX(${i * 100}%)`;
    });
    this.sliderLength = this.sliderItems.length - 1;
    this.btnLeft.nativeElement.classList.add('disabled');
  }

  clickLeft() {
    if (this.curSlide !== 0) {
      ++this.curSlide;
    }
    if (this.curSlide !== 0) {
      this.btnLeft.nativeElement.classList.remove('disabled');
    } else {
      this.btnLeft.nativeElement.classList.add('disabled');
    }
    this.sliderItems.forEach((s, i) => {
      s.nativeElement.style.transform = `translateX(${(this.curSlide + i) * 100}%)`;
      this.btnRight.nativeElement.classList.remove('disabled');
    });
  }

  clickRight() {
    if (this.curSlide !== -1 * this.sliderLength) {
      --this.curSlide;
    }
    if (this.curSlide !== -1 * this.sliderLength) {
      this.btnRight.nativeElement.classList.remove('disabled');
    } else {
      this.btnRight.nativeElement.classList.add('disabled');
    }
    this.sliderItems.forEach((s, i) => {
      s.nativeElement.style.transform = `translateX(${(this.curSlide + i) * 100}%)`;
      this.btnLeft.nativeElement.classList.remove('disabled');
    });
  }
}
