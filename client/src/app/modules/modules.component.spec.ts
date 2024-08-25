import { Component, OnInit } from '@angular/core';
import { SampleApiService } from '../sample-api.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html'
})
export class ModulesComponent implements OnInit {

  message: string | null = null;
  loading = true;
  error: string | null = null;

  constructor(private apiService: SampleApiService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.message = await this.apiService.getData('/sample_json');
    } catch (err) {
      this.error = 'Failed to fetch data. Please try again later.';
    } finally {
      this.loading = false;
    }
  }

  async postData(): Promise<void> {
    const postData = { key: 'value' };
    try {
      await this.apiService.postData('/sample_json', postData);
      console.log('Data posted successfully');
    } catch (err) {
      console.error('Error posting data', err);
    }
  }
}
