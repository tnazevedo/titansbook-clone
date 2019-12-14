import React from 'react';

import "./PostItem.css";

function PostHeader({author,date}){

    return(
        <div className="post__header">
            <img className="post__avatar" src={author.avatar}/>
            <div className="post__details">
                <span>{author.name}</span>
                <span>{date}</span>
            </div>
        </div>
    );
}


function PostComment({comments}){
    return(
        
        <div className="post__comments">
            <div className="post__divider"/>
            
                {comments.map(comment => (
                    <div key={comment.id} className="post__comments--box">
                        <img className="post__avatar" src={comment.author.avatar}/>
                        <p>
                        <span>{comment.author.name}</span>
                        {comment.content}
                        </p>
                    </div>
                ))}
            

            
        </div>
        
    );
}




function PostItem({author, date,content,comments}){
    return (
        <div className="post__box">
            <PostHeader author={author} date={date}>
                
            </PostHeader>
            <p className="post__content">{content}</p>
            <PostComment comments={comments}/>

        </div>
    );
}


export default PostItem;






