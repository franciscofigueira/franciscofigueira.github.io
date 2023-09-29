import styles from "./projects.module.css"
import Project from "./Project/Project"
import blockchain from "../../public/blockchain.webp"
import portfolio from "../../public/portfolio.webp"
import p2pchat from "../../public/chat.webp"
import vdf from "../../public/d20.webp"

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
            title: "Blockchain Tutorial",
            screenshot: blockchain.src,
            description: "A series of blog posts were we explain the concepts behind a blockchain while building our own.",
            github: "https://github.com/franciscofigueira/blockchain-ts",
            link: "https://franciscofigueira.hashnode.dev/series/intro-to-blockchains"
        },
        {
            title: "P2P Chat",
            screenshot: p2pchat.src,
            description: "A chat app built using tauri, that lets users connect on a p2p network to transmit messages.",
            github: "https://github.com/franciscofigueira/p2p-chat",
            link: undefined
        },
        {
            title: "Portfolio",
            screenshot: portfolio.src,
            description: "This portfolio website.",
            github: "https://github.com/franciscofigueira/franciscofigueira.github.io",
            link: undefined
        },       
        {
            title: "Solidity VDF",
            screenshot: vdf.src,
            description: "A smart contract that provides on chain randomness leveraging zk proofs to implement a VDF.",
            github: "https://github.com/franciscofigueira/VDF-solidity",
            link: undefined
        }
    ]

    return (
        <div id="Projects" className={styles.container}>
            <div className={styles.header}>
                <div className={styles.bar} ></div>
                <h1> Projects</h1>
                <div className={styles.bar} ></div>
            </div>

            <div className={styles.content}>
                {projects.map((p, i) => (
                    <Project key={i} {...p} />
                ))}
            </div>    
        </div>
    )
}

