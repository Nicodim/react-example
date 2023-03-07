import React from 'react';
import PostItem from "../PostItem";
import {listItemProps, postProps} from "../../types/listItem";
import {TodoArticle} from "./styles";

const PostList = ({ items, remove }: listItemProps) => {
    return (
        <div>
            <TodoArticle> Post List </TodoArticle>
            {items.map((item: postProps, i) =><PostItem number={i + 1} post={item} remove={remove}/>)}
        </div>
    );
};

export default PostList;