import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[300px] md:h-[360px] lg:h-[420px] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#0B0B0B] to-[#1A1A1A]">
      <Spline
        scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 flex items-end p-6">
        <div className="backdrop-blur-sm bg-black/20 rounded-lg px-4 py-2 border border-white/10">
          <h1 className="text-white font-extrabold tracking-tight text-2xl md:text-3xl">
            Obsidian Fitness Admin
          </h1>
          <p className="text-white/70 text-sm md:text-base">
            A premium, confident control center for performance and growth.
          </p>
        </div>
      </div>
    </section>
  );
}
