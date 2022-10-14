import * as React from 'react';
import { QuizResultProps } from '../../types';
import { QuizResultComponent } from './QuizResult';
import styles from './modal.module.css';

export const ResultModal = ({
    quizResult,
    preparedQuestions,
    handleClose,
    showModal
}: QuizResultProps) => {
    debugger;
    const showHideClassName = showModal
        ? `${styles.modal} ${styles['display-block']}`
        : `${styles.modal} ${styles['display-none']}`;

    return (
        <div className={showHideClassName}>
            <section className={styles['modal-main']}>
                <div className={styles['modal-content']}>
                    <QuizResultComponent quizResult={quizResult} preparedQuestions={preparedQuestions} />
                </div>
                <div className={styles['modal-footer']}>
                    <button type="button" onClick={handleClose}>
                        Close
                    </button>
                </div>
            </section>
        </div>
    );


}
