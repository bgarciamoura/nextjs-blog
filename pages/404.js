import Head from 'next/head';

// pages/404.js
export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 | Error</title>
            </Head>
            <div className='not-found-container'>
                <h1 className='not-found'>404 - Desculpa não achei nada</h1>
            </div>
        </>
    );
}
