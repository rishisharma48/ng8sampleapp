import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { HomeComponent } from './static-pages/home/home.component';
import { SongInfoComponent } from './artists/song-info/song-info.component';

const routes: Routes = [
  {
    path:  '',
    component:  MainComponent,
    children: [
      {
        path:  '',
        component:  HomeComponent
      },
      {
        path:  'song-info',
        component: SongInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
