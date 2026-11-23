"use client";

import { useState } from "react";
import { Plane, Building2, TrainFront, MapPin, ArrowRight, Users, Briefcase } from "lucide-react";
import { VEHICLES, FARE_ROUTES, EXTRA_FARES } from "@/data/transport/routesData";

function EndpointIcon({ label }: { label: string }) {
  const l = label.toLowerCase();
  const Icon = l.includes("airport") ? Plane : l.includes("train") ? TrainFront : l.includes("hotel") ? Building2 : MapPin;
  return <Icon size={15} className="flex-none text-gold" aria-hidden />;
}

/**
 * Interactive one-way route-fare table. Pick a vehicle category and the fares
 * update for that vehicle. Prices in SAR, per vehicle.
 */
export function RouteFareTable() {
  const [v, setV] = useState(0);
  const vehicle = VEHICLES[v];

  return (
    <div>
      {/* Vehicle selector */}
      <div className="no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1 dt:mx-0 dt:flex-wrap dt:justify-center dt:overflow-visible dt:px-0">
        {VEHICLES.map((veh, i) => (
          <button
            key={veh.key}
            type="button"
            onClick={() => setV(i)}
            aria-pressed={i === v}
            className={`flex-none rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-200 ${
              i === v
                ? "bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_12px_26px_-12px_rgba(219,183,37,0.8)]"
                : "bg-white/[0.07] text-white/80 ring-1 ring-white/15 hover:bg-white/[0.12]"
            }`}
          >
            {veh.name}
          </button>
        ))}
      </div>

      {/* Selected vehicle summary */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
        <span className="font-serif text-[19px] font-bold text-white dt:text-[21px]">{vehicle.name}</span>
        <span className="text-[13px] text-white/55">{vehicle.sub}</span>
        <span className="flex items-center gap-1.5 text-[13px] text-white/80"><Users size={15} className="text-gold" /> {vehicle.persons}</span>
        <span className="flex items-center gap-1.5 text-[13px] text-white/80"><Briefcase size={15} className="text-gold" /> {vehicle.luggage}</span>
      </div>

      {/* One-way fares */}
      <div className="mt-8 grid gap-2.5 dt:grid-cols-2 dt:gap-3">
        {FARE_ROUTES.map((r) => (
          <div
            key={r.from + r.to}
            className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 transition-colors hover:border-gold/40"
          >
            <div className="flex min-w-0 flex-1 items-center gap-2 text-[13px] text-white/85 dt:text-[13.5px]">
              <EndpointIcon label={r.from} />
              <span className="truncate">{r.from}</span>
              <ArrowRight size={13} className="flex-none text-white/35" aria-hidden />
              <EndpointIcon label={r.to} />
              <span className="truncate">{r.to}</span>
            </div>
            <div className="flex-none font-serif text-[16px] font-bold text-gold">
              {r.prices[v]}
              <span className="ml-1 font-sans text-[10.5px] font-medium text-white/50">SAR</span>
            </div>
          </div>
        ))}
      </div>

      {/* Ziyarat & day-trip fares */}
      <div className="mt-8">
        <div className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-gold">Ziyarat & day trips</div>
        <div className="grid gap-2.5 dt:grid-cols-2 dt:gap-3">
          {EXTRA_FARES.map((e) => (
            <div
              key={e.label}
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 transition-colors hover:border-gold/40"
            >
              <span className="min-w-0 flex-1 text-[13px] text-white/85 dt:text-[13.5px]">{e.label}</span>
              <div className="flex-none font-serif text-[16px] font-bold text-gold">
                {e.prices[v]}
                <span className="ml-1 font-sans text-[10.5px] font-medium text-white/50">SAR{e.unit ?? ""}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-[12.5px] font-light text-white/50">
        Prices are per vehicle in SAR and include tolls & taxes. A 25% deposit confirms airport pickups. Rates may vary with availability — confirm at booking.
      </p>
    </div>
  );
}
