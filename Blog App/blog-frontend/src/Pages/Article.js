import React, {useState,useEffect} from 'react';
import ac from './article-content';
import ArticleListPage from '../components/ArticlesListPage';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';


const Article=({match})=>{

    const name=match.params.name;
    const article=ac.find(article=>article.name===name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);


    if(!article) return <h1>Article does not Exists</h1>

    const otherarticle=ac.filter(article=>article.name!== name);
    return(
    <div>
    <h1>{article.title}</h1>
    <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />

    {article.content.map((para,key)=>(
        <p key={key}>{para}</p>
    ))}
    <CommentsList comments={articleInfo.comments} />
    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
    <h1>Other</h1>
    <ArticleListPage articles={otherarticle}/>
    </div>
    );
};

export default Article;