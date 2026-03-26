import { Separator } from "@pillar-ui/core";
import PointList from "../core/point-list";

export default function Constat() {
  return (
    <div className="slide-inner">
      <div className="eyebrow">Le problème</div>
      <h2>
        Des soins à domicile <span className="accent">fragmentés</span>
      </h2>
      <Separator />
      <PointList
        items={[
          { id: "coordination", item: "Coordination informelle via WhatsApp & appels" },
          { id: "protocols", item: "Absence de protocoles standardisés" },
          { id: "suivi", item: "Suivi centralisé inexistant" },
          { id: "charge", item: "Charge organisationnelle élevée pour les familles" },
        ]}
      />
      <div className="pill">⚠ Le problème est organisationnel, pas seulement médical</div>
    </div>
  );
}
