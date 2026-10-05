"use client";

import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from "@pillar-ui/core";

/**
 * Pillar's accordion uses hooks, so it is the page's one client island.
 * It receives plain strings from the server component.
 */
export function ServiceFaq({ items }: { items: Array<{ id: string; q: string; a: string }> }) {
  return (
    <Accordion collapsible separate corner="4">
      {items.map(({ id, q, a }) => (
        <AccordionItem key={id} value={id}>
          <AccordionButton className="faq--button">{q}</AccordionButton>
          <AccordionPanel className="faq--answer">{a}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ServiceFaq;
