import SideBar from "./Components/SideBar";
import LoginMain from "./Components/LoginMain";
export default function App() {
  return (
    <main className="flex flex-row">
      <SideBar />
      <LoginMain />
    </main>
  );
}
