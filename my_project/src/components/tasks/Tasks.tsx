
import { HTMLProps } from 'react';
import styles from '../tasks/styles.module.css'
import { FaTrash } from 'react-icons/fa'
import { FiShare2 } from 'react-icons/fi'
import Link from 'next/link';



export default function Tasks({ text, publicTask, id }: { text: string, publicTask: boolean, id: string }) {
    return (
        <article className={styles.task}>
            {publicTask && <div className={styles.tagContainer}>
                <label className={styles.tag}>PUBLICO</label>
                <button className={styles.shareButton}>
                    <FiShare2 size={22} color="#3183ff" />
                </button>
            </div>}
            <div className={styles.taskContent}>

                {publicTask ?
                    (<Link href={`/task/${id}`}>
                        <p>{text}</p>
                    </Link>) :
                    (<p>{text}</p>)
                }
                <button className={styles.trashButton}>
                    <FaTrash size={24} color="#ea3140" />
                </button>
            </div>
        </article>
    );
};