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
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
        .then(data => console.log(data))
}



// export const saveUser = user => {
//     const currentUser = {
//         email: user.email,
//         name: user.displayName,
//         role: "student",
//     }

//     fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(currentUser),
//     })
//         .then(res => res.json())
//         .then(data => console.log(data))
// }





// Get User 
export const getUsers = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    })
    return await res.json()
}

// user role set
export const setRole = async (email, currentUser) => {
    // const currentUser = {
    //     role: 'host',
    // }

    const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
    return await res.json()
}

// // Get role
// export const getRole = async email => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
//     const user = await response.json()
//     return user?.role
// }



