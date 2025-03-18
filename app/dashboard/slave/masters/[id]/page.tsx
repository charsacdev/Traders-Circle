import ChartComponent from "@/components/chart"

export default function MasterDetailPage() {
  return (
    <div>
      <h1>Master Detail Page</h1>
      <div className="h-[300px] w-full bg-muted rounded-md relative overflow-hidden">
        <ChartComponent
          type="line"
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "Monthly Return %",
                data: [15.2, 16.8, 14.5, 17.2, 18.5, 16.9, 19.2, 20.1, 18.7, 21.3, 19.8, 22.3],
                borderColor: "hsl(var(--primary))",
                backgroundColor: "hsl(var(--primary) / 0.1)",
                tension: 0.3,
                fill: true,
              },
              {
                label: "Win Rate %",
                data: [92, 92.5, 93, 93.2, 93.5, 93.8, 94, 94, 94.2, 94.3, 94.5, 94.8],
                borderColor: "hsl(var(--success))",
                backgroundColor: "transparent",
                tension: 0.3,
                fill: false,
                yAxisID: "y1",
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
            },
            scales: {
              y: {
                position: "left",
                title: {
                  display: true,
                  text: "Return %",
                },
              },
              y1: {
                position: "right",
                title: {
                  display: true,
                  text: "Win Rate %",
                },
                min: 80,
                max: 100,
                grid: {
                  drawOnChartArea: false,
                },
              },
            },
          }}
          height={300}
        />
      </div>
    </div>
  )
}

