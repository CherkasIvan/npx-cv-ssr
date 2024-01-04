import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutContentComponent } from './components/about-content/about-content.component';
import { AboutPhotosComponent } from './components/about-photos/about-photos.component';

@Component({
    selector: 'npx-cv-ssr-about-page',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [AboutContentComponent, AboutPhotosComponent],
})
export class AboutMeComponent {}
