import { $authHost, $host } from "."

export const createWork = async (work) =>  {
    const {data} = await $authHost.post('api/studentwork', work)
    return data
    
}

export const fetchWork = async () =>  {
    const { data } = await $host.get('api/studentwork')
    return data
}
