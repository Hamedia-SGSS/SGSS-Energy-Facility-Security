import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";

// Reusable data for situations, fits, and coverage
const situations = [
  { icon: "🚧", title: "Perimeter Breaches", desc: "Deterring and detecting intruders attempting to scale or cut fencing at facility borders." },
  { icon: "👤", title: "Unauthorized Access", desc: "Enforcing strict access protocols to prevent entry into hazardous high-voltage zones." },
  { icon: "🔌", title: "Equipment Theft", desc: "Preventing copper theft, asset removal, and tool theft from maintenance yards and generator stations." },
  { icon: "🎨", title: "Vandalism", desc: "Protecting solar panels, transformers, and structures from sabotage, graffiti, or damage." },
  { icon: "📢", title: "Protest Activity", desc: "Maintaining peaceful perimeter control and protecting critical entry points during demonstrations." },
  { icon: "🚚", title: "Vendor Verification", desc: "Managing check-ins, logging license plates, and verifying delivery authorization for all arrivals." },
  { icon: "🔑", title: "Gate Control", desc: "Running entrance checkpoints, validating security badges, and tracking visitor logs." },
  { icon: "📡", title: "Remote Site Monitoring", desc: "Conducting regular sweeps at isolated battery storage, wind farms, or unmanned substations." },
  { icon: "🌌", title: "After-Hours Patrols", desc: "Ensuring 24/7 visual vigilance over facility machinery and perimeter lines overnight." },
  { icon: "🚨", title: "Emergency Support", desc: "Providing immediate coordination and escalation support in the event of operational outages or fires." },
];

const properties = [
  { icon: "⚡", label: "Utility Sites" },
  { icon: "🏭", label: "Power Facilities" },
  { icon: "☀️", label: "Solar Farms" },
  { icon: "🔋", label: "Energy Storage Sites" },
  { icon: "🔌", label: "Substations" },
  { icon: "🏗️", label: "Maintenance Yards" },
  { icon: "🌐", label: "Infrastructure Sites" },
  { icon: "🏢", label: "Critical Facility Locations" },
];

const coverageOptions = [
  { service: "Remote Site Patrols", schedule: "24/7 or Nights", desc: "Mobile sweeps and perimeter monitoring at unmanned utility sites and substations." },
  { service: "Gate Control & Verification", schedule: "Ongoing / Shift Focus", desc: "Credential checks, vendor logging, and badge verification at active energy facilities." },
  { service: "Construction & Expansion Phase", schedule: "Temporary / Full-Time", desc: "Protecting equipment, solar arrays, and transformers during initial build and installation cycles." },
  { service: "Maintenance & Shutdown Support", schedule: "Flexible / Targeted", desc: "Increased coverage during high-activity maintenance windows or outage response periods." },
];

