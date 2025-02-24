
import styles from '../tasks/styles.module.css'
import { FaTrash } from 'react-icons/fa'


export default function Tasks() {
    return (
        <div className={styles.taskContent}>
            <p>Minha primeira tarefa de exemplo show demais!</p>
            <button className={styles.trashButton}>
                <FaTrash size={24} color="#ea3140" />
            </button>
        </div>
    );
};