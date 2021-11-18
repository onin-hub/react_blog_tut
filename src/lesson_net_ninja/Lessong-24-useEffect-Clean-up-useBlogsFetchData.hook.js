import { useState, useEffect } from 'react'

const useBlogsFetchData = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        /**
         * Clean up function useEffect hook
         * @key signal
         * @returns abortController.abort() run if React state update on an unmounted component.
         */
        const abortController = new AbortController();
        //i use setime to show the Loading node
        setTimeout(() => {

            async function fetchBlogsData() {

                const responseData = await fetch(url, { signal: abortController.signal })

                if (!responseData.ok) {
                    throw Error('Cant fetch data from database. Something went wrong call the system support')
                }

                if (responseData.ok) {
                    setErrorMessage(null)
                }

                const transformData = await responseData.json()
                setData(transformData)
                setIsLoading(false)
            }

            fetchBlogsData().catch(error => {
                if (error.name === 'AbortError') {
                    console.log("fetch Aborted! React state, can't update on an unmounted component");
                } else {
                    setErrorMessage(error.message)
                    setIsLoading(false)
                }
            })
        }, 1000);

        // Clean up function useEffect hook
        return () => abortController.abort();

    }, [url])

    return { data, isLoading, errorMessage }

}

export default useBlogsFetchData;