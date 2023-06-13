export const imageUpload = async image => {
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API
        }`
    const response = await fetch(url, {
        method: 'POST',
        body: formData,
    })
    const data = await response.json()
    return data
}


export const getRole = async (email) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
    const user = await response.json();
    return user?.role
}