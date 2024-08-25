import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SampleApiService {

  private baseUrl = 'http://127.0.0.1:8000/api'; // Replace with your API base URL

  constructor() { }

  async getData(endpoint: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data', error);
      throw error; // Re-throw the error to handle it in the component
    }
  }

  async postData(endpoint: string, data: any): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data', error);
      throw error; // Re-throw the error to handle it in the component
    }
  }
}
