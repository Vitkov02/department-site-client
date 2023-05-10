import { $authHost, $host } from "."

export const createAudience = async (audience) =>  {
    const {data} = await $authHost.post('api/audience', audience)
    return data
    
}

export const fetchAudience = async () =>  {
    const { data } = await $host.get('api/audience')
    return data
}

export const fetchOneAudience = async (id) => {
    const {data} = await $host.get('api/audience/' + id)
    return data
}