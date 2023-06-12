// Add a Class
export const addClass = async classData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/addClass`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
        body: JSON.stringify(classData),
    })
    
    const data = await response.json()
    return data
}

// Get all Class
export const getAllClasses = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
    const data = await response.json()
    return data
}


export const updateStatus = async (id, classData) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/class/status/${id}`,
        {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(classData)
        }
    )
    const data = await response.json()
    return data
}



export const giveFeedback = async (id, feedback) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/class/feedback/${id}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({feedback})
        }
    )
    const data = await response.json()
    return data
}

// //get filtered rooms for hosts
// export const getRooms = async email => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${email}`)
//     const data = await response.json()
//     return data
// }

// Get single class
export const getClass = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/class/${id}`)
    const data = await response.json()
    return data
}

// // Delete a room
// export const deleteRoom = async id => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'content-type': 'application/json',
//         },
//     })
//     const result = await response.json()
//     return result
// }

// update a class
export const updateClass = async (classData, id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/update/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
        body: JSON.stringify(classData),
    })

    const data = await response.json()
    return data
}



// Select class
export const selectClass = async selectData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/select`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
        body: JSON.stringify(selectData),
    })

    const data = await response.json()
    return data
}


// Delete select class
export const deleteSelectClass = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/selectClass/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
    const result = await response.json()
    return result
}


// get all selected class
export const getSelectdClass = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/selected`)
    const data = await response.json()
    return data
}