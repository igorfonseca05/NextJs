import { useEffect, useState } from "react";


export function useFetch(url) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)


    function httpConfig(data, method) {

        console.log(data, method)

        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
        } else if (method === 'DELETE') {
            setConfig({
                method,
                id: data.id
            })
        }

        setMethod(method)
    }


    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        setError(null)

        async function getData() {
            try {
                const res = await fetch(url, { signal: controller.signal })

                if (!res.ok) {
                    throw new Error('Error ao obter dados' + res.statusText)
                }

                const dados = await res.json()
                setData(dados)
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
        }
        getData()
        return () => controller.abort()
    }, [url, callFetch])


    // Refatorando post
    useEffect(() => {
        async function post() {
            if (method === 'POST') {

                try {
                    const fetchConfig = [url, config]
                    const res = await fetch(...fetchConfig)

                    if (!res.ok) {
                        throw new Error('Erro ao postar dado' + res.statusText)
                    }

                    const postedData = await res.json()
                    setCallFetch(postedData)
                } catch (error) {
                    console.log(error.message)
                }
            } else if (method === 'DELETE') {
                const fetchConfig = [`${url}/${config.id}`, config, method]

                console.log(fetchConfig)
                const res = await fetch(...fetchConfig)

                if (!res.ok) {
                    throw new Error('Erro ao deletar dado' + res.statusText)
                }

                setData(prev => prev.filter(item => item.id !== config.id))
            }
        }
        post()
    }, [config, method, url])

    return { data, loading, error, httpConfig }

}