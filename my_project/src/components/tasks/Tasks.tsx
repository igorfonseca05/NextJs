
import { HTMLProps } from 'react';
import styles from '../tasks/styles.module.css'
import { FaTrash } from 'react-icons/fa'
import { FiShare2 } from 'react-icons/fi'


export default function Tasks({ text }: { text: string }) {
    return (
        <article className={styles.task}>
            <div className={styles.tagContainer}>
                <label className={styles.tag}>PUBLICO</label>
                <button className={styles.shareButton}>
                    <FiShare2 size={22} color="#3183ff" />
                </button>
            </div>
            <div className={styles.taskContent}>
                <p>{text}</p>
                <button className={styles.trashButton}>
                    <FaTrash size={24} color="#ea3140" />
                </button>
            </div>
        </article>
    );
};