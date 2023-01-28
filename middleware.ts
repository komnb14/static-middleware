import {NextRequest, NextResponse} from "next/server";
import stringify from 'fast-json-stable-stringify'

const KOR_ARRAY = ['ko','ko-KR'];

export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname === '/') {

        const country = calculateAccept();
        const langCountry = calculateLang(KOR_ARRAY.includes(country));
        const searchParams = request.nextUrl.searchParams;
        const queryHL = searchParams.get('hl') || "";
        const calculateHL = calculateLang(KOR_ARRAY.includes(queryHL));
        const lang = Boolean(calculateHL) ? calculateHL : langCountry

        return NextResponse.rewrite(new URL(`/locale/${lang}`, request.nextUrl))
    }
    return NextResponse.next();


    function calculateAccept() {
        const acceptLang = request.headers.get('Accept-Language');
        const calculateIndex = Number(acceptLang?.indexOf('ko'))
        return calculateLang(calculateIndex > -1);
    }

    function calculateLang(lang:any) {
        return lang ? 'ko' : 'en'
    }

}





export function encodeOptions(options: unknown) {
    const json = stringify(options)
    return encodeURI(json);
}

export function decodeOptions(path: string) {
    return JSON.parse(decodeURI(path));
}
