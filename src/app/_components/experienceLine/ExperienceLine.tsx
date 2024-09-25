import styles from "./ExperienceLine.module.scss"

type ExperienceLinePart = {
    title: string;
    value: string;
}

type Props = {
    data: ExperienceLinePart[]
}

export default function ExperienceLine({ data }: Props) {
    return (
        <>
            <div className={styles.experienceLine}>
                <div className={styles.experienceLineCard}>
                    {data.map((param) => <div className={styles.experienceBlock} key={param.title}>
                        <p className={styles.valueText}>{param.value}</p>
                        <span className={styles.titleText}>{param.title.split(" ").slice(0, param.title.split(" ").length - 1).join(" ")}<br/>{param.title.split(" ").reverse()[0]}</span>
                    </div>)}
                </div>
            </div>
        </>
    );
}