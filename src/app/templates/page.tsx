"use client";

import { useRouter } from "next/navigation";
import { useMissionStore } from "@/lib/store";
import { templates } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TemplatesPage() {
  const router = useRouter();
  const { guestCount, setSelectedTemplate } = useMissionStore();

  const handleSelectTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setSelectedTemplate(template);
      router.push("/cart");
    }
  };

  return (
    <div className="flex flex-col h-full px-6 pt-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-2">
          Curated Templates
        </h1>
        <p className="text-muted-foreground text-sm">
          Based on your mission for {guestCount} guests
        </p>
      </div>

      <div className="space-y-4 flex-1 pb-12">
        {templates.map((template, index) => {
          const isRecommended = index === 0;

          return (
            <Card key={template.id} className={`overflow-hidden transition-all ${isRecommended ? 'border-primary ring-1 ring-primary/20 shadow-md' : 'border-border'}`}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{template.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{template.vibe}</CardDescription>
                  </div>
                  {isRecommended && (
                    <Badge variant="default" className="bg-accent text-accent-foreground hover:bg-accent border-none font-semibold">
                      Recommended
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-foreground/80 mb-4">{template.summary}</p>
                <div className="bg-muted rounded-lg p-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Estimated Total</span>
                  <span className="font-semibold text-foreground">
                    ~${template.estimatedTotal} from {template.merchantCount} merchants
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleSelectTemplate(template.id)}
                  className={`w-full ${isRecommended ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                  size="lg"
                >
                  Use this template
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