export default function EnergyFacilitySecurityPage() {
  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== SECTION 1: HERO ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="/energy_facility_hero.png"
            alt="Secure Guard officer standing in front of a sleek modern energy facility substation at twilight"
            fill
            className={styles.heroBgImg}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge} id="hero-badge">
              <span className={styles.heroBadgeDot} />
              Energy Facility Security Services
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Protect Critical Infrastructure, Restricted Areas, Equipment, <span className={styles.heroTitleAccent}>and Operational Continuity</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard Security Services delivers disciplined, highly documented physical security to mitigate risk and defend vital utility sites, substations, and energy facilities.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="https://www.secureguardservices.com/contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                Request a Free Quote
              </a>
              <a 
                href="#solution" 
                className={styles.btnOutline} 
                id="hero-cta-secondary"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ===== SECTION 2: REAL-LIFE PROBLEM ===== */}
      <section className={styles.whySection} id="problem">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Real-Life Problem</span>
            <h2 className={styles.sectionTitle}>
              Challenges of protecting <span className={styles.titleAccent}>Critical Energy Infrastructure</span>
            </h2>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <p className={styles.bodyText}>
                Energy facilities often include high-value equipment, restricted access areas, utility infrastructure, remote locations, and operational systems that must remain protected.
              </p>
              <p className={styles.bodyText}>
                Security concerns can include unauthorized access, vandalism, theft, protest activity, perimeter breaches, employee safety, and after-hours incidents.
              </p>
              <p className={styles.bodyText}>
                Clients need security personnel who understand that energy facility security requires discipline, documentation, and controlled access.
              </p>
            </div>
            <div className={styles.whyCards}>
              {[
                { icon: "🚧", title: "Perimeter Breaches", desc: "Solar farms and remote utility fields cover wide, isolated areas vulnerable to fence intrusions." },
                { icon: "🔌", title: "Equipment Theft", desc: "High-value copper cabling, machinery, and energy components are frequent targets for organized theft." },
                { icon: "👤", title: "Unauthorized Entry", desc: "Intruders entering hazardous or high-voltage zones pose immense liability and safety risks." },
                { icon: "📢", title: "Protest & Vandalism", desc: "Public protest activity and active vandalism risk shutting down operation-critical infrastructure." },
              ].map((c) => (
                <div key={c.title} className={styles.whyCard}>
                  <div className={styles.whyCardIconWrapper}>
                    <span className={styles.whyCardIcon}>{c.icon}</span>
                  </div>
                  <div className={styles.whyCardContent}>
                    <h3 className={styles.whyCardTitle}>{c.title}</h3>
                    <p className={styles.whyCardDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SECURE GUARD SOLUTION ===== */}
      <section className={styles.addonSection} id="solution">
        <div className="container">
          <div className={styles.addonGrid}>
            <div className={styles.addonImageCol}>
              <Image 
                src="/energy_facility_patrol.png" 
                alt="Secure Guard officer checking security gates and fences at twilight" 
                width={600} 
                height={500} 
                className={styles.addonImage} 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.addonContent}>
              <span className={styles.sectionTag}>Secure Guard Solution</span>
              <h2 className={styles.sectionTitle}>
                Disciplined Operations & <span className={styles.titleAccent}>Controlled Access Verification</span>
              </h2>
              <p className={styles.bodyText}>
                Secure Guard provides energy facility security officers for gate control, perimeter patrols, visitor and vendor verification, restricted area monitoring, equipment checks, incident reporting, and emergency response support.
              </p>
              <p className={styles.bodyText}>
                Our officers undergo site-specific training focusing on safety rules, hazard identification, and strict logging protocols. We provide the visible deterrence and professional accountability required to defend utility infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CUSTOMIZABLE COVERAGE ===== */}
      <section className={styles.towerSection} id="coverage">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Customizable Coverage</span>
            <h2 className={styles.sectionTitleLight}>
              Flexible Security Scheduling <span className={styles.titleAccentGold}>for Operational Continuity</span>
            </h2>
          </div>
          <p className={styles.bodyTextCenteredLight}>
            Coverage can be customized for remote sites, active facilities, construction phases, maintenance periods, or ongoing operations. We scale our security footprint to match your project timeline.
          </p>

          {/* Coverage Options Table */}
          <div className={styles.tableWrapper} id="coverage-table">
            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th>Coverage Type</th>
                  <th>Schedule Focus</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {coverageOptions.map((row) => (
                  <tr key={row.service}>
                    <td className={styles.tdComponent}>{row.service}</td>
                    <td>
                      <span className={styles.badgeOptional}>{row.schedule}</span>
                    </td>
                    <td className={styles.tdDesc}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHAT THIS MEANS FOR THE CLIENT ===== */}
      <section className={styles.opsSection} id="benefits">
        <div className="container">
          <div className={styles.opsGrid}>
            <div className={styles.opsText}>
              <span className={styles.sectionTagLight}>Client Value</span>
              <h2 className={styles.sectionTitleLight}>
                What This Means <span className={styles.titleAccentGold}>for the Client</span>
              </h2>
              <p className={styles.bodyTextLight}>
                By deploying Secure Guard, you gain a professional partner dedicated to compliance, safety standards, and robust security documentation.
              </p>
            </div>
            <div className={styles.opsFeatures}>
              {[
                "Stronger control over restricted areas",
                "Better protection for critical equipment",
                "Documented access and patrol activity",
                "Reduced risk of trespassing or vandalism",
                "Support for employees, vendors, and contractors",
                "Clear escalation procedures",
                "Flexible coverage for operational and remote facilities",
              ].map((benefit, idx) => (
                <div key={idx} className={styles.opsFeatureItem}>
                  <span className={styles.opsFeatureIcon}>🛡️</span>
                  <span className={styles.opsFeatureLabel}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: COMMON SITUATIONS ===== */}
      <section className={styles.addonSectionAlt} id="situations">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Field Expertise</span>
            <h2 className={styles.sectionTitle}>
              Common Energy Facility <span className={styles.titleAccent}>Security Situations We Handle</span>
            </h2>
          </div>
          <div className={styles.situationsGrid}>
            {situations.map((sit, index) => (
              <div key={index} className={styles.situationCard}>
                <div className={styles.situationHeader}>
                  <span className={styles.situationIcon}>{sit.icon}</span>
                  <h3 className={styles.situationTitle}>{sit.title}</h3>
                </div>
                <p className={styles.situationDesc}>{sit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: BEST FIT FOR ===== */}
      <section className={`${styles.bestFitSection}`} id="best-fit">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Best Fit For</span>
            <h2 className={styles.sectionTitleLight}>
              Facilities We <span className={styles.titleAccentGold}>Secure & Monitor</span>
            </h2>
            <p className={styles.sectionSubtextLight}>
              Our specialized energy security program is optimized to secure a broad range of critical infrastructure and power development sectors.
            </p>
          </div>
          <div className={styles.propertiesGrid}>
            {properties.map((prop, idx) => (
              <div key={idx} className={styles.propertyCard}>
                <div className={styles.propertyIcon}>{prop.icon}</div>
                <span className={styles.propertyLabel}>{prop.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
