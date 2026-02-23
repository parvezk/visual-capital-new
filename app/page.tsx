"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Twitter, Mail } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <main className="relative w-full overflow-hidden selection:bg-[#1E3A5F] selection:text-white">
      {/* HERO SECTION */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen w-full flex items-center justify-center bg-[#FAFAF9] px-6 md:px-12 lg:px-24 pt-12 pb-24 origin-top"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start text-left z-10">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#F3F4F6] mb-8">
              <span className="font-jetbrains font-semibold uppercase tracking-[0.2em] text-[14px] text-[#1E3A5F]">
                Visual Capital
              </span>
            </div>

            <h1 className="font-ibm-plex font-bold text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#6366F1] to-[#EC4899]">
                The visualization layer
              </span>
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#6366F1] to-[#EC4899]">
                for the agentic era
              </span>
            </h1>

            <p className="font-ibm-plex text-[18px] md:text-[20px] text-[#6B7280] max-w-[45ch] mb-10 leading-relaxed">
              An AI engine that generates context-aware, interactive data visualizations on demand.
              Not from predefined charts, but composed dynamically by AI that understands your data.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3 bg-[#1E3A5F] text-white rounded-lg font-ibm-plex font-medium text-[16px] shadow-lg shadow-[#1E3A5F]/20 transition-shadow hover:shadow-[#1E3A5F]/40"
              >
                Get Early Access
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "rgba(30, 58, 95, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3 bg-transparent text-[#1E3A5F] border border-[#1E3A5F] rounded-lg font-ibm-plex font-medium text-[16px] transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[4/3] lg:aspect-square flex items-center justify-center scale-110 lg:scale-125 origin-center"
          >
            <img
              src="/hero-illustration.png"
              alt="Visual Capital Illustration"
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback if image isn't uploaded yet
                e.currentTarget.src = "https://picsum.photos/seed/visual/800/600";
                e.currentTarget.className =
                  "w-full h-full object-cover rounded-2xl opacity-20 grayscale";
              }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="relative w-full bg-[#FFFFFF] py-24 md:py-32 px-6 md:px-12 lg:px-24 z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-24 max-w-3xl"
          >
            <h2 className="font-ibm-plex font-bold text-[32px] md:text-[40px] lg:text-[48px] text-[#1A1A1A] leading-tight mb-6">
              Every visualization is generated, not configured.
            </h2>
            <p className="font-ibm-plex text-[18px] md:text-[20px] text-[#6B7280] leading-relaxed">
              Think of it as a Visualization Engine as API, rendered as streaming UI components that
              any application can embed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0 }}
              whileHover={{ y: -2 }}
              className="bg-white p-8 rounded-xl shadow-md shadow-black/5 transition-all duration-300 hover:shadow-lg hover:shadow-black/10 flex flex-col"
            >
              <div className="w-8 h-8 bg-[#0D9488] mb-6 rounded-sm" />
              <h3 className="font-fira-code font-medium text-[18px] text-[#1A1A1A] mb-4">
                AI-Native
              </h3>
              <p className="font-ibm-plex text-[16px] text-[#6B7280] leading-relaxed">
                The AI doesn&apos;t pick a chart type. It determines the right interactive
                experience for each data signal: sankey diagrams, network graphs, geospatial maps,
                interactive drill-downs.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.08 }}
              whileHover={{ y: -2 }}
              className="bg-white p-8 rounded-xl shadow-md shadow-black/5 transition-all duration-300 hover:shadow-lg hover:shadow-black/10 flex flex-col"
            >
              <div className="w-8 h-8 bg-[#6366F1] mb-6 rounded-sm" />
              <h3 className="font-fira-code font-medium text-[18px] text-[#1A1A1A] mb-4">
                Embeddable SDK
              </h3>
              <p className="font-ibm-plex text-[16px] text-[#6B7280] leading-relaxed">
                A Visualization Engine as API. Any SaaS product can embed Visual Capital to make
                their data views intelligent, rendered as streaming React components.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.16 }}
              whileHover={{ y: -2 }}
              className="bg-white p-8 rounded-xl shadow-md shadow-black/5 transition-all duration-300 hover:shadow-lg hover:shadow-black/10 flex flex-col"
            >
              <div className="w-8 h-8 bg-[#EC4899] mb-6 rounded-sm" />
              <h3 className="font-fira-code font-medium text-[18px] text-[#1A1A1A] mb-4">
                Context-Aware
              </h3>
              <p className="font-ibm-plex text-[16px] text-[#6B7280] leading-relaxed">
                Every visualization is generated from your data&apos;s shape and the user&apos;s
                question. No configuration. No predefined templates. Just the right insight.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#FAFAF9] border-t border-[#E5E7EB] py-8 px-6 md:px-12 lg:px-24">
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-ibm-plex text-[14px] text-[#6B7280]">© 2026 Visual Capital</p>
          <div className="flex items-center gap-6 text-[#6B7280]">
            <a
              href="https://x.com/visualcapital_"
              className="hover:text-[#1E3A5F] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#1E3A5F] transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
