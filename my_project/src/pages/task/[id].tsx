import { GetServerSideProps } from 'next';
import styles from './styles.module.css'

import Head from 'next/head';

export default function Task() {
    return (
        <div>
            <Head>
                <title>Detalhes tarefa</title>
            </Head>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const id = params?.id as string






    return {
        props: {}
    }
}