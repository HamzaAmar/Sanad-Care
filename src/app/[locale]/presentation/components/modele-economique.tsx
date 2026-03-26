import RevenueCard from "../core/revenue-card";

const streams = [
  {
    id: "abonnements",
    icon: "👨‍👩‍👧",
    title: "Abonnements familiaux",
    subtitle: "Accès mensuel à la plateforme pour familles et prestataires",
    badge: "Récurrents",
  },
  {
    id: "commissions",
    icon: "💳",
    title: "Commissions",
    subtitle: "% sur chaque service de soins coordonné via la plateforme",
    badge: "Transactionnels",
  },
  {
    id: "saas",
    icon: "🏢",
    title: "Offres SaaS B2B",
    subtitle: "Solutions intégrées pour cliniques et centres médicaux",
    badge: "Entreprise",
  },
];

export default function ModeleEconomique() {
  return (
    <div className="slide-inner">
      <div className="eyebrow">Modèle économique</div>
      <h2>
        Revenus <span className="accent">hybrides</span>
      </h2>
      <div className="revenue-row">
        {streams.map((s) => (
          <RevenueCard key={s.id} icon={s.icon} title={s.title} subtitle={s.subtitle} badge={s.badge} />
        ))}
      </div>
    </div>
  );
}
