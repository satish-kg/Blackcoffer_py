import React, { useState, useEffect, Component } from 'react';

const ListData = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        const fetchData = async () => {
            try{
                // const response = await import('../jsondata.json');
                // setData(response.default);
                const response = await fetch('http://localhost:5000/api/data');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return(
        <div>
            <h2>ListData :</h2>
            <div>
                <ul>
                {data.map((obj, index) => (
                    <li key={index}>
                    <p>{obj.title && <strong>{index+1}. {obj.title}</strong>}</p>
                    <p>{obj.published && <span>Published : {obj.published}</span>}</p>
                    <p>{obj.country && <span>Country : {obj.country}</span>}</p>
                    <p>{obj.sector && <span>Sector : {obj.sector}</span>}</p>
                    <p>{obj.topic && <span>Topic : {obj.topic}</span>}</p>
                    <p>{obj.insight && <span>Insight : {obj.insight}</span>}</p>
                    <p>{obj.url && <a href={obj.url}>{obj.url}</a>}</p>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default ListData;