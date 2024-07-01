import { ColorPicker, TextGradientGenerator } from "@/components/color-picker";

export default function Home() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">
        Fancy Gradient Picker built with Shadcn UI, Radix UI and Tailwind CSS.
      </h1>
      <p>
        Accessible and customizable gradient color picker component that you can
        copy and paste into your apps. Free. Open Source. And Next.js 13 Ready.
      </p>
      <ColorPicker />
    </section>
  );
}
