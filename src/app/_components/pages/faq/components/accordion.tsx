import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from "@pillar-ui/core";
import type { Faq } from "../faq.data";

type FaqComponent = Faq & { title: string };
interface FaqProps {
  faq: FaqComponent[];
}

const accordions = ({ faq }: FaqProps) => {
  return (
    <Accordion collapsible separate corner="4">
      {faq.map(({ key, question, answer, title }) => (
        <AccordionItem key={key} value={title}>
          <AccordionButton className="faq--button">{question}</AccordionButton>
          <AccordionPanel className="faq--answer">{answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default accordions;
