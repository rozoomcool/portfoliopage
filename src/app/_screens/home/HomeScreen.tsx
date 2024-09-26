import ExperienceLine from "@/app/_components/experienceLine/ExperienceLine";
import PassportCard from "@/app/_components/passportCard/PassportCard";
import styles from "./HomeScreen.module.scss";

export default function HomeScreen() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.mainPassportCard}>
                    <PassportCard />
                </div>
                <div className={styles.mainExpLine}>
                    <ExperienceLine data={[
                        { title: "Years of experience", value: "2" },
                        { title: "Projects completed", value: "16" },
                        { title: "Technologies mastered", value: "7" },
                        { title: "I don't know", value: "500" }
                    ]} />
                </div>
            </div>
        </>
    );
}