import styles from "./page.module.css";
import InitialContent from "@/components/InitialContent/InitialContent";
import Range from "@/utils/Range/Range";
import About from "@/components/About/About";
import Company from "@/components/Company/Company";
import Solution from "@/components/SolutionDash/Solution";

export default function Home() {
  return (
    <div className={styles.page}>
      <InitialContent />
      <Range />
      <About />
      <Company />
      <Solution />
    </div>
  );
}
