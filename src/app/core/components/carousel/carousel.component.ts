import { ResponsiveFacade } from '@medium-stories/responsive';
import { Observable, Subject, interval } from 'rxjs';

import { isPlatformBrowser } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    PLATFORM_ID,
} from '@angular/core';

import { startWith, switchMap, tap } from 'rxjs/operators';

import { ICarouselOptions } from '@shared/models/carousel-options.interface';

const OPTIONS_DEFAULT: ICarouselOptions = {
    slides: [],
    active: 0,
    hide: null,
    interval: 6000,
    indicators: true,
};

@Component({
    selector: 'npx-cv-ssr-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
    /**
     * Promo carousel options
     */
    options: ICarouselOptions | null = null;

    /**
     * Watch
     */
    watch$!: Observable<number>;

    /**
     * Change slide
     */
    changeSlide$ = new Subject<number>();

    @Input() set config(options: Partial<ICarouselOptions | null>) {
        this.options = { ...OPTIONS_DEFAULT, ...options };
        if (isPlatformBrowser(this._platformId)) {
            this.watch$ = this.changeSlide$.pipe(
                startWith(-1),
                switchMap((index) => {
                    if (this.options && index >= 0) {
                        this.options.hide = this.options?.active;
                        this.options.active = index;
                    }
                    return interval(this.options?.interval).pipe(
                        tap(() => {
                            if (this.options && !window.document.hidden) {
                                if (
                                    this.options.active + 1 ===
                                    this.options.slides.length
                                ) {
                                    this.options.hide =
                                        this.options.slides.length - 1;
                                    this.options.active = 0;
                                } else {
                                    this.options.hide = this.options.active;
                                    this.options.active++;
                                }
                            }
                        }),
                    );
                }),
            );
        }
    }

    constructor(
        public responsiveFacade: ResponsiveFacade,
        @Inject(PLATFORM_ID) private _platformId: Object,
    ) {}

    onScroll(): void {
        if (isPlatformBrowser(this._platformId)) {
            const anchor = window.document.getElementById(
                this.options.scrollAnchor,
            );
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
