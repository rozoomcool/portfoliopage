import styles from "./SkillsCard.module.scss";
import Image from "next/image";
import js from "../../public/assets/js.svg";
import nodejs from "../../public/assets/nodejs.svg";
import react from "../../public/assets/react.svg";
import postgres from "../../public/assets/postgres.svg";
import git from "../../public/assets/git.svg";
import docker from "../../public/assets/docker.svg";

import ubuntu from "../../public/assets/ubuntu.svg";
import redis from "../../public/assets/redis.svg";
import nginx from "../../public/assets/nginx.svg";
import mongodb from "../../public/assets/mongodb.svg";
import nestjs from "../../public/assets/nestjs.svg";
import ts from "../../public/assets/ts.svg";
import rabbimq from "../../public/assets/rabbitmq.svg";
import nextjs from "../../public/assets/nextjs.svg";
import go from "../../public/assets/go.svg";


type SkillCardContent = {
    image: any;
    title: string
}

const skills: SkillCardContent[] = [
    { image: js, title: "JS/TS" },
    { image: ts, title: "TypeScript" },
    { image: go, title: "Go" },
    { image: nodejs, title: "NodeJS" },
    { image: nestjs, title: "NestJS" },
    { image: react, title: "ReactJS" },
    { image: nextjs, title: "NextJS" },
    { image: docker, title: "Docker" },
    { image: nginx, title: "Nginx" },
    { image: ubuntu, title: "Ubuntu" },
    { image: redis, title: "Redis" },
    { image: postgres, title: "PostgreSQL" },
    { image: mongodb, title: "MongoDB" },
    { image: rabbimq, title: "RabbitMQ" },
    { image: git, title: "GIT" },
]

export default function SkillsCard() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        My skills
                    </div>
                    <div className={styles.skillsSection}>
                        {skills.map((skill) =>
                            <div key={skill.title} className={styles.skillsCard}>
                                <Image src={skill.image} alt={skill.title} width={86} height={86} />
                                <p className={styles.cardText}>{skill.title}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}