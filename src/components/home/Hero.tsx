import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100 blur-3xl opacity-60" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-100 blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 py-2 md:py-2 lg:py-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}