import { siteConfig } from "@/config/site-config";
import { ThemeSwitcher } from "./theme-switcher";

export default function NavigationBar() {
  return (
    <nav className="py-4 border-b sticky top-0 z-50 bg-background">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <h1 className="font-bold text-foreground text-xl">
          {siteConfig.title}
        </h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
