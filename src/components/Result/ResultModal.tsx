import * as React from 'react';
import { AsyncQuizResultProps, QuizResultProps } from '../../types';
import styles from './modal.module.css';
import { AsyncQuizResultComponent } from './AsyncQuizResult';
import { QuizResultComponent } from './QuizResult';

export const ResultModal = ({
    quizResult,
    preparedQuestions,
    handleClose,
    showModal,
}: QuizResultProps) => {
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

export const AsyncResultModal = ({
    quizResult,
    preparedQuestions,
    handleClose,
    showModal
}: AsyncQuizResultProps) => {
    const showHideClassName = showModal
        ? `${styles.modal} ${styles['display-block']}`
        : `${styles.modal} ${styles['display-none']}`;

    return (
        <div className={showHideClassName}>
            <section className={styles['modal-main']}>
                <div className={styles['modal-content']}>
                    <AsyncQuizResultComponent quizResult={quizResult} preparedQuestions={preparedQuestions} />
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
