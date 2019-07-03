import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  apiUrl: string = environment.API_ENDPOINT;
  artistId: number = 16586443;

  private songSource = new BehaviorSubject({});
  currentSong = this.songSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getArtistSongs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?id=${this.artistId}&entity=song`);
  }

  getArtistAlbums(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?id=${this.artistId}&entity=album`);
  }

  shareSong(song) {
    this.songSource.next(song);
  }

}
