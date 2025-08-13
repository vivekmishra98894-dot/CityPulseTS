import React, { createContext, useState, ReactNode } from 'react';
import { I18nManager, Alert } from 'react-native';

type I18nContextType = {
  isRTL: boolean;
  toggleRTL: () => void;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [isRTL, setIsRTL] = useState(I18nManager.isRTL);

  const toggleRTL = () => {
    const next = !isRTL;
    try {
      I18nManager.forceRTL(next);
      setIsRTL(next);
      Alert.alert('RTL toggled', 'You may need to reload the app for full RTL layout.');
    } catch (e) {
      console.warn(e);
    }
  };

  return <I18nContext.Provider value={{ isRTL, toggleRTL }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
