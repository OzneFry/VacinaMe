import { apiClient } from './client';

export async function getVaccines() {
  return apiClient('http://127.0.0.1:3000/vaccines');
}
