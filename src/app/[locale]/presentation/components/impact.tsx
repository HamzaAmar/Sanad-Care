import CompareColumn from "../core/compare-column";

export default function Impact() {
  return (
    <div className="slide-inner">
      <div className="eyebrow">Conséquences</div>
      <h2>
        La détérioration est <span className="accent">silencieuse</span>
      </h2>
      <div className="compare-row">
        <CompareColumn
          type="bad"
          heading="Sans structure"
          items={[
            { id: "decisions", item: "❌ Décisions dépendent du soignant" },
            { id: "protocols", item: "❌ Protocoles inégalement appliqués" },
            { id: "famille", item: "❌ Famille mal informée" },
            { id: "continuite", item: "❌ Continuité fragile" },
          ]}
        />
        <CompareColumn
          type="good"
          heading="Avec Sanad Care"
          items={[
            { id: "protocols", item: "✓ Protocoles systématiques" },
            { id: "documentation", item: "✓ Documentation à chaque acte" },
            { id: "famille", item: "✓ Famille en temps réel" },
            { id: "alertes", item: "✓ Alertes automatisées" },
          ]}
        />
      </div>
    </div>
  );
}
