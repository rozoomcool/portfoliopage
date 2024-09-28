import styles from "./ExperienceCard.module.scss";

type ExperienceCardParams = {
    title: string;
    term: string;
    place: string;
}

export default function ExperienceCard({...params}: ExperienceCardParams) {
    return (
        <>
            <div className={styles.experienceCard}>
                <p className={styles.experienceCardTerm}>{params.term}</p>
                <p className={styles.experienceCardTitle}>{params.title}</p>
                <p className={styles.experienceCardPlace}>{params.place}</p>
            </div>
        </>
    );
}