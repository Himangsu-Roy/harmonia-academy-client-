export const getInstructors = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/instructors`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
    })
    return await res.json()
}