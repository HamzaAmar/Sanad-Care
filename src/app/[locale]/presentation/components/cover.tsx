import StatCard from "../core/stat-card";
export default function Cover() {
  return (
    <div className="slide-inner">
      <div className="accent-glow" style={{ top: -80, right: -80 }} />
      <div className="cover-badge">Organized Home Care · Maroc</div>

      <h1>
        Sanad
        <br />
        <span className="accent">Care</span>
      </h1>

      <p className="cover-tagline">
        Structurer et sécuriser les soins à domicile au Maroc
      </p>

      <div className="stat-row" style={{ marginTop: 36 }}>
        <StatCard value="8 ans" label="d'expérience terrain" />
        <StatCard value="450k" label="MAD recherchés" />
        <StatCard value="2.9M" label="diabétiques au Maroc" />
      </div>
    </div>
  );
}
