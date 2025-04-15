import { Directive, HostListener, inject } from '@angular/core';
import { BooleanService } from '../services/boolean.service';

@Directive({
  selector: '[appResizeTrack]',
})
export class ResizeTrackDirective {
  private readonly booleanService = inject(BooleanService);

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', []) onResize() {
    let userWidth = window.innerWidth;

    if (userWidth <= 768) {
      this.booleanService.enablePanel.next(false);
    } else {
      this.booleanService.enablePanel.next(true);
    }
  }
}
