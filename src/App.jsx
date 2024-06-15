import Home from "./Pages/Home";
import DashBoardMain from "./Pages/DashboardMain";
import IncomeMain from "./Pages/IncomeMain";
import ExpensesMain from "./Pages/ExpensesMain";
import SavingsMain from "./Pages/SavingsMain";
import LoginMain from "./Pages/LoginMain";
import { ContextProvider } from "./Contexts/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ContextProvider>
      <main className="flex flex-row">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/Dashboard" element={<DashBoardMain />} />
            <Route path="/Income" element={<IncomeMain />} />
            <Route path="/Expenses" element={<ExpensesMain />} />
            <Route path="/Savings" element={<SavingsMain />} />
            <Route path="/Login" element={<LoginMain />} />
          </Routes>
        </BrowserRouter>
      </main>
    </ContextProvider>
  );
}
