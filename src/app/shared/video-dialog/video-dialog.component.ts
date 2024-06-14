import { Component, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
    selector: 'app-video-dialog',
    templateUrl: './video-dialog.component.html',
    styleUrls: ['./video-dialog.component.css'],
    standalone: true,
    imports: [MatDialogTitle, MatIconButton, MatDialogClose, MatIcon, MatDialogContent]
})
export class VideoDialogComponent {
  videoUrl: SafeResourceUrl;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { videoId: string }, private sanitizer: DomSanitizer) {
    this.videoUrl = this.getVideoUrl(data.videoId);
  }

  getVideoUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}



