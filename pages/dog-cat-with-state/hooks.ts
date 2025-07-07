import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
    console.log("---- custom hook called:")
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [_, setError] = useState<any>(null);
    
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('---- Invalid Response');
            }
            const json = await response.json()
            console.log("---- updating state after fetch success")
            setData(json)
        } catch (error) {
            console.error('---- ERROR OCCURED:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => { 
        console.log("---- effect function on mount only")
        fetchData()
     }, []);

    return { loading, data, fetchData };
};


export default useFetch;
