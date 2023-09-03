import styles from "./projects.module.css"
import Project from "./Project/Project"
import screenshot from "../../public/boulevard_screenshot.webp"

export type ProjectType ={
    title: string,
    screenshot: string,
    description: string,
    github: string | undefined,
    link: string | undefined
}

export default function Projects(){

    const projects: ProjectType[] = [
        {
            title: "project1",
            screenshot: screenshot.src,
            description: "a project to be built ssadad defasf fasfae faefa faefae a",
            github: "https://github.com/franciscofigueira",
            link: "https://github.com/franciscofigueira"
        },
        {
            title: "project1",
            screenshot: screenshot.src,
            description: "a project to be built ssadad defasf fasfsadasae faefa faefae a",
            github: "https://github.com/franciscofigueira",
            link: "https://github.com/franciscofigueira"
        },
        {
            title: "project1",
            screenshot: screenshot.src,
            description: "a project to be built ssadad gaa a defasf fafadgagsfae faefa faefae a",
            github: "https://github.com/franciscofigueira",
            link: "https://github.com/franciscofigueira"
        },
        {
            title: "project1",
            screenshot: screenshot.src,
            description: "a project to be built ssadad daga a efasf fasfae faefa faefae a",
            github: "https://github.com/franciscofigueira",
            link: "https://github.com/franciscofigueira"
        }
    ]

    return (
        <>
        <div id="Projects" className={styles.container}>
            <div className={styles.header}>
                <h1> Projects</h1>
            </div>

            <div className={styles.content}>
                {projects.map((p, i) => (
                    <Project key={i} {...p} />
                ))}
            </div>
          
        </div>
        </>
    )
}

