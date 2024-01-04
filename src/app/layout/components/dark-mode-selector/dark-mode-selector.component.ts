import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { setModeSuccess } from '@layout/store/dark-mode-store/dark-mode.actions';
import { darkModeSelector } from '@layout/store/dark-mode-store/dark-mode.selectors';
import { IDarkMode } from '@layout/store/model/dark-mode.interface';

import { localStorageService } from '@shared/services/localstorage/local-storage.service';

@Component({
    selector: 'npx-cv-ssr-dark-mode-selector',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dark-mode-selector.component.html',
    styleUrls: ['./dark-mode-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeSelectorComponent {
    public isChecked$ = this._store$.pipe(select(darkModeSelector));
    constructor(
        private readonly _localStorageService: localStorageService,
        private _store$: Store<IDarkMode>,
    ) {}

    public changeView($event: Event): void {
        this._store$.dispatch(
            setModeSuccess((<HTMLInputElement>$event.target).checked),
        );
        this._localStorageService.setMode(this.isChecked$.toString());
    }
}
