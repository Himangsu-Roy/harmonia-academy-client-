export const getInstructors = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/instructors`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    })
    return await res.json()
}