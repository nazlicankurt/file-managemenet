import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class BaseComponent implements OnDestroy {
  destroyed$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

}
