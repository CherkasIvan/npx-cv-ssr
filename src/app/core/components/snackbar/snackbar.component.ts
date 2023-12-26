import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'npx-cv-ssr-snackbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './snackbar.component.html',
    styleUrl: './snackbar.component.scss',
})
export class SnackbarComponent {}
