import { LineChart } from "@mui/x-charts";
import { Context } from "../Contexts/ContextProvider";
const Labels = [
  0,
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];
export default function DashboardChart() {
  const { fakeDataStatus } = Context();
  const fakedata = [
    {
      data: [0, 3000, 3200, 3600, 4000],
    },
    {
      data: [0, 1000, 1100, 1800, 2300],
    },
    {
      data: [0, 2000, 2100, 1800, 1700],
    },
  ];
  const monthlyData = [];
  return (
    <LineChart
      xAxis={[{ scaleType: "point", data: Labels }]}
      series={!fakeDataStatus ? fakedata : monthlyData}
      width={950}
      height={300}
    />
  );
}
