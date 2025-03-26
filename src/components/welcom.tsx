import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface WelcomeCardProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc?: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ title, subtitle, imageSrc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card className="relative overflow-hidden h-[250px] p-5 mb-4 bg-gradient-to-br from-[#9B70D1] via-[#B4B4F5] to-[#9B70D1] text-white rounded-lg shadow-lg flex items-center">
        <div className="relative z-5 max-w-lg">
          <span className="px-3 py-1 text-sm font-semibold bg-white text-[var(--major-color-3)] rounded-full">
            Welcome
          </span>
          <CardHeader className="p-0 mt-2">
            <CardTitle className="text-4xl font-bold">{title}</CardTitle>
          </CardHeader>
          {subtitle && <p className="text-xl opacity-90 mt-1">{subtitle}</p>}
        </div>

        {imageSrc && (
          <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end">
            <div
              className="absolute inset-0 bg-contain bg-no-repeat bg-right"
              style={{ backgroundImage: `url(${imageSrc})` }}
            />

            <motion.div 
              className="absolute right-5 top-5 text-[var(--major-color-3)]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Sparkles size={32} />
            </motion.div>
          </div>
        )}
        {/* <div className="absolute inset-0 bg-white opacity-5 blur-lg" /> */}
      </Card>
    </motion.div>
  );
};

export default WelcomeCard;
