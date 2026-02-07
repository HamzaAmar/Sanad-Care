type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

export async function api<T>(domain: string, options: FetchOptions = {}): Promise<T | null> {
  // Allow returning null for 204 responses
  const { method = "GET", body, next = {} } = options;

  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const res = await fetch(`${domain}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    next,
  });

  if (!res.ok) {
    const json = await res.json();
    throw new Error(json.message);
  }
  if (res.status === 204) {
    return null;
  }

  return res.json();
}
