import { LineChart } from "@mui/x-charts";
import { Context } from "../Contexts/ContextProvider";
const fakeDate = [0, 1000, 2100, 3900, 6200];
const data = [];

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
export default function SavingsChart() {
  const { fakeDataStatus } = Context();
  return (
    <LineChart
      xAxis={[{ scaleType: "point", data: Labels }]}
      series={[
        {
          data: !fakeDataStatus ? fakeDate : data,
        },
      ]}
      width={950}
      height={300}
    />
  );
}
