import SideBar from "./Components/SideBar";
import ExpensesMain from "./Pages/ExpensesMain";
import { ContextProvider } from "./Contexts/ContextProvider";
export default function App() {
  return (
    <ContextProvider>
      <main className="flex flex-row">
        <SideBar />
        <ExpensesMain />
      </main>
    </ContextProvider>
  );
}
