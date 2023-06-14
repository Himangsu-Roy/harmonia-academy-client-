// save a user to database
export const saveUser = user => {
    const currentUser = {
        image: user.photoURL,
        email: user.email,
        name: user.displayName,
        role: "student",
    }

    fetch(`${import.meta.env.VITE_API_URL}/user`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
        .then(data => console.log(data))
}



// Get User 
export const getUsers = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
    })
    return await res.json()
}

// user role set
export const setRole = async (email, currentUser) => {

    const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
        body: JSON.stringify(currentUser),
    })
    return await res.json()
}





