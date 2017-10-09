import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeRoutingModule } from './resume-routing.module';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    ResumeRoutingModule,
    PdfViewerModule,
  ],
  declarations: [
    ResumeComponent,
  ],
})
export class ResumeModule { }
