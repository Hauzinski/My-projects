import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { Item, VideoDataInterface } from 'src/app/core/models/youtube-api.model';

@Injectable()
export class GetVideoDataService {
  // private apiKey: string = 'AIzaSyBWrP4EwVwKHY2ZJXm4o0oa_z4j4ttE7hA';
  private apiKey: string = 'AIzaSyA1i2_U2pt47w5g-cm-fJfgkRAz2vYqqgA';
  // private apiKey: string = 'AIzaSyD7wJHmdLTLm1Gfv_B89Zg-IGsbn3Bnkfk';

  private maxResults: number = 0;

  private text: string = '';

  private videoUrl: string = `https://youtube.googleapis.com/youtube/v3/search?key=${this.apiKey}&part=snippet&type=video&maxResults=${this.maxResults}&q=${this.text}`;

  private videoDataUrl: string = `https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}&part=snippet,statistics&id=`;

  private videoData: Item[] = [];

  private typingTimer!: ReturnType<typeof setTimeout>;

  private doneTypingInterval = 750;

  private minCharactersForSearch = 3;

  constructor(private http: HttpClient, private router: Router) {}

  public getData(): Item[] {
    return this.videoData;
  }

  public getVideoById(id: string): Observable<Item[]> {
    return this.http.get<VideoDataInterface>(this.videoDataUrl + id).pipe(
      map((videoData) => {
        return videoData.items;
      }),
      catchError(() => {
        return [];
      }),
    );
  }

  private getVideoData(): Observable<Item[]> {
    return this.http.get<VideoDataInterface>(this.videoUrl).pipe(
      map((videoData) => {
        return videoData.items.map((item) => {
          return item.id.videoId;
        });
      }),
      mergeMap((id: string[]) => {
        return this.getVideoById(id.join(','));
      }),
      catchError(() => {
        return [];
      }),
    );
  }

  private getSearchResults(text: string): void {
    this.maxResults = 24;
    this.text = text.toLocaleLowerCase().trim().replace(/ /gi, '+');
    this.videoUrl = `https://youtube.googleapis.com/youtube/v3/search?key=${this.apiKey}&part=snippet&type=video&maxResults=${this.maxResults}&q=${this.text}`;

    const subscription: Subscription = this.getVideoData().subscribe((data) => {
      this.videoData = data;
      subscription.unsubscribe();
    });
  }

  public search(value: string): void {
    if (value.length >= this.minCharactersForSearch) {
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(() => {
        this.getSearchResults(value);
        this.router.navigate(['main']);
      }, this.doneTypingInterval);
    }
  }
}
