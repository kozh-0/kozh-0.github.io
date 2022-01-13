import React, {Component} from "react";

import AppHeader from "../app-header";
import PostList from "../post-list";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";
import PostAddForm from "../post-add-form";

// import "./app.css";
// import style from "./App.module.css";
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`
// data - изначальные данные (типа с сервера)

// У объектов свои id ('asd212bjksaf' - типа таких)
// Если в начало придет новый пост, то последующие не обнвоятся
// поэтому нужны ключи
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Chase your dreams!', important: true, id: 1},
                {label: 'Going to learn React', important: true, id: 2},
                {label: "That's good, mate!", important: false, id: 3},
                {label: 'I need a break...', important: false, id: 4}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId = 5;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            
            // Получаем массивы данных без индекса, до и после
            const newArray = [...data.slice(0, index), ...data.slice(index + 1)];
            // setState должно что-то возвращать, присваивает новый массив в стейт
            return {data: newArray}

        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {data: newArr}
        });
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>      
        )
    }
}


    


