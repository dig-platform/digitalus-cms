import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagePage } from './manage.page';

const routes: Routes = [
  {
    path: '',
    component: ManagePage
  },
  {
    path: 'editor',
    loadChildren: () => import('./editor/editor.module').then( m => m.EditorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagePageRoutingModule {}
