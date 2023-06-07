import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsLayout from '../../../Layouts/NewsLayout';
import Newscard from '../NewsCard/Newscard';

const Category = () => {
    const { id } = useParams()
    const categoryNews = useLoaderData();
    return (
        <div>
            {id && <h3>This Category News: {categoryNews.length}</h3>}
            {
                categoryNews.map(news => <Newscard
                    key={news._id}
                    news={news}
                ></Newscard>)
            }
        </div>
    );
};

export default Category;