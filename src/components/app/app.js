import React from "react";

import AppHeader from "../app-header";
import PostList from "../post-list";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";
import PostAddForm from "../post-add-form";

import "./app.css";

// data - изначальные данные (типа с сервера)

// У объектов свои id ('asd212bjksaf' - типа таких)
// Если в начало придет новый пост, то последующие не обнвоятся
// поэтому нужны ключи
const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 'kek'},
        {label: "That's good, mate!", important: false, id: 'lol'},
        {label: 'I need a break...', important: false, id: 'arbirol'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
        
    )
}

export default App;