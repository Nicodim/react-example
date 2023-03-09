import React from 'react';
import PostItem from "../PostItem";
import {listItemProps, postProps} from "../../types/listItem";
import {TodoArticle} from "./styles";

const PostList = ({ items, remove }: listItemProps) => {
    if(!items.length) {
        return (
            <h1> НЕТУ НИХУЯ ТУТ ЕПТА</h1>
        )
    }
    return (
        <div>
            <TodoArticle> Post List </TodoArticle>
            {items.map((item: postProps, i) =><PostItem key={i} number={i + 1} post={item} remove={remove}/>)}
        </div>
    );
};

export default PostList;