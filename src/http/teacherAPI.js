import { $authHost, $host } from "."

export const createTeacher = async (teacher) =>  {
    const {data} = await $authHost.post('api/teacher', teacher)
    return data
    
}

export const fetchTeacher = async () =>  {
    const { data } = await $host.get('api/teacher')
    return data
}
