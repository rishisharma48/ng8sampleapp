import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.css']
})
export class SongInfoComponent implements OnInit {
  song;

  constructor(
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.artistService.currentSong.subscribe(result => {
      console.log('In song info component ', result);
      this.song = result;
    })
  }

}
