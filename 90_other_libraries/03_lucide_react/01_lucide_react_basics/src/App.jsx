import { Home, Settings, User } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Lucide React Basics</h1>
      <p>Here are some basic icons imported from <code>lucide-react</code>.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <Home size={48} />
          <span>Home</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <User size={48} />
          <span>User</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <Settings size={48} />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}

export default App;
