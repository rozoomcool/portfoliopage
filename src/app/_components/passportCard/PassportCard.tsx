import styles from "./PassportCard.module.scss"
import Image from "next/image"

export default function PassportCard() {
    return (
        <>
            <section className={styles.passportSection}>

                <div className={styles.passportCard}>
                    <div className={styles.passportText}>
                        <p>Software Developer</p>
                        <p className={styles.passportDataText}>Hello I'm</p>
                        <p className={styles.passportDataTextPrimary}>Rosul Umatkereev</p>
                        <p className={styles.passportDataInfoText}>I am a software developer. I excel creating elegant digital experience and I am a proficient in various programming laguages and technoligies.</p>
                        <div className={styles.buttonsBar}>
                            <button className={styles.downloadButton}>
                                <span className={styles.downloadButtonText}>
                                    DOWNLOAD CV
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                                    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className={`${styles.passportImage}`}>
                        <img
                        className={styles.shape}
                            src={"https://imagedelivery.net/lCsODh8EJUNDijZLbbcSWQ/c2c0702c-29f9-4045-5fd1-3afd007ff200/public"}
                            alt={""}
                            // width="350px"
                            // height="350px"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}