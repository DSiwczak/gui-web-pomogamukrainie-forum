import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { CategoryRoutingName } from '@app/shared/models';
import { AccommodationSearchComponent } from './accommodation-search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AccommodationSearchComponent,
      },
      {
        path: CategoryRoutingName.NOT_FOUND,
        component: NotFoundComponent,
        loadChildren: () => import('../../shared/components/not-found/not-found.module').then((m) => m.NotFoundModule),
      },      
      {
        path: ':id',
        loadChildren: () =>
          import('../view-offer-accommodation/view-offer-accommodation.module').then(
            (m) => m.ViewOfferAccommodationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccomodationSearchRoutingModule {}
