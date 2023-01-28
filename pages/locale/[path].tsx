import React, {useTransition} from 'react';
import {decodeOptions} from "../../middleware";
import Head from "next/head";

export async function getStaticProps({params}: any) {
    const options = decodeOptions(params.path)
    return {
        props: {
            options,
        }
    }
}

export function getStaticPaths() {
    return {
        paths: [{params: {path: "%7B%22lang%22:%22ko%22%7D"}}, {params: {path: "%7B%22lang%22:%22en%22%7D"}}],
        fallback: true
    }
}

const Path = (props: any) => {


    if(!props?.options?.lang) return null;
    return (
        <>
            <Head>
                <title>{props.options.lang}</title>
            </Head>
            <div>
                {JSON.stringify(props)}
            </div>
        </>
    );
};

export default Path;
