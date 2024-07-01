import { siteConfig } from "@/config/site-config";
import Link from "next/link";
export default function NavigationBar() {
  return (
    <nav className="py-4 border-b sticky top-0 z-50">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="font-bold text-foreground text-xl">
          {siteConfig.title}
        </h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </nav>
  );
}
