import {
  Directive,
  Input, OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/app';
import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';

@Directive({
  selector: '[appIsAdmin]'
})
export class IsAdminDirective implements OnInit, OnDestroy{
  condition: boolean;
  private sub: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private store: Store<AppState>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

  @Input() set isAdmin(isAdmin: boolean) {
    this.condition = isAdmin;
  }

  ngOnInit() {
    this.sub = this.store.select('profile').subscribe(profile => {
      this.viewContainer.clear();
      if (profile?.role === 'admin') {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }

}
