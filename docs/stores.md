Digitalus CMS Stores
====================

Digitalus uses NGRX to manage app state. [Learn More](https://ngrx.io/guide/store)

Creating your own state features
---------------------------------

You can use NGRX schematics to generate new features:

```shell
cd src/app/modules/my-feature/module/store
ng generate @ngrx/schematics:feature myFeature --module ../my-feature.module.ts
```

This will generate the following files (plus tests)

* [my-feature.actions.ts](https://ngrx.io/guide/store/actions)
* [my-feature.effects.ts](https://ngrx.io/guide/effects)
* [my-feature.reducer.ts](https://ngrx.io/guide/store/reducers)
* [my-feature.selectors.ts](https://ngrx.io/guide/store/selectors)

Next import the `StoreModule` and `EffectsModule` into your module.

```typescript
// src/app/modules/my-feature/my-feature.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMyFeature from './store/my-feature.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MyFeatureEffects } from './store/my-feature.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMyFeature.myFeatureFeatureKey, fromMyFeature.reducer),
    EffectsModule.forFeature([MyFeatureEffects])
  ]
})
export class MyFeatureModule { }
```

Then import your module into your app module:

```typescript
// src/app/app.module.ts
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    // other imports
    MyFeatureModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: PERSISTENCE, useValue: 'session' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
