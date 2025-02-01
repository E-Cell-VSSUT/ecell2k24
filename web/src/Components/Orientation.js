import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { poster, logo } from "../assets"
// import { X, Menu } from "lucide-react";

const Card = React.forwardRef(({ ...props }, ref) => (
  <div
    ref={ref}
    className="rounded-xl border bg-card text-card-foreground shadow"
    {...props} />
))

const CardHeader = React.forwardRef(({ ...props }, ref) => (
  <div
    ref={ref}
    className="flex flex-col space-y-1.5 p-6"
    {...props} />
))

const CardTitle = React.forwardRef(({ ...props }, ref) => (
  <div
    ref={ref}
    className="font-semibold leading-none tracking-tight"
    {...props} />
))

const CardContent = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} className="p-6 pt-0" {...props} />
))

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  return (
    (<button
      className={className}
      ref={ref}
      {...props} />)
  );
})

export default function Home() {
  const [timer, setTimer] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [showCountdown, setShowCountdown] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref = useRef();

  const eventDate = new Date("2025-02-12T17:00:00");

  function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    return {
      total,
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / (1000 * 60)) % 60),
      seconds: Math.floor((total / 1000) % 60),
    };
  }

  function startTimer(endTime) {
    const { total, days, hours, minutes, seconds } = getTimeRemaining(endTime);

    if (total >= 0) {
      setTimer({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    } else {
      clearInterval(ref.current);
    }
  }

  useEffect(() => {
    ref.current = setInterval(() => startTimer(eventDate), 1000);
    return () => clearInterval(ref.current);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={poster}
        alt="Background"
        layout="fill"
        className="absolute inset-0 object-cover w-full h-full z-[0]"
        priority
      />

      {/* Content Container */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
        {/* Countdown Timer Card */}
        <AnimatePresence>
          {showCountdown && (
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, y: -50, rotate: 45 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-[92%] max-w-[500px] px-2 sm:px-0"
            >
              <Card className="relative p-4 sm:p-6 md:p-8 text-center bg-black/50 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    E-Cell Orientation 2025
                  </CardTitle>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-2">
                    February 12, 2025 at 5:00 PM
                  </p>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-4 mb-6">
                    {["days", "hours", "minutes", "seconds"].map((unit) => (
                      <motion.div
                        key={unit}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                        className="relative flex flex-col items-center p-2 sm:p-3 md:p-4 bg-white/10 rounded-xl shadow-xl backdrop-blur-md"
                      >
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={timer[unit]}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.4, type: "tween" }}
                            className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white"
                          >
                            {timer[unit]}
                          </motion.span>
                        </AnimatePresence>
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 uppercase mt-1">
                          {unit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  {/* Register Button */}
                  <Button
                    onClick={() => {}}
                    className="w-full max-w-xs bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 sm:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}





