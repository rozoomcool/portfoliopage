import styles from "./AboutMeSection.module.scss";

export type AboutMeParams = {
    name: string
    experience: string
    nationality: string
    freelance: string
    phone: string
    telegram: string
    email: string
    languages: string
}

export default function AboutMeSection({ ...params }: AboutMeParams) {

    return (
        <>
            <div className={styles.tableContainer}>
                <div className={styles.tableSection}>
                    <div className={styles.param}><span className={styles.hintParam}>Name</span> {params.name}</div>
                    <div className={styles.param}><span className={styles.hintParam}>Experience</span> {params.experience}</div>
                    <div className={styles.param}><span className={styles.hintParam}>Nationality</span> {params.nationality}</div>
                    <div className={styles.param}><span className={styles.hintParam}>Freelance</span> {params.freelance}</div>
                </div>
                <div className={styles.tableSection}>
                    <div className={styles.param}><span className={styles.hintParam}>Phone</span> {params.phone}</div>
                    <div className={styles.param}><span className={styles.hintParam}>Telegram</span> {params.telegram}</div>
                    <div className={styles.param}><span className={styles.hintParam}>Email</span> {params.email}</div>
                    <div className={styles.param}><span className={styles.hintParam}>Language</span> {params.languages}</div>
                </div>
            </div>
        </>
    );
}