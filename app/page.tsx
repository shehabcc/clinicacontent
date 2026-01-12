export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        ClinicaContent
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Physician-curated content for modern healthcare organizations
      </p>

      <section>
        <h2>Our Services</h2>
        <h3>Residency Program Website Support</h3>
        <p>
          ACGME-aligned, recruitment-focused content for residency and fellowship programs.
        </p>

        <h3>Patient Education Handouts</h3>
        <p>
          Clear, health-literate, clinic-ready materials tailored to your patient population.
        </p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Pricing</h2>
        <ul>
          <li>Website Refresh: $750–$1,200</li>
          <li>Comprehensive Website Revamp: $2,500–$4,000</li>
          <li>Patient Handout Bundles: $400–$2,000</li>
        </ul>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Get Started</h2>
        <form>
          <input placeholder="Name" /><br /><br />
          <input placeholder="Organization" /><br /><br />
          <input placeholder="Email" /><br /><br />
          <textarea placeholder="Tell us about your needs" /><br /><br />
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
