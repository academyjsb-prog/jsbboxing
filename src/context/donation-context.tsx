'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DonationContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  openDonationDialog: () => void;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export const DonationProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDonationDialog = () => {
    setIsOpen(true);
  };

  return (
    <DonationContext.Provider value={{ isOpen, setIsOpen, openDonationDialog }}>
      {children}
    </DonationContext.Provider>
  );
};

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (context === undefined) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
};
