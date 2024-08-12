import { Component } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-busqueda',
  templateUrl: './video-busqueda.component.html',
  styleUrl: './video-busqueda.component.css'
})
export class VideoBusquedaComponent {

  videos: any[] = [];
  searchQuery: string = '';

  constructor(private youtubeService: YoutubeService, private sanitizer: DomSanitizer) { }

  search() {
    this.youtubeService.searchVideos(this.searchQuery).subscribe(response => {
      this.videos = response.items;
    });
  }
  getVideoUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }


}
