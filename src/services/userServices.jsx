
// const apiUrl = 'http://127.0.0.1:8000/'
const api =  'http://dsgdev2loadbalancer-1901974022.eu-central-1.elb.amazonaws.com/api/'

//login function
export function auth(credentials) {
    
    return fetch(`${api}v1/auth/jwt/create/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }
    ).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
}