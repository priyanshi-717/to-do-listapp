import './App.css';
import { LeftSidebar } from "./components/LeftSidebar";
import { MainWindow } from "./components/MainWindow";

export function App() {
  return (
    <div className='app'>
      <LeftSidebar />
      <MainWindow />
    </div>
  );
}
