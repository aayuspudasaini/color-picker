"use client";
import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Paintbrush2 } from "lucide-react";
import {
  gradientColorList,
  imageList,
  solidColorList,
} from "@/constants/solid-colors";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

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

export const TextGradientGenerator = () => {
  const [text, setText] = React.useState<string>("Hello World!");

  const [background, setBackground] =
    React.useState<string>("linear-gradient()");

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <GradientPicker background={background} setBackground={setBackground} />
        <Input
          className="max-w-md"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </CardHeader>
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
          <TabsContent value="solid">
            <ScrollArea className="h-40">
              <div className="flex flex-wrap gap-0.5">
                {solidColorList.slice(0, 96).map((color) => (
                  <div
                    key={color}
                    className="w-6 h-6 rounded-md cursor-pointer hover:scale-105"
                    style={{ background: color }}
                    onClick={() => setBackground(color)}
                  ></div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="gradient">
            <ScrollArea className="h-40">
              <div className="flex flex-wrap gap-1">
                {gradientColorList.map((color) => (
                  <div
                    key={color}
                    className="w-6 h-6 rounded-md cursor-pointer hover:scale-105"
                    style={{ background: color }}
                    onClick={() => setBackground(color)}
                  ></div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="image" className="flex flex-wrap gap-1 ">
            <ScrollArea className="h-40">
              <div className="grid grid-cols-2 gap-1">
                {imageList.map((image) => (
                  <div
                    key={image}
                    className="w-32 h-12 rounded-md cursor-pointer hover:scale-105"
                    style={{ backgroundImage: image, backgroundSize: "cover" }}
                    onClick={() => setBackground(image)}
                  ></div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
        <Input
          className="text-xs h-10 text-foreground placeholder:text-muted-foreground truncate mt-2"
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          placeholder="Enter a value"
        />
      </PopoverContent>
    </Popover>
  );
};
