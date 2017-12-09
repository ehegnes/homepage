import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'résumé',
    loadChildren: 'app/resume/resume.module#ResumeModule',
  },
  {
    path: 'my-setup',
    loadChildren: 'app/my-setup/my-setup.module#MySetupModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
