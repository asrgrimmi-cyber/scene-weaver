import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

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
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                onClick={() => navigate("/impact-cards")}
                className="bg-primary text-primary-foreground font-semibold px-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(0_72%_51%/0.5)]"
              >
                Impact Cards
              </Button>
              <Button
                onClick={() => navigate("/ue-sim")}
                className="bg-orange-500 text-white font-semibold px-6 transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
              >
                UE Sim
              </Button>
              <Button
                onClick={() => navigate("/network-emulator")}
                variant="outline"
                className="border-neutral-600 text-neutral-200 font-semibold px-6 transition-all duration-300 hover:scale-105 hover:bg-neutral-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
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
