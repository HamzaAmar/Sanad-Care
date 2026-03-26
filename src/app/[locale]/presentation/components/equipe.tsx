import TeamCard from "../core/team-card";

export default function Equipe() {
  return (
    <div className="slide-inner">
      <div className="eyebrow">Équipe</div>
      <h2>
        Une expertise <span className="accent">terrain</span>
        <br />
        au cœur du projet
      </h2>
      <TeamCard
        avatar="👨‍⚕️"
        name="Fondateur"
        type="Infirmier · 8 ans de terrain"
        tags={["Dialyse", "Oncologie", "Urgences", "Soins à domicile", "Protocoles cliniques"]}
      />
      <div className="pill" style={{ marginTop: 20 }}>
        Un produit construit depuis la réalité opérationnelle du secteur
      </div>
    </div>
  );
}
