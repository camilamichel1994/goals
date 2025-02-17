type SummaryResponse = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: string;
    }[]
  >;
};

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch("http://localhost:3333/summary");
  console.log("response", response);
  const data = await response.json();
  return data.summary;
}
