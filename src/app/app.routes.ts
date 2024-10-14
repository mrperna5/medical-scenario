import { Routes } from '@angular/router';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { MedicalHistoryResultsComponent } from './medical-history/medical-history-results/medical-history-results.component';
import { MedicalHistoryDiagnosisComponent } from './medical-history/medical-history-diagnosis/medical-history-diagnosis.component';
import { ExaminationComponent } from './examination/examination.component';
import { ExaminationResultsComponent } from './examination/examination-results/examination-results.component';
import { ExaminationDiagnosisComponent } from './examination/examination-diagnosis/examination-diagnosis.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { LaboratoryResultsComponent } from './laboratory/laboratory-results/laboratory-results.component';
import { LaboratoryDiagnosisComponent } from './laboratory/laboratory-diagnosis/laboratory-diagnosis.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { FollowUpResultsComponent } from './follow-up/follow-up-results/follow-up-results.component';
import { FollowUpDiagnosisComponent } from './follow-up/follow-up-diagnosis/follow-up-diagnosis.component';
import { SummaryComponent } from './summary/summary.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { IntroductionComponent } from './introduction/introduction.component';

export const routes: Routes = [
    {
        path: '', 
        component: IntroductionComponent
    },
    {
        path: 'introduction',
        component: IntroductionComponent
    },
    {
        path: 'scenario',
        component: ScenarioComponent
    },
    {
        path: 'medical-history',
        component: MedicalHistoryComponent
    },
    {
        path: 'medical-history-results',
        component: MedicalHistoryResultsComponent
    },
    {
        path: 'medical-history-diagnosis',
        component: MedicalHistoryDiagnosisComponent
    },
    {
        path: 'examination',
        component: ExaminationComponent
    },
    {
        path: 'examination-results',
        component: ExaminationResultsComponent
    },
    {
        path: 'examination-diagnosis',
        component: ExaminationDiagnosisComponent
    },
    {
        path: 'laboratory',
        component: LaboratoryComponent
    },
    {
        path: 'laboratory-results',
        component: LaboratoryResultsComponent
    },
    {
        path: 'laboratory-diagnosis',
        component: LaboratoryDiagnosisComponent
    },
    {
        path: 'follow-up',
        component: FollowUpComponent
    },
    {
        path: 'follow-up-results',
        component: FollowUpResultsComponent
    },
    {
        path: 'follow-up-diagnosis',
        component: FollowUpDiagnosisComponent
    },
    {
        path: 'summary',
        component: SummaryComponent
    }
];
