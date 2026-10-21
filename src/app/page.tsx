import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";

// Reusable data for situations, fits, and coverage
const situations = [
  { icon: "🚧", title: "Perimeter Breaches", desc: "Observing and reporting individuals attempting to scale or cut fencing at facility borders." },
  { icon: "👤", title: "Unauthorized Access", desc: "Officers control only the access points they are authorized to staff; high-voltage and hazardous operational zones remain under facility personnel procedures." },
  { icon: "🔌", title: "Equipment Theft", desc: "Patrolling designated areas to help deter copper and equipment theft and report suspicious activity around maintenance yards and generator stations." },
  { icon: "🎨", title: "Vandalism", desc: "Patrolling solar arrays, transformers, and structures to help deter sabotage, graffiti, or damage and document incidents." },
  { icon: "📢", title: "Public Demonstrations", desc: "Observing perimeter activity, coordinating authorized site access, and documenting incidents per post orders during lawful demonstrations." },
  { icon: "🚚", title: "Vendor Verification", desc: "Managing check-ins, logging license plates, and verifying delivery authorization for arrivals per facility post orders." },
  { icon: "🔑", title: "Gate Control", desc: "Staffing authorized entrance checkpoints, checking security badges, and maintaining visitor logs." },
  { icon: "📡", title: "Remote Site Monitoring", desc: "Conducting scheduled patrol sweeps at isolated battery storage, wind farms, or unmanned substations as contracted." },
  { icon: "🌌", title: "After-Hours Patrols", desc: "Providing scheduled patrols or continuous on-site monitoring as specified in the client's service agreement." },
  { icon: "🚨", title: "Emergency Support", desc: "Notifying designated facility contacts and emergency services according to the facility emergency plan and contracted response procedure." },
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
  { service: "Remote Site Patrols", schedule: "Sample: 24/7 or Overnight", desc: "Scheduled mobile sweeps and perimeter observation at unmanned utility sites and substations per service agreement." },
  { service: "Gate Control & Verification", schedule: "Sample: Shift-Based", desc: "Credential checks, vendor logging, and badge verification at authorized energy facility gates." },
  { service: "Construction & Expansion Phase", schedule: "Sample: Temporary / Full-Time", desc: "On-site presence and patrols to help deter theft or damage to equipment, solar arrays, and transformers during build cycles." },
  { service: "Maintenance & Shutdown Support", schedule: "Sample: Flexible / Targeted", desc: "Supplemental staffing during high-activity maintenance windows or outage periods as contracted." },
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
            src="https://cms.secureguardservices.com/wp-content/uploads/2026/09/elc1.png"
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
              Secure Guard Security Services delivers disciplined, well-documented physical security to help deter unauthorized activity and support vital utility sites, substations, and energy facilities.
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
              Challenges of Protecting <span className={styles.titleAccent}>Critical Energy Infrastructure</span>
            </h2>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <p className={styles.bodyText}>
                Energy facilities often include high-value equipment, restricted access areas, utility infrastructure, remote locations, and operational systems that require consistent access control and observation.
              </p>
              <p className={styles.bodyText}>
                Security concerns can include unauthorized access, vandalism, equipment theft, public demonstrations near entry points, perimeter breaches, employee safety, and after-hours incidents.
              </p>
              <p className={styles.bodyText}>
                Clients need security personnel who understand that energy facility security requires discipline, accurate documentation, and adherence to written post orders.
              </p>
            </div>
            <div className={styles.whyCards}>
              {[
                { icon: "🚧", title: "Perimeter Breaches", desc: "Solar farms and remote utility fields cover wide, isolated areas vulnerable to fence intrusions." },
                { icon: "🔌", title: "Equipment Theft", desc: "High-value copper cabling, machinery, and energy components are frequent targets for organized theft." },
                { icon: "👤", title: "Unauthorized Entry", desc: "Unauthorized individuals near restricted or high-voltage zones pose serious safety and operational risks." },
                { icon: "📢", title: "Demonstrations & Vandalism", desc: "Separating lawful public demonstration activity from unlawful vandalism or security breaches through behavior-based observation, access coordination, and incident reporting." },
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
                src="https://cms.secureguardservices.com/wp-content/uploads/2026/09/elc2.png" 
                alt="Secure Guard officer conducting disciplined operations and controlled access verification at facility gate" 
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
                Secure Guard provides energy facility security officers for gate control, perimeter patrols, visitor and vendor verification, authorized area observation, exterior equipment checks, incident reporting, and emergency notification support. Standing guards, mobile patrols, and specialized assignments are provided as specified in the client&apos;s service agreement.
              </p>
              <p className={styles.bodyText}>
                Our officers complete required site-specific safety orientation, hazard awareness, and post-order procedures documented in the facility agreement. We provide visible deterrence, structured reporting, and professional accountability to support utility infrastructure operations.
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
            Coverage can be customized for remote sites, active facilities, construction phases, maintenance periods, or ongoing operations. Published schedules below are sample options; actual staffing levels, patrol frequencies, and coverage hours are defined by your written service agreement.
          </p>

          {/* Coverage Options Table */}
          <div className={styles.tableWrapper} id="coverage-table">
            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th>Coverage Type</th>
                  <th>Sample Schedule</th>
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
                By deploying Secure Guard, you gain a professional security partner focused on post-order compliance, safety awareness, and thorough incident documentation.
              </p>
            </div>
            <div className={styles.opsFeatures}>
              {[
                "Stronger access control at staffed entry points",
                "Visible deterrence around critical equipment",
                "Documented access and patrol activity",
                "Reduced risk of trespassing or vandalism",
                "Support for employees, vendors, and contractors",
                "Clear notification and escalation procedures",
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
              Facilities We <span className={styles.titleAccentGold}>Serve & Monitor</span>
            </h2>
            <p className={styles.sectionSubtextLight}>
              Our energy facility security services are tailored for a wide range of critical infrastructure and power generation sites.
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
