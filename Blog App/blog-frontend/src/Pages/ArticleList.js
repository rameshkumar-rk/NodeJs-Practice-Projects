import React from 'react';
import ac from './article-content';
import {Link} from 'react-router-dom';
import ArticlesListPage from '../components/ArticlesListPage';


const ArticleList=()=>(

    <div>
    <h1>ArticleList</h1>
    <ArticlesListPage articles ={ac}/>
    </div>
);

export default ArticleList;