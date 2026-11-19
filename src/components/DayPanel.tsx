import SectionHeader from './SectionHeader';
import UnderConstruction from './UnderConstruction';

// El calendario y las tareas compartidas necesitan un backend.
// La versión anterior está en el historial de git (commit 2708b1b).
export default function DayPanel() {
  return (
    <section id="dia-a-dia" className="scroll-mt-24 bg-crema px-4 py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          icon="📅"
          title="Día a Día"
          subtitle="Las fechas que celebramos y las misiones del corazón."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <UnderConstruction icon="📅" title="Calendario de eventos especiales" />
          <UnderConstruction icon="✅" title="Tareas compartidas" />
        </div>
      </div>
    </section>
  );
}
