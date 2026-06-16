import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Screen } from './types';
import { Dashboard } from './screens/Dashboard';
import { Activity } from './screens/Activity';
import { Sleep } from './screens/Sleep';
import { Profile } from './screens/Profile';
import { DataLog } from './screens/DataLog';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [direction, setDirection] = useState<number>(0);

  const navigate = (to: Screen) => {
    // Basic logic for "push" vs "none" transitions
    // In prototypes, usually push means a side-slide
    const screensOrder: Screen[] = ['dashboard', 'activity', 'sleep', 'log', 'profile'];
    const fromIndex = screensOrder.indexOf(currentScreen);
    const toIndex = screensOrder.indexOf(to);
    
    setDirection(toIndex > fromIndex ? 1 : -1);
    setCurrentScreen(to);
  };

  const pageVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 50 : (dir < 0 ? -50 : 0),
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -50 : (dir < 0 ? 50 : 0),
    }, { duration: 0.15 }),
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard': return <Dashboard onNavigate={navigate} />;
      case 'activity': return <Activity />;
      case 'sleep': return <Sleep />;
      case 'profile': return <Profile />;
      case 'log': return <DataLog />;
      default: return <Dashboard onNavigate={navigate} />;
    }
  };

  return (
    <div className="bg-surface min-h-screen selection:bg-primary/30 selection:text-primary">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentScreen}
          custom={direction}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>

      <BottomNav 
        currentScreen={currentScreen} 
        onNavigate={(screen) => {
          setDirection(0); // Tabs use fade/none basically
          navigate(screen);
        }} 
      />
    </div>
  );
}
