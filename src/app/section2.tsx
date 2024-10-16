import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Section2 = () => (
    <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
                <div className="bg-muted rounded-md w-full aspect-video h-full flex-1 relative">
                    <Image
                        src="/2.jpeg"
                        alt="wide"
                        fill={true}
                        className="rounded-md object-cover "
                    />
                </div>
                <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
                    <div>
                        <Badge>Discover</Badge>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                            Discover Japan Through Its Language
                        </h2>
                        <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                            A simple greeting can open a window to a world of new experiences
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);