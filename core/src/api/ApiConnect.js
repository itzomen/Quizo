import axios from 'axios';
import { useEffect , useState } from 'react';


const collectData = (url) => {
    const [fetch, setFetching] = useState({isFetching: false})
    const [dataState, setDataState] = useState({data: []});
    const [apiurl] = useState(url);


    useEffect(() => {
        const fetchDataFromApi = async () => {

            try{
                setFetching({isFetching: true})

                const response = await axios.get(apiurl)

                setDataState({...dataState, data: response.data})
            } catch(e) {
                setFetching({ ...fetch, isFetching: true})
            }
        };
        fetchDataFromApi();

    }, []);

    return [dataState]
}

export default collectData