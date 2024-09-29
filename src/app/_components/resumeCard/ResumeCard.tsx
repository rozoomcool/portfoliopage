import ExperienceCard from "../experienceCard/ExperienceCard";
import styles from "./ResumeCard.module.scss";

const navs = ["Experience", "Education", "Skills", "About me"];

export default function ResumeCard() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.resumeCard}>
                    <div className={styles.navSection}>
                        <p className={styles.navSectionTitle}>Why hire me?</p>
                        <p className={styles.navSectionDescription}>Hello, if you got here, I advise you to look at information about me.
                        </p>
                        {/*  */}
                        {
                            navs.map((nav) =>
                                <div key={nav} className={`${styles.navButtonContainer} ${nav == "Experience" ? styles.navButtonContainerSelected : ""}`}>
                                    {nav}
                                </div>
                            )
                        }
                    </div>
                    <div className={styles.contentSection}>
                        <p className={styles.contentSectionTitle}>My experience</p>
                        <p className={styles.navSectionDescription}>I tried to lay it out in a format convenient for you.
                        </p>

                        <div className={styles.contentCardSection}>
                            <ExperienceCard title={"Java Developer"} term={"2021 - 2022"} place={"Yandex"} />
                            <ExperienceCard title={"Middle mobile developer"} term={"2022"} place={"Delivety Club"} />
                            <ExperienceCard title={"Java Developer"} term={"2021 - 2022"} place={"Yandex"} />
                            <ExperienceCard title={"Java Developer"} term={"2021 - 2022"} place={"Yandex"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}