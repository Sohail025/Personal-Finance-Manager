import { LineChart } from "@mui/x-charts";
import { Labels, fakeDashboardData } from "../Contexts/Variables";
import { useState, useEffect } from "react";
import { Context } from "../Contexts/ContextProvider";

export default function Chart({ children, gclass }) {
  const { incomeArray, expenseArray, savingsArray, fakeDataStatus } = Context();
  const dashboardChartArray = [
    { data: incomeArray },
    { data: expenseArray },
    { data: savingsArray },
  ];
  const savingsChartArray = [{ data: savingsArray }];
  const [dimensions, setDimensions] = useState({ width: 350, height: 400 });
  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth > 360) {
        setDimensions({ width: 360, height: 270 });
      }
      if (window.innerWidth > 640) {
        setDimensions({ width: 600, height: 270 });
      }
      if (window.innerWidth > 768) {
        setDimensions({ width: 700, height: 290 });
      }
      if (window.innerWidth > 1024) {
        setDimensions({ width: 950, height: 290 });
      }
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const data =
    children === "Dashboard" ? dashboardChartArray : savingsChartArray;
  return (
    <div className={`${gclass} flex justify-center`}>
      <LineChart
        className="w-32 h-32"
        xAxis={[{ scaleType: "point", data: Labels }]}
        series={!fakeDataStatus ? fakeDashboardData : data}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}
