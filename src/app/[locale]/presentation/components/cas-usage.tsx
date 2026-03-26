import CompareColumn from "../core/compare-column";
export default function CasUsage() {
  return (
    <div className="slide-inner">
      <div className="eyebrow">Exemple réel</div>
      <h2>
        Patiente diabétique, <span className="accent">plaie au pied</span>
      </h2>
      <div className="compare-row" style={{ marginTop: 28 }}>
        <CompareColumn
          type="bad"
          heading="Sans Sanad Care"
          items={[
            { id: "infection", item: "❌ Infection passe inaperçue" },
            { id: "plaie", item: "❌ Plaie s'aggrave" },
            { id: "complications", item: "❌ Complications élevées" },
            { id: "reaction", item: "❌ Réaction tardive" },
          ]}
        />
        <CompareColumn
          type="good"
          heading="Avec Sanad Care"
          items={[
            { id: "etat-initial", item: "✓ État initial documenté" },
            { id: "evolutions", item: "✓ Évolutions suivies" },
            { id: "famille", item: "✓ Famille mieux informée" },
            { id: "reaction", item: "✓ Réaction immédiate" },
          ]}
        />
      </div>
    </div>
  );
}
