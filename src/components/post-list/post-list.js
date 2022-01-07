import React from "react";
import "./post-list.css";
import PostListItem from '../post-list-item';

// В PostListItem в props есть переменная label, которая задается внутри PostList
// Как вызов функции с переменной
// Называем как хотим переменные

// props здесь приходит из app.js
// label={posts[0].label} - неправильно, если в posts поменять порядок, все полетит
// const {id, ...itemProps} = item (itemProps объект без id)
// key={item.id} - чтобы не было ошибки в консоле
const PostList = ({posts}) => {

    const elements = posts.map(item => {
        // const {id, ...itemProps} = item
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem
                label={item.label}
                important={item.important}/>
            </li>
        )
    });
    console.log(elements);
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;
