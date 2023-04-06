import React, { useEffect, useState } from 'react';
import SingleFood from './SingleFood';

const Food = () => {

    const [apidata, setApidata] = useState([])
    const [inp, setInp] = useState('cake')
    useEffect(() => {
        const fet = async () => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)
            const data = await res.json()
            setApidata(data.meals ? data.meals : [])
        }
        fet()
    }, [inp])

    return (
        <div className='container'>
            <div className='text-center my-3'>
                <input type="text" name="" onChange={(e) => setInp(e.target.value)} className='p-2 border' placeholder='search food ' id="" />
            </div>
            {apidata.length === 0 && <h1 className='text-danger text-center'>Empty!!!</h1>}
            <div className="row g-1 g-md-3 g-lg-4">
                {apidata.map(ad => <SingleFood ad={ad} key={ad.idMeal}></SingleFood>)}
            </div>

        </div>
    );
};

export default Food;