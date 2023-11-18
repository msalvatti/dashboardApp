const fetchDashboardData = async (): Promise<any> => {
  const apiUrl = "https://dashboard-api-dusky.vercel.app/api/get";

  const headers: HeadersInit = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  };

  try {
    const response = await fetch(apiUrl, { headers });

    if (!response.ok) {
      throw new Error("Fetching Error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    const errorMessage = error as string;
    throw new Error(errorMessage);
  }
};

export { fetchDashboardData };
