import { Badge } from "@/components/ui/badge";

export const Section3 = () => (
    <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
                <div className="flex gap-4 flex-col flex-1">
                    <div>
                        <Badge>Connect</Badge>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                            Language Connects Us
                        </h2>
                        <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                            With each word, you’re not just learning—you&apos;re connecting
                        </p>
                    </div>
                </div>
                <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
            </div>
        </div>
    </div>
);