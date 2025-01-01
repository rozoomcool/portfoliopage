"use client"

import { ExperienceRequest, ExperienceResponse } from "@/app/api/experience/route";
import ExperienceCard from "../experienceCard/ExperienceCard";
import styles from "./ResumeCard.module.scss";
import { useEffect, useState } from "react";
import { EducationRequest, EducationResponse } from "@/app/api/education/route";
import { $api } from "@/app/_config/api";
import AboutMeSection from "../aboutMeSection/AboutMeSection";
import { AboutMe } from "@prisma/client";

const navs = ["Experience", "Education", "About me", "Info"];

export default function ResumeCard() {

    const [experiences, setExperiences] = useState<ExperienceResponse[]>([]);
    const [educations, setEducations] = useState<EducationResponse[]>([]);
    const [aboutMe, setAboutMe] = useState<AboutMe>({
        id: 0,
        name: "",
        experience: "",
        nationality: "",
        freelance: "",
        phone: "",
        telegram: "",
        email: "",
        languages: ""

    });
    const [navigation, setNavigation] = useState(navs[0]);

    useEffect(() => {
        initData();
    }, [])

    const initData = async () => {
        try {
            setExperiences(await fetchExperience());
        } catch (e) { }
        try {
            setEducations(await fetchEducation());
        } catch (e) { }
        try {
            setAboutMe(await fetchAboutMe());
        } catch (e) { }
    }

    const fetchExperience = async () => {
        return (await $api.get<ExperienceResponse[]>("/experience")).data;
    }

    const fetchEducation = async () => {
        return (await $api.get<EducationResponse[]>("/education")).data;
    }

    const fetchAboutMe = async () => {
        return (await $api.get<AboutMe>("/aboutme")).data;
    }

    const experienceSection = () => {
        return (
            <>
                <div className={styles.contentCardSection}>
                    {experiences.map((exp) =>
                        <ExperienceCard key={exp.id} title={exp.title} term={exp.term} place={exp.company} />
                    )}
                </div>
            </>
        );
    }

    const educationSection = () => {
        return (
            <>
                <div className={styles.contentCardSection}>
                    {educations.map((edu) =>
                        <ExperienceCard key={edu.id} title={edu.title} term={edu.term} place={edu.subject} />
                    )}
                </div>
            </>
        );
    }

    const infoSection = () => {
        return (
            <>
                <div className={styles.contentTextSection}>
                <p className={styles.infoText}>My name is Rosul, and I am a developer with over 4 years of experience in software development. I specialize in mobile applications, web development, and backend solutions. My technical stack includes Java, Spring Boot, Flutter, Python, JavaScript, TypeScript, Node.js, React.js, as well as databases like Postgres, MongoDB, Redis, and RabbitMQ.</p>
                <p className={styles.infoText}>I started programming at the age of 13, and my journey has been diverse. I began by working on websites and Telegram bots using Python and JavaScript. Over time, I expanded my skills and took on more complex projects. One of the most interesting challenges I’ve worked on was creating a market maker for the Solana blockchain. In this project, I was responsible for building a backend service that handled long-running tasks such as tracking, buying, selling, and other operations. I developed the service using NestJS.</p>
                <p className={styles.infoText}>In addition to backend development, I have a strong foundation in frontend and mobile app development. I have spent considerable time learning Java, Spring, and Flutter, which allows me to tackle a variety of tasks—whether it’s building backend systems, creating user interfaces, or developing mobile applications. I’m always eager to learn new technologies and embrace new challenges.</p>
                <p className={styles.infoText}>During my time at university, I was actively involved in ICPC competitions and hackathons, where my team consistently made it to the finals and earned prize positions. I also mentored younger students, helping them grow in programming and guiding them through difficult problems.</p>
                <p className={styles.infoText}>Between the ages of 17 and 19, I spent two years working in the field of computer graphics (CG), which broadened my understanding of design and user experience. This experience has been invaluable, helping me build better interfaces and think more creatively in my development work.</p>
                <p className={styles.infoText}>With over 4 years of experience, I am always looking for opportunities to grow, take on new challenges, and contribute to exciting projects. My diverse skill set allows me to approach problems from multiple angles, and I’m always ready to learn and adapt to new technologies.</p>
                </div>
            </>
        );
    }

    const aboutMeSection = () => {
        return (
            <>
                {/* <div className={styles.contentCardSection}> */}
                <AboutMeSection name={aboutMe.name} experience={aboutMe.experience} nationality={aboutMe.nationality} freelance={aboutMe.freelance} phone={aboutMe.phone} telegram={aboutMe.telegram} email={aboutMe.email} languages={aboutMe.languages} />
                {/* </div> */}
            </>
        );
    }

    const buildNavSection = () => {
        if (navigation == "Experience") {
            return experienceSection();
        } else if (navigation == "Education") {
            return educationSection();
        } else if (navigation == "Info") {
            return infoSection();
        } else if (navigation == "About me") {
            return aboutMeSection();
        } else {
            return experienceSection();
        }
    }

    const changeNav = (value: string) => {
        setNavigation(value);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.resumeCard}>
                    <div className={styles.navSection}>
                        <p className={styles.navSectionTitle}>Why hire me?</p>
                        <p className={styles.navSectionDescription}>Hello, if you got here, I advise you to look at information about me.
                        </p>
                        {
                            navs.map((nav) =>
                                <div key={nav} onClick={() => changeNav(nav)} className={`${styles.navButtonContainer} ${navigation == nav ? styles.navButtonContainerSelected : ""}`}>
                                    {nav}
                                </div>
                            )
                        }
                    </div>
                    <div className={styles.contentSection}>
                        <p className={styles.contentSectionTitle}>My experience</p>
                        <p className={styles.navSectionDescription}>I tried to lay it out in a format convenient for you.
                        </p>
                        {buildNavSection()}
                    </div>
                </div>
            </div>
        </>
    );
}