import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'npx-cv-ssr-backgrounds',
    templateUrl: './backgrounds.component.html',
    styleUrls: ['./backgrounds.component.scss'],
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundsComponent {
    @Input() public isDarkBackground!: boolean | null;
}
