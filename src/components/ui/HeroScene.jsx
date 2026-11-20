import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  FiBookOpen, FiBriefcase, FiClock, FiCloud, FiCode, FiCpu, FiDatabase, FiFileText,
  FiGitBranch, FiGlobe, FiHeart, FiHelpCircle, FiHome, FiKey, FiLayers, FiLock,
  FiMail, FiMessageSquare, FiPhone, FiSend, FiServer, FiShield, FiSmartphone,
  FiTarget, FiTerminal, FiTrendingUp, FiUsers, FiZap,
} from "react-icons/fi";

/*
 * Each variant gives the 3D cube its six faces and the floating chips around it.
 * The variant is picked from the route, so heroes only need <HeroScene />.
 */
const VARIANTS = {
  default: { faces: [FiCode, FiCloud, FiShield, FiDatabase, FiCpu, FiGlobe], chips: [FiSmartphone, FiLayers, FiZap, FiServer, FiGitBranch] },
  about: { faces: [FiUsers, FiTarget, FiGlobe, FiCpu, FiShield, FiZap], chips: [FiHeart, FiTrendingUp, FiCode, FiLayers, FiBriefcase] },
  services: { faces: [FiCode, FiSmartphone, FiCloud, FiLayers, FiServer, FiTerminal], chips: [FiGitBranch, FiDatabase, FiZap, FiShield, FiGlobe] },
  solutions: { faces: [FiLayers, FiDatabase, FiCpu, FiTrendingUp, FiCloud, FiCode], chips: [FiSmartphone, FiShield, FiServer, FiZap, FiGlobe] },
  industries: { faces: [FiBriefcase, FiBookOpen, FiHome, FiHeart, FiGlobe, FiTrendingUp], chips: [FiUsers, FiCpu, FiShield, FiLayers, FiCode] },
  contact: { faces: [FiMail, FiMessageSquare, FiSend, FiPhone, FiGlobe, FiUsers], chips: [FiClock, FiZap, FiTarget, FiCloud, FiShield] },
  security: { faces: [FiShield, FiLock, FiKey, FiServer, FiDatabase, FiCpu], chips: [FiCloud, FiTerminal, FiZap, FiGlobe, FiLayers] },
  help: { faces: [FiHelpCircle, FiMessageSquare, FiBookOpen, FiUsers, FiMail, FiShield], chips: [FiClock, FiGlobe, FiZap, FiFileText, FiPhone] },
  docs: { faces: [FiFileText, FiBookOpen, FiShield, FiLock, FiGlobe, FiLayers], chips: [FiServer, FiKey, FiCloud, FiDatabase, FiZap] },
};

const ROUTES = [
  ["/about", "about"], ["/services", "services"], ["/solutions", "solutions"], ["/case-studies", "solutions"],
  ["/industries", "industries"], ["/contact", "contact"], ["/start-a-project", "contact"], ["/security", "security"],
  ["/faq", "help"], ["/support", "help"], ["/careers", "about"], ["/resources", "docs"], ["/insights", "docs"],
  ["/privacy", "docs"], ["/terms", "docs"], ["/legal", "docs"],
];

const CHIP_SLOTS = ["c1", "c2", "c3", "c4", "c5"];

export default function HeroScene({ variant, align = "right" }) {
  const { pathname } = useLocation();
  const ref = useRef(null);
  const key = variant || ROUTES.find(([prefix]) => pathname.startsWith(prefix))?.[1] || "default";
  const { faces, chips } = VARIANTS[key] || VARIANTS.default;
  const faceNames = ["front", "back", "right", "left", "top", "bottom"];

  // Pointer parallax: write two CSS variables, no React re-render per move.
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let frame = 0;
    const onMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.setProperty("--mx", ((event.clientX / window.innerWidth) * 2 - 1).toFixed(3));
        node.style.setProperty("--my", ((event.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className="nts-hero-scene" data-align={align} aria-hidden="true">
      <div className="hs-aurora"><i /><i /><i /></div>
      <div className="hs-grid" />
      <div className="hs-stage">
        <div className="hs-world">
          <div className="hs-glow" />
          <div className="hs-ring hs-ring-a"><b /></div>
          <div className="hs-ring hs-ring-b"><b /></div>
          <div className="hs-cube-wrap">
            <div className="hs-cube">
              {faces.map((Icon, index) => (
                <div key={faceNames[index]} className={`hs-face hs-${faceNames[index]}`}><Icon /></div>
              ))}
            </div>
            <div className="hs-cube hs-cube-inner">
              {faceNames.map((name) => <div key={name} className={`hs-face hs-${name}`} />)}
            </div>
          </div>
          {chips.map((Icon, index) => (
            <div key={CHIP_SLOTS[index]} className={`hs-chip hs-${CHIP_SLOTS[index]}`}><Icon /></div>
          ))}
        </div>
      </div>
    </div>
  );
}
