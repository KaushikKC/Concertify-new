'use client'

import React from 'react';
import { AnonAadhaarProvider } from '@anon-aadhaar/react';

const Provider = ({ children }) => {
  return (
    <AnonAadhaarProvider>
      {children}
    </AnonAadhaarProvider>
  );
};

export default Provider;
