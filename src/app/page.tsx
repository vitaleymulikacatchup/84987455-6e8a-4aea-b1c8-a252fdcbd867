"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import CyclopsHero from '@/components/sections/layouts/hero/CyclopsHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import VerticalCardRoadmap from '@/components/sections/layouts/roadmap/VerticalCardRoadmap';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import LogoFooter from '@/components/sections/layouts/footer/LogoFooter';
import { LucideIcon } from 'lucide-react';

const styleVariant = "futuristicAndOutOfBox";
const colorTemplate = 1;
const textAnimation = "none";
const theme: SiteTheme = { styleVariant, colorTemplate, textAnimation };

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-n-1759146966377-36f1846d.jpg"
          logoWidth={150}
          logoHeight={100}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "Roadmap", id: "roadmap" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
          buttonText="Buy NebulaCoin"
          onButtonClick={() => {/* Handle button click */}}
          className="bg-transparent"
          buttonClassName="text-white"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <CyclopsHero
          title="NebulaCoin — Futuristic memecoin for a new era"
          subtitle="Quantum-speed transactions meet meme culture."
          primaryButtonText="Learn how to buy NebulaCoin"
          onPrimaryButtonClick={() => {/* Handle primary button click */}}
          characterImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/minimal-vector-mascot-for-nebulacoin-wai-1759146962697-6999ea41.jpg"
          characterImageAlt="NebulaCoin Mascot"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <BaseAbout
          title="Welcome to NebulaCoin"
          descriptions={[
            "NebulaCoin is a community-driven memecoin that blends meme culture with a sleek, space-age aesthetic.",
            "It emphasizes speed, transparency, and an open roadmap for growth."
          ]} 
        />
      </div>
      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <VerticalCardRoadmap
          title="Roadmap"
          items={[
            { title: "Launch & Community Build", description: "Grow a vibrant core group;" },
            { title: "Exchange Listings", description: "Expand accessibility;" },
            { title: "Governance Beta", description: "Introduce community-led decisions;" },
            { title: "Ecosystem Features", description: "Wallet integration and DApps;" },
            { title: "Partnerships", description: "Global outreach;" }
          ]} 
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          steps={[
            { position: "left", title: "Get a Wallet", description: "Choose a compatible crypto wallet;" },
            { position: "center", title: "Fund Your Wallet", description: "Acquire a base token on your preferred network;" },
            { position: "right", title: "Swap to NebulaCoin", description: "Use a decentralized exchange to swap for NebulaCoin;" }
          ]} 
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Here are the key stats of our tokenomics:"
          kpiItems={[
            { value: "Total Supply", description: "1,000,000,000", longDescription: "Total supply of NebulaCoin", icon: LucideIcon },
            { value: "Circulating Supply", description: "750,000,000", longDescription: "Circulating supply", icon: LucideIcon },
            { value: "Liquidity Pool", description: "200,000,000", longDescription: "Liquidity pool", icon: LucideIcon },
            { value: "Tax/Fee", description: "5%", longDescription: "Transaction tax rate", icon: LucideIcon },
            { value: "Burn Rate", description: "1%", longDescription: "Percentage that will be burned", icon: LucideIcon }
          ]} 
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <LogoFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-n-1759146966377-36f1846d.jpg"
          logoWidth={150}
          logoHeight={100}
          columns={[
            { title: "About", items: [{ label: "Tokenomics", onClick: () => {/* logic */} }, { label: "Roadmap", onClick: () => {/* logic */} }] },
            { title: "How to Buy", items: [{ label: "Buy", onClick: () => {/* logic */} }] },
            { title: "Privacy", items: [{ label: "Privacy Policy", onClick: () => {/* logic */} }] }
          ]}
          copyrightText="© 2023 NebulaCoin. All rights reserved."
          onPrivacyClick={() => {/* logic */}}
        />
      </div>
    </SiteThemeProvider>
  );
}
