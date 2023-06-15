export const getUsers = async () => {
    return (await fetch(`/api/users`)).json()
}

// fetch user by id
export const getUser = async (id: string) => {
    return (await fetch(`/api/users/${id}`)).json()
}

export const addUser = async (formData: unknown) => {
    try {
        const options = {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }
        return (await fetch(`/api/users`, options)).json()
    } catch (error) {
        throw new Error("error", {cause: error});
        
    }
}

export const editUser = async (id: string, formData: unknown) => {
    try {
        const options = {
            method: 'PUT',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }
        return (await fetch(`/api/users/${id}`, options)).json()
    } catch (error) {
        throw new Error("error", {cause: error});
        
    }
}

export const removeUser = async (id: string) => {
    try {
        const options = {
            method: 'DELETE'
        }
        return (await fetch(`/api/users/${id}`, options)).json()
    } catch (error) {
        throw new Error("error", {cause: error});
        
    }
}

