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
        setExperiences(await fetchExperience());
        setEducations(await fetchEducation());
        setAboutMe(await fetchAboutMe());
    }

    const fetchExperience = async () => {
        return (await $api.get<ExperienceResponse[]>("/experience")).data;
    }

    const fetchEducation = async () => {
        console.log(`:::::: ${$api}`)
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
                <p className={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nam, eligendi reiciendis ullam ut molestiae deserunt. Necessitatibus voluptate deleniti eveniet reiciendis cum nulla doloribus consectetur. Qui blanditiis enim aliquid quos facere sit sequi, culpa perspiciatis quis veniam nam autem ullam neque dolor doloribus numquam minima totam eveniet nobis eum. Commodi?</p>
                <p className={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nam, eligendi reiciendis ullam ut molestiae deserunt. Necessitatibus voluptate deleniti eveniet reiciendis cum nulla doloribus consectetur. Qui blanditiis enim aliquid quos facere sit sequi, culpa perspiciatis quis veniam nam autem ullam neque dolor doloribus numquam minima totam eveniet nobis eum. Commodi?</p>
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