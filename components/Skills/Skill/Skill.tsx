import styles from "./skill.module.css"
import { SkillType } from "../Skills"

export default function Skill({name, icon}: SkillType){
    
    return (
        <div className={styles.container}>
            <div>{icon}</div>
            <div className={styles.name}>{name}</div>
        </div>
    )
}