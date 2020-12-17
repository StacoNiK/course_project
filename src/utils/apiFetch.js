const apiFetch = (method, data = {}) => {
    data.method = method;
    data.login = localStorage.getItem('login');
    data.password = localStorage.getItem('password');
    let headers = new Headers()

    return fetch('http://localhost:9000/api.php', { method: 'POST', headers: headers, body: JSON.stringify(data) })
        .then(response => {
            if ( response.status >= 400 ) {
                throw new Error('Ошибка сервера: '+ response.status)
            }
            return response.json()
        })
        .then(json => {
            return json
        })
        .catch(e => {
            throw e
        })
}

export default apiFetch;