import React, { useState, useEffect } from 'react';
import { TopHeader } from './components/TopHeader';
import { TopDrawer } from './components/TopDrawer';
import { NavigationBar } from './components/NavigationBar';
import { MainPage } from './components/MainPage';
import { FeaturesPage } from './components/FeaturesPage';
import { BrandInfoPage } from './components/BrandInfoPage';
import { Footer } from './components/Footer';
import { TabType, ThemeMode } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('main');
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Sync theme with document.documentElement
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    // TODO: Replace with GitHub repository link/path
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0E1012] text-black dark:text-white transition-colors">
      {/* Top Header: #D6F5F0 background, Logitech logo, Button_T theme toggle */}
      <TopHeader
        theme={theme}
        onToggleTheme={toggleTheme}
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={toggleDrawer}
      />

      {/* Top Drawer: cubic-bezier(.1, .1, .09, 1.01) over 1s animation */}
      <TopDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      {/* GNB Navigation Bar: #FFFFFF background, border: none, #D6F5F0 hover underline */}
      <NavigationBar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area: dynamically switched based on selected navigation button */}
      <div className="flex-1">
        {activeTab === 'main' && (
          <MainPage
            onNavigateToFeatures={() => {
              setActiveTab('features');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToBrand={() => {
              setActiveTab('brand');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'features' && <FeaturesPage />}

        {activeTab === 'brand' && <BrandInfoPage />}
      </div>

      {/* Footer */}
      <Footer onSelectTab={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
}
