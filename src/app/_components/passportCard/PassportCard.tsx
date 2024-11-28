import styles from "./PassportCard.module.scss"
import Image from "next/image"
import avatar from "../../public/assets/mephoto3.jpeg"
import DownloadCVButton from "../downloadCVButton/DownloadCVButton";

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
                        <DownloadCVButton />
                        </div>
                    </div>
                    <div className={`${styles.passportImage}`}>
                        <Image
                        className={styles.shape}
                            src={avatar}
                            alt={""}
                            width={380}
                            height={380}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}