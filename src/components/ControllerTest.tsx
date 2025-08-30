import { useState } from 'react';

export default function ControllerTest() {
  const [testValue, setTestValue] = useState(0);
  const [lastAction, setLastAction] = useState('None');

  const handleNavigate = (direction: 'up' | 'down' | 'left' | 'right') => {
    console.log(`🎮 TEST NAVIGATION: ${direction}`);
    setLastAction(`Navigate: ${direction}`);
    
    switch (direction) {
      case 'up':
        setTestValue(prev => prev + 1);
        break;
      case 'down':
        setTestValue(prev => prev - 1);
        break;
      case 'left':
        setTestValue(prev => prev - 10);
        break;
      case 'right':
        setTestValue(prev => prev + 10);
        break;
    }
  };

  const handleSelect = () => {
    console.log('🎮 TEST SELECT');
    setLastAction('Select pressed');
    setTestValue(0);
  };

  const handleBack = () => {
    console.log('🎮 TEST BACK');
    setLastAction('Back pressed');
    setTestValue(prev => Math.floor(prev / 2));
  };

  return (
    <div className="fixed top-20 left-4 z-50 bg-gray-800 text-white p-4 rounded-lg max-w-xs">
      <h3 className="text-lg font-bold mb-3">🎮 Controller Test</h3>
      <div className="space-y-2 text-sm">
        <div>Test Value: <span className="text-yellow-400 font-bold">{testValue}</span></div>
        <div>Last Action: <span className="text-green-400">{lastAction}</span></div>
        <div className="mt-3 text-xs text-gray-400">
          <div>• Use D-Pad or Left Stick to navigate</div>
          <div>• A button to select (reset to 0)</div>
          <div>• B button to go back (divide by 2)</div>
        </div>
      </div>
    </div>
  );
}
