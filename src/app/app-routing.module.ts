import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'velozes',
    loadChildren: () => import('./filmes/velozes/velozes.module').then( m => m.VelozesPageModule)
  },
  {
    path: 'a-barraca-do-beijo',
    loadChildren: () => import('./filmes/a-barraca-do-beijo/a-barraca-do-beijo.module').then( m => m.ABarracaDoBeijoPageModule)
  },
  {
    path: 'esquadrao',
    loadChildren: () => import('./filmes/esquadrao/esquadrao.module').then( m => m.EsquadraoPageModule)
  },
  {
    path: 'barraca2',
    loadChildren: () => import('./filmes/barraca2/barraca2.module').then( m => m.Barraca2PageModule)
  },
  {
    path: 'homem-aranha',
    loadChildren: () => import('./filmes/homem-aranha/homem-aranha.module').then( m => m.HomemAranhaPageModule)
  },
  {
    path: 'velozes8',
    loadChildren: () => import('./filmes/velozes8/velozes8.module').then( m => m.Velozes8PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
