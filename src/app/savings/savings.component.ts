import { Component } from '@angular/core';
import { SavingsService } from './savings.service';

@Component({
  selector: 'ns-savings',
  templateUrl: './savings.component.html',
})
export class SavingsComponent {
  totalSavings: number;

  constructor(private savingsService: SavingsService) {
    this.totalSavings = this.savingsService.getTotalSavings();
  }
}