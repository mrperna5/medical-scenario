import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TeamSummary } from './scenario/scenario-data/team-summary.model';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  private http = inject(HttpClient);
  private passwords = signal<Record<string, string>>({});
  private selectedSummaries = signal<TeamSummary[]>([]);

  loadPasswords() {
    this.http.get<Record<string, string>>('/passwords.json').subscribe({
      next: (data) => this.passwords.set(data),
      error: (err) => console.error('Failed to load passwords:', err),
    });
  }

  getPassword(key: string): string | undefined {
    return this.passwords()[key];
  }

  getUnlockedScenarioIds(): Observable<number[]> {
    return this.http.get<{ id: number; unlocked: boolean }[]>('/api/control').pipe(
      map((controls) => controls.filter(c => c.unlocked).map(c => c.id))
    );
  }

  getAllControls(): Observable<{ id: number; unlocked: boolean }[]> {
    return this.http.get<{ id: number; unlocked: boolean }[]>('/api/control');
  }

  updateControl(id: number, unlocked: boolean): Observable<{ id: number; unlocked: boolean }> {
    return this.http.post<{ id: number; unlocked: boolean }>(`/api/control/${id}?unlocked=${unlocked}`, {});
  }

  getAllSummaries(): Observable<TeamSummary[]> {
    return this.http.get<TeamSummary[]>('/api/summary');
  }

  setSelectedSummaries(summaries: TeamSummary[]) {
    this.selectedSummaries.set(summaries);
  }

  getSelectedSummaries() {
    return this.selectedSummaries;
  }

  deleteSummariesByIds(ids: number[]): Observable<void> {
    return this.http.delete<void>('/api/summary', {
      body: ids,
    });
  }




}
