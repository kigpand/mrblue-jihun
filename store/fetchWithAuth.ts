// fetch 실행시 accessToken header에 담아서 보냄.
export async function fetchWithAuth(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const accessToken = localStorage.getItem("accessToken");
  const headers = new Headers(options.headers || {});

  if (accessToken) {
    headers.set("Authorization", `${accessToken}`);
  }

  return fetch(url, {
    ...options,
    headers,
  });
}
