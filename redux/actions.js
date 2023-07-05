export const GET_CITIES = 'GET_CITIES';

const api_URL = 'https://mocki.io/v1/378c7a79-4c45-4c39-a4e2-2487cd87055b';

export const getCities = () =>{

    try {
       return async dispatch =>{
        const result = await fetch(api_URL, {
            method: 'GET',
            headers:{
                'content-Type': 'application/json',
            }
        });
        const json = await result.json();
        if(json){
            dispatch({
                type: GET_CITIES,
                payload: json
            });
        }else {
            console.log('unable to fetch')
        }
       } 
    } catch (error) {
      console.log(error);  
    }
}