import Image from "next/image";
import styles from "./page.module.css";
import PassportCard from "./_components/passportCard/PassportCard";
import ExperienceLine from "./_components/experienceLine/ExperienceLine";

export default function Home() {
  return (
    <>
      <PassportCard></PassportCard>
      <ExperienceLine data={[
        { title: "Years of experience", value: "2" },
        { title: "Projects completed", value: "16" },
        { title: "Technologies mastered", value: "7" },
        { title: "Code commits", value: "251" }
      ]}></ExperienceLine>
    </>
  );
}