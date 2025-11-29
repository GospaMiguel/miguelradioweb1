import { ArcText } from "./ArcText";
import { Card } from "./ui/card";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  colorAccent?: string;
}

export const Section = ({ id, title, children, colorAccent = "primary" }: SectionProps) => {
  return (
    <section id={id} className="py-16 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <ArcText text={title} className="mb-12" />
        <Card className="bg-card p-8 md:p-12 shadow-2xl border-2 border-border/50 backdrop-blur-sm">
          {children}
        </Card>
      </div>
    </section>
  );
};
