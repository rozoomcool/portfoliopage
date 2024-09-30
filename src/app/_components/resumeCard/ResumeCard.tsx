"use client"

import { ExperienceRequest } from "@/app/api/experience/route";
import ExperienceCard from "../experienceCard/ExperienceCard";
import styles from "./ResumeCard.module.scss";
import { useEffect, useState } from "react";
import { EducationRequest } from "@/app/api/education/route";
import { $api } from "@/app/_config/api";

const navs = ["Experience", "Education", "Skills", "About me"];

export default function ResumeCard() {

    const [experiences, setExperiences] = useState<ExperienceRequest[]>([]);
    const [educations, setEducations] = useState<EducationRequest[]>([]);
    const [navigation, setNavigation] = useState(navs[0]);

    useEffect(() => {
        initData();
    }, [])

    const initData = async () => {
        setExperiences(await fetchExperience());
        setEducations(await fetchEducation());
    }

    const fetchExperience = async () => {
        return (await $api.get<ExperienceRequest[]>("/experience")).data;
    }

    const fetchEducation = async () => {
        return (await $api.get<EducationRequest[]>("/education")).data;
    }

    const experienceSection = () => {
        return (
            <>
                <div className={styles.contentCardSection}>
                    {experiences.map((exp) =>
                        <ExperienceCard title={exp.title} term={exp.term} place={exp.company} />
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
                        <ExperienceCard title={edu.title} term={edu.term} place={edu.subject} />
                    )}
                </div>
            </>
        );
    }

    const buildNavSection = () => {
        if (navigation == "Experience") {
            return experienceSection();
        } else if (navigation == "Education") {
            return educationSection();
        } else if (navigation == "Skills") {
            return educationSection();
        } else if (navigation == "About me") {
            return educationSection();
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