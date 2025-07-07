import { useState } from 'react';
import useFetch from './hooks';

const dogUrl = 'https://dog.ceo/api/breeds/image/random';
const catUrl = 'https://api.thecatapi.com/v1/images/search';
const urlArray = [dogUrl, catUrl]

function DogCatWithPage() {
    const [isDog, setIsDog] = useState<boolean>(true)

    const url = urlArray[Number(isDog)]
    console.log("---- new url in page")

    useFetch(url)

    return (
        <>
            <h1> Animal gallery</h1>
            <button onClick={() => setIsDog((prev) => !prev)}>url 바꾸기</button>
            {url}
        </>
    );
}

export default DogCatWithPage;
