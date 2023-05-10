import { $authHost, $host } from "."

export const createPlan = async (plan) =>  {
    const {data} = await $authHost.post('api/studyplan', plan)
    return data
    
}

export const fetchPlan = async () =>  {
    const { data } = await $host.get('api/studyplan')
    return data
}
