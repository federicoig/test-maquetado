const config = {
    headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

export const getProducts = async () => {
    return fetch("/api/data.json", config)
        .then(res => res.json())
        .then(data => data)
}