export async function apiClient<T = unknown>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return response.json() as Promise<T>;
}
