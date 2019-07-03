import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  songs: any[];

  constructor(
    private artistService: ArtistService
  ) { }

  ngOnInit() {    
    this.loadSongs();
  }

  loadSongs() {
    this.artistService.getArtistSongs().subscribe(result => {
      this.songs = result;
      console.log(this.songs)
    });
  }

}
