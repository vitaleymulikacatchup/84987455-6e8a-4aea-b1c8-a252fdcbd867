use client
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import CyclopsHero from '@/components/sections/layouts/hero/SplitHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import VerticalCardRoadmap from '@/components/sections/layouts/roadmap/VerticalCardRoadmap';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import LogoFooter from '@/components/sections/layouts/footer/LogoFooter';

const theme: SiteTheme = {
  styleVariant: "futuristicAndOutOfBox",
  colorTemplate: 2,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-n-1759147784850-f0cce883.jpg"
          logoAlt="NebulaCoin Logo"
          logoWidth={200}
          logoHeight={50}
          navItems={[
            { name: "hero", id: "hero" },
            { name: "about", id: "about" },
            { name: "roadmap", id: "roadmap" },
            { name: "how-to-buy", id: "how-to-buy" },
            { name: "tokenomics", id: "tokenomics" },
            { name: "footer", id: "footer" },
          ]}
          buttonText="Buy NebulaCoin"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <CyclopsHero
          title="NebulaCoin — Futuristic memecoin for a new era"
          subtitle="Quantum-speed transactions meet meme culture. Transparent tokenomics, a bold roadmap, and a community that builds the future together."
          primaryButtonText="Learn how to buy NebulaCoin"
          characterImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/minimal-vector-mascot-for-nebulacoin-wai-1759147782807-f2e1416e.jpg"
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
          title="NebulaCoin Roadmap"
          items={[
            { title: "Launch & Community Build", description: "Grow a vibrant core group" },
            { title: "Exchange Listings", description: "Expand accessibility" },
            { title: "Governance Beta", description: "Introduce community-led decisions" },
            { title: "Ecosystem Features", description: "Wallet integration and DApps" },
            { title: "Partnerships", description: "Global outreach" },
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          steps={[
            { position: "left", image: "", title: "Get a wallet", description: "Choose a compatible crypto wallet" },
            { position: "center", image: "", title: "Fund your wallet", description: "Acquire a base token on your preferred network" },
            { position: "right", image: "", title: "Swap to NebulaCoin", description: "Use a decentralized exchange to swap for NebulaCoin" },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="NebulaCoin Tokenomics"
          description="Transparent and community-driven token allocation" 
          kpiItems={[
            { value: "1 Billion", description: "Total Supply", longDescription: "Total amount of NebulaCoin minted.", icon: "" },
            { value: "500 Million", description: "Circulating Supply", longDescription: "Current amount of NebulaCoins circulating in the market.", icon: "" },
            { value: "50 Million", description: "Liquidity Pool", longDescription: "Tokens allocated to provide liquidity on exchanges.", icon: "" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <LogoFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-n-1759147784850-f0cce883.jpg"
          logoAlt="NebulaCoin Logo"
          columns={[
            { title: "About", items: [{ label: "About", onClick: () => {} }, { label: "How to Buy", onClick: () => {} }] },
            { title: "Tokenomics", items: [{ label: "Tokenomics", onClick: () => {} }, { label: "Roadmap", onClick: () => {} }] },
            { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] },
          ]}
          copyrightText="© 2023 NebulaCoin. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}