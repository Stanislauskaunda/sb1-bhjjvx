import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SavingsService {
  private totalSavings = 0;

  getTotalSavings(): number {
    return this.totalSavings;
  }

  addSavings(amount: number) {
    this.totalSavings += amount;
  }
}