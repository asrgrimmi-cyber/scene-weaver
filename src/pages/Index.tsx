import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-5xl h-[500px] bg-black/[0.96] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col md:flex-row h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Simnovus product builder
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              Build, simulate, and test next-gen telecom solutions with powerful
              emulation tools designed for speed and precision.
            </p>
            <div className="mt-6 flex gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
                UE Sim
              </Button>
              <Button variant="outline" className="border-neutral-600 text-neutral-200 hover:bg-neutral-800 font-semibold px-6">
                Network Emulator
              </Button>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
