import { Sidebar } from './components/Sidebar';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex">
        <Sidebar />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
