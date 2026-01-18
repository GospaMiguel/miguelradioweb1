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
    <section id={id} className="py-12 md:py-16 px-2 md:px-4 scroll-mt-20 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-5xl w-full">
        <ArcText text={title} className="mb-8 md:mb-12" />
        <Card className="bg-black text-white p-4 md:p-8 lg:p-12 shadow-2xl border-2 border-primary/30 backdrop-blur-sm w-full">
          {children}
        </Card>
      </div>
    </section>
  );
};
