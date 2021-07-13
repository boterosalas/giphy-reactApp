import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    useEffect(() => {
        getGifs(category)
            .then(images => {
                setState({
                    data: images,
                    loading: false
                });
            })
    }, [category]);

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    return state;

}
