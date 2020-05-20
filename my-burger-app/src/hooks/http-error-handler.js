import { useState,useEffect } from 'react';


export default httpClient =>{
    const [error,setError] = useState(null)
        
            const reqInterceptor = httpClient.interceptors.request.use(req => {
                // this.setState({error: null});
                setError(null);
                return req;
            })
            const resInterceptor = httpClient.interceptors.response.use(res => res,err => {
                // this.setState({error: error})
                setError(err);
            });
        
            useEffect(()=> {
                return() =>{
                    httpClient.interceptors.request.eject(reqInterceptor);
                    httpClient.interceptors.request.eject(resInterceptor);
                }
            },[reqInterceptor, resInterceptor, httpClient.interceptors.request]);

        

         const errorConfirmedHandler = () => {
            // this.setState({error:null});
            setError(null);
        };
    return [error, errorConfirmedHandler];
}