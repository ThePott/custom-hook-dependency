import { useEffect, useState } from 'react';

// 데이터 fetching Custom Hook 작성하기
const useFetch = (url: string) => {
    // 1. data, loading, error 값에 대한 초기 값을 지정하세요.
    const [data, setData] = useState<any>(null);
    // 2. 로딩 상태를 true로 변경합니다. ( 데이터 패칭 전 로딩 적용 )
    // ---- 이 함수가 호출된다는 건 fetch를 하겠다는 거니까
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    const fetchData = async () => {
        try {
            // 3. fetch 를 사용하여 인자로 받은 url에서 데이터를 받아온 후 data 상태를 업데이트 해주세요.
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('---- Invalid Response');
            }
            const json = await response.json()
            setData(json)
        } catch (error) {
            // (+ catch문을 사용하여 error 상태값을 사용하여 에러 핸들링 코드도 함께 작성해주세요.)
            console.error('---- ERROR OCCURED:', error);
            setError(error);
        } finally {
            // (+ 데이터를 받아온 후 상태를 업데이트 했다면, 상태를 다시 false로 변경해야 합니다.)
            setLoading(false);
        }
    };
    // 4. useEffect를 사용하여 url이 변경되는 경우에만 fetchData 함수가 실행되도록 작성하세요.
    //----------------질문입니다-------------------
    // 커스텀 훅에 파라미터를 설정하는 경우, 그 파라미터 값이 변할 때는 의존성 배열에 명시하지 않아도 커스텀 훅이 재호출되지 않나요?
    // 다른 url로 커스텀 훜 호출 -> 호출된 각 커스텀 훜은 독립적인 인스턴스이므로 기존의 커스텀 훅 인스턴스에서 url만 바뀌는 게 아니라 새로운 인스턴스가 생김
    useEffect(() => { fetchData() }, []);
    // useEffect(() => fetchData, [url]); <--- 이걸 의도하신 건 알겠습니다만, url이 파라미터에 있을 때, 기존 커스텀 훅 인스턴스가 유지되면서 파라미터인 url만 바뀌는 게 가능한가요?

    // fetchData()
    // 5. return문을 사용하여 다른 컴포넌트에서 접근할 수 있도록 총 3가지의 상태 값과 fetchData 함수를 리턴하세요.
    return { loading, data, fetchData };
};


export default useFetch;
