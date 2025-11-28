import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ Section - Common questions and answers
const faqs = [
  {
    question: "Qual é o prazo de entrega?",
    answer:
      "O prazo padrão é de 24 a 48 horas para a maioria dos projetos. Para grandes volumes (mais de 100 fotos) ou projetos complexos de diagramação, o prazo pode variar entre 3 a 5 dias úteis. Prazos expressos podem ser negociados mediante consulta.",
  },
  {
    question: "Quantas revisões estão incluídas?",
    answer:
      "Todas as edições incluem até 2 rodadas de revisão sem custo adicional. Queremos garantir que você fique 100% satisfeito com o resultado final. Ajustes adicionais podem ser realizados com valores a combinar.",
  },
  {
    question: "Como enviar as fotos?",
    answer:
      "Você pode enviar suas fotos através do WhatsApp (para projetos menores), Google Drive, Dropbox ou WeTransfer. Recomendamos o envio em alta resolução (JPEG ou RAW) para obter os melhores resultados.",
  },
  {
    question: "Em qual formato recebo as fotos editadas?",
    answer:
      "As fotos são entregues em JPEG de alta qualidade, otimizadas para impressão e uso digital. Se você precisar de outros formatos (como TIFF, PNG ou RAW editado), basta solicitar no momento do pedido.",
  },
  {
    question: "Vocês trabalham com fotos de eventos?",
    answer:
      "Sim! Atendemos fotógrafos profissionais, empresas e clientes particulares com edição de eventos como casamentos, formaturas, aniversários e eventos corporativos. Entre em contato para orçamentos personalizados para grandes volumes.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Aceitamos pagamento via PIX, transferência bancária ou cartão de crédito. Para projetos maiores, trabalhamos com 50% de entrada e 50% na entrega. Para edições menores, o pagamento é feito antecipadamente.",
  },
  {
    question: "Posso solicitar um estilo específico de edição?",
    answer:
      "Com certeza! Trabalhamos para atender suas preferências. Você pode enviar fotos de referência ou descrever o estilo desejado (clean, vintage, dramático, natural, etc.) e adaptaremos as edições de acordo.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Perguntas
            <span className="block text-accent">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 shadow-soft hover:shadow-medium transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
