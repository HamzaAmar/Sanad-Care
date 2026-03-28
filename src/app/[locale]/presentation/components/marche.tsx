import StatCard from "../core/stat-card";

export default function Marche() {
  return (
    <div className="slide-inner">
      <div className="eyebrow">Marché</div>
      <h2>
        Un besoin <span className="accent">massif</span> au Maroc
      </h2>
      <div className="stat-row">
        <StatCard value="2.9M" label="adultes diabétiques<br/>(11.9% de la pop.)" />
        <StatCard value="27.5%" label="prévalence de l'hypertension<br/>chez les 18+" />
        <StatCard value="+148%" label="de personnes 60+<br/>d'ici 2050" />
      </div>
      <div className="pill" style={{ marginTop: 24 }}>
        Transition démographique : de 4.3M à 10.7M de seniors (2020 → 2050)
      </div>
    </div>
  );
}
