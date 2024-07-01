"use client";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Paintbrush2 } from "lucide-react";
import {
  gradientColorList,
  imageList,
  solidColorList,
} from "@/constants/solid-colors";
import { cn } from "@/lib/utils";

interface GradientPickerProps {
  background: string;
  setBackground: (background: string) => void;
  className?: string;
}

export const ColorPicker = () => {
  const [background, setBackground] = React.useState<string>("#17183B");
  return (
    <Card className="rounded-md transition-all p-4 h-[400px]">
      <CardContent
        className="rounded-md h-full flex items-center justify-center !bg-center !bg-cover transition-all"
        style={{ background }}
      >
        <GradientPicker background={background} setBackground={setBackground} />
      </CardContent>
    </Card>
  );
};

export const GradientPicker = ({
  background,
  setBackground,
  className,
}: GradientPickerProps) => {
  const defaultTab = React.useMemo(() => {
    if (background.includes("gradient")) return "gradient";
    if (background.includes("url")) return "image";
    return "solid";
  }, [background]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "font-normal text-sm w-[220px] justify-start text-left",
            !background && "text-muted-foreground",
            className
          )}
        >
          <div className="w-full flex items-center gap-2">
            {background ? (
              <div
                className="w-4 h-4 rounded !bg-center !bg-cover"
                style={{ background }}
              ></div>
            ) : (
              <Paintbrush2 className="w-4 h-4" />
            )}
            <div className="truncate flex-1">
              {background ? background : "Pick a color"}
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="center" className="p-2.5">
        <Tabs className="w-full" defaultValue={defaultTab}>
          <TabsList className="w-full h-9">
            <TabsTrigger value="solid" className="flex-1 text-xs">
              Solid
            </TabsTrigger>
            <TabsTrigger value="gradient" className="flex-1 text-xs">
              Gradient
            </TabsTrigger>
            <TabsTrigger value="image" className="flex-1 text-xs">
              Image
            </TabsTrigger>
          </TabsList>
          <TabsContent value="solid" className="flex flex-wrap gap-1">
            {solidColorList.map((color) => (
              <div
                key={color}
                className="w-6 h-6 rounded-md cursor-pointer hover:scale-105"
                style={{ background: color }}
                onClick={() => setBackground(color)}
              ></div>
            ))}
          </TabsContent>
          <TabsContent value="gradient" className="flex flex-wrap gap-1">
            {gradientColorList.map((color) => (
              <div
                key={color}
                className="w-6 h-6 rounded-md cursor-pointer hover:scale-105"
                style={{ background: color }}
                onClick={() => setBackground(color)}
              ></div>
            ))}
          </TabsContent>
          <TabsContent value="image" className="flex flex-wrap gap-1 ">
            <div className="grid grid-cols-4 gap-1 -mt-4">
              {imageList.map((image) => (
                <div
                  key={image}
                  className="w-16 h-8 rounded-md cursor-pointer hover:scale-105"
                  style={{ backgroundImage: image, backgroundSize: "cover" }}
                  onClick={() => setBackground(image)}
                ></div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};
