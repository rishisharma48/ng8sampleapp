import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  @Input() songs: any;

  constructor(
    private artistService: ArtistService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  info(song) {
    this.artistService.shareSong(song);
    this.router.navigateByUrl('/song-info');
  }

}
