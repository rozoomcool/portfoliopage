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
                {/* <div className={styles.contentCardSection}> */}
                <p className={styles.infoText}>My name is Rosul and i am a skilled full-stack and mobile developer with over 5 years of experience in building scalable, high-performance solutions. A finalist in the ICPC and a frequent participant in hackathons, where I have consistently demonstrated exceptional problem-solving abilities. My expertise includes developing Telegram bots, RESTful APIs, and cross-platform mobile applications using Flutter and Dart.</p>
                <p className={styles.infoText}>I work with modern technologies such as JavaScript, TypeScript, Python, NestJS, Node.js, Express.js, and use Docker and Nginx for containerization and deployment. I am proficient in database management with PostgreSQL, MongoDB, and Redis.</p>
                <p className={styles.infoText}>As a freelancer, I’ve delivered innovative, reliable solutions for a range of clients, balancing functionality, performance, and development efficiency. I’m always eager to take on complex challenges, improve my skills, and contribute to dynamic teams that value creativity and results-driven work.</p>
                {/* </div> */}
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