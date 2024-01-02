import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EducationContentComponent } from './components/education-content/education-content.component';

@Component({
    selector: 'npx-cv-ssr-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [EducationContentComponent],
})
export class EducationComponent {}
