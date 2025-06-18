"use client";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export default function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = DateTime.now().setZone("Asia/Manila").toFormat("hh:mm a");
      setTime(now);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p className="text-zinc-400 text-sm">{time} (Asia/Manila)</p>;
}