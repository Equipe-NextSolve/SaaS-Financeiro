import styles from "./page.module.css";
import InitialContent from "@/components/Carousel/InitialContent";
import Range from "@/utils/Range/Range";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div className={styles.page}>
      <InitialContent />
      <Range />
      <About />
    </div>
  );
}
