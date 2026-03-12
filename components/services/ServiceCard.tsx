"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { LucideIcon, Clock } from "lucide-react";

interface ServiceCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  before: string;
  after: string;
  timeSaved: string;
}

export default function ServiceCard({
  id, icon: Icon, title, description, before, after, timeSaved,
}: ServiceCardProps) {
  return (
    <motion.div
      id={id}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="rounded-2xl bg-bg-surface p-8 md:p-10 scroll-mt-24"
    >
      <div className="flex items-start gap-4 mb-6">
        <Icon size={22} className="text-text-tertiary shrink-0 mt-1" strokeWidth={1.5} />
        <div>
          <h3 className="text-2xl font-display font-bold">{title}</h3>
          <p className="mt-2 text-text-secondary leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="rounded-xl bg-white p-5 border border-border-light">
          <p className="text-xs text-text-tertiary uppercase tracking-wider mb-2">Avant</p>
          <p className="text-sm text-text-secondary">{before}</p>
        </div>
        <div className="rounded-xl bg-text-primary text-white p-5">
          <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Apres</p>
          <p className="text-sm">{after}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-accent font-medium">
        <Clock size={14} />
        <span>{timeSaved}</span>
      </div>
    </motion.div>
  );
}
