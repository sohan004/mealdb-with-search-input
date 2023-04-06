import React from 'react';

const SingleFood = (props) => {
    const { strMealThumb, strMeal, strInstructions } = props.ad
    return (
        <div className='col-6 col-lg-4'>
            <div className="card" >
                <img src={strMealThumb} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{strMeal}</h5>
                        <p className="card-text">{strInstructions.slice(0, 50)}...</p>
                    </div>
            </div>

        </div>
    );
};

export default SingleFood;