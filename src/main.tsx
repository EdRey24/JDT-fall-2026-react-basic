import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './shared/App.css';

// Session 1 Imports
import Session1Starter from '../session-1/starter/App';
import Session1Solution from '../session-1/solution/App';

// Session 2 Imports
import Session2Starter from '../session-2/starter/App';
import Session2Solution from '../session-2/solution/App';

// Session 3 Imports
import Session3Starter from '../session-3/starter/App';
import Session3Solution from '../session-3/solution/App';

// Bonus Solution Import
import BonusSolution from '../bonus-features/solution/App';

function WorkshopLauncher() {
  const [activeView, setActiveView] = useState<string>('s3-solution');

  const renderActiveView = () => {
    switch (activeView) {
      case 's1-starter': return <Session1Starter/>;
      case 's1-solution': return <Session1Solution/>;
      case 's2-starter': return <Session2Starter/>;
      case 's2-solution': return <Session2Solution/>;
      case 's3-starter': return <Session3Starter/>;
      case 's3-solution': return <Session3Solution/>;
      case 'bonus-solution': return <BonusSolution/>;
      default: return <Session3Solution/>;
    }
  };

  return (
    <>
      <nav className="workshop-nav-bar">
        <label htmlFor="view-select"><strong>Workshop View:</strong></label>
        <select
          id="view-select"
          value={activeView}
          onChange={(e) => setActiveView(e.target.value)}
        >
          <option value="s1-starter">Session 1: Starter</option>
          <option value="s1-solution">Session 1: Solution</option>
          <option value="s2-starter">Session 2: Starter</option>
          <option value="s2-solution">Session 2: Solution</option>
          <option value="s3-starter">Session 3: Starter</option>
          <option value="s3-solution">Session 3: Solution</option>
          <option value="bonus-solution">Bonus Features (Complete)</option>
        </select>
      </nav>
      {renderActiveView()}
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WorkshopLauncher/>
  </StrictMode>
);