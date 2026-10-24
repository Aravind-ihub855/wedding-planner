/**
 * Frontend API client utility for connecting React components to App Router backend endpoints.
 */
export async function apiFetch<T = any>(endpoint: string, options: RequestInit = {}): Promise<{ data: T | null; error: string | null }> {
  try {
    const res = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    const data = await res.json();
    if (!res.ok) {
      return { data: null, error: data?.error || data?.message || 'API request failed' };
    }
    return { data, error: null };
  } catch (err: any) {
    console.error(`[apiFetch Error] ${endpoint}:`, err);
    return { data: null, error: err?.message || 'Network error' };
  }
}
