import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            MADE BY TEAM SynapSix{" "}
            <Heart className="w-4 h-4 text-secondary fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};