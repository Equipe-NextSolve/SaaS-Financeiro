"use client"
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import InitialContent from "@/components/InitialContent/InitialContent";
import Range from "@/utils/Range/Range";
import About from "@/components/About/About";
import Company from "@/components/Company/Company";
import Solution from "@/components/SolutionDash/Solution";
import Reviews from "@/components/Reviews/Reviews";
import FreeTrial from "@/utils/FreeTrial/FreeTrial";
import Loanding from "@/utils/Loanding/Loanding";

export default function Home() {
  const [loanding, setLoanding] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoanding(false);
    };

    if (document.readyState === "complete") {
      setLoanding(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loanding) {
    return <Loanding />;
  }

  return (
    <div className={styles.page}>
      <InitialContent />
      <Range />
      <About />
      <Company />
      <Solution />
      <FreeTrial/>
      <Reviews />
    </div>
  );
}
