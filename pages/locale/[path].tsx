import React, {useTransition} from 'react';
import {decodeOptions} from "../../middleware";
import Head from "next/head";

export async function getStaticProps({params}: any) {
    const path = params.path
    return {
        props: {
            path,
        }
    }
}

export function getStaticPaths() {
    return {
        paths: [{params: {path: "ko"}}, {params: {path: "en"}}],
        fallback: true
    }
}

const Path = ({path}: any) => {


    return (
        <>
            <Head>
                <title>{path}</title>
            </Head>
            <div>
                {JSON.stringify(path)}
            </div>
        </>
    );
};

export default Path;
