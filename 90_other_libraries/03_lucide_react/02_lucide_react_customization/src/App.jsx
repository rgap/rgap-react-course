import { Camera } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Lucide React Customization</h1>
      <p>You can customize the color, size, and strokeWidth of the icons.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <Camera color="red" size={48} />
          <span>Red Color</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <Camera size={64} />
          <span>Size 64</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <Camera size={48} strokeWidth={1} />
          <span>strokeWidth 1</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <Camera size={48} strokeWidth={3} />
          <span>strokeWidth 3</span>
        </div>
      </div>
    </div>
  );
}

export default App;
