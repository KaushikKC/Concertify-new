'use client'

import React, { ReactNode } from 'react'
// import { config, projectId, metadata } from './config'
import { polygonMumbai, polygonAmoy } from "wagmi/chains";

import { createWeb3Modal } from '@web3modal/wagmi/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { State, WagmiProvider } from 'wagmi'
import { defaultWagmiConfig } from '@web3modal/wagmi';

// Setup queryClient
const projectId = "9f524b160b89610f0f2e2758bccb1215";
const queryClient = new QueryClient()
const metadata = {
    name: "Concertify",
    description: "AppKit Example",
    url: "https://web3modal.com", // origin must match your domain & subdomain
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  };
  

const chains = [polygonMumbai, polygonAmoy];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});



if (!projectId) throw new Error('Project ID is not defined')

// Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export default function AppKitProvider({
  children,
  initialState
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}