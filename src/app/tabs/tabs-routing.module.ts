import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'themuseum',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../themuseum/themuseum.module').then(m => m.TheMuseumModule)
          }
        ]
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../history/history.module').then(m => m.HistoryModule)
          }
        ]
      },
      {
        path: 'collection',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../collection/collection.module').then(m => m.CollectionModule)
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../news/news.module').then(m => m.NewsModule)
          }
        ]
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../contact/contact.module').then(m => m.ContactModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/themuseum',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/themuseum',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
