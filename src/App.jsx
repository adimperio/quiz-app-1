import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppV1 from './v1/App';
import AppV2 from './v2/App';
import AppV3 from './v3/App';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif', gap: '20px', padding: '40px 20px', background: '#0b0c10', color: '#f4f1ea' }}>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2.2rem', marginBottom: '10px' }}>Select a Brand & Health Quiz</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}>
        <Link to="/brand-diagnostic" style={{ padding: '16px 24px', background: '#191c26', color: '#d4a373', border: '1px solid #d4a373', textDecoration: 'none', borderRadius: '8px', textAlign: 'center', fontWeight: '600', letterSpacing: '0.05em' }}>
          Is Your Brand Still Standing? (Brand Diagnostic)
        </Link>
        <Link to="/quiz-v1" style={{ padding: '14px 20px', background: '#1a2b3c', color: 'white', textDecoration: 'none', borderRadius: '8px', textAlign: 'center' }}>
          Home Health Quiz (V1)
        </Link>
        <Link to="/quiz-v2" style={{ padding: '14px 20px', background: '#ac4837', color: 'white', textDecoration: 'none', borderRadius: '8px', textAlign: 'center' }}>
          Women's InnerFitness Quiz (V2)
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand-diagnostic" element={<AppV3 />} />
        <Route path="/quiz-v3" element={<AppV3 />} />
        <Route path="/quiz-v1" element={<AppV1 />} />
        <Route path="/quiz-v2" element={<AppV2 />} />
      </Routes>
    </Router>
  );
}

export default App;

