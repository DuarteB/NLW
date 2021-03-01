import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContexts'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext); 

    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/DuarteB.png" alt="Eduardo Duarte"/>
            <div>
                <strong>Eduardo Duarte</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}