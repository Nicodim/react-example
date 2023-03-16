import React from 'react';
import PostItem from "../PostItem";
import {listItemProps, postProps} from "../../types/listItem";
import {TodoArticle} from "./styles";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ items, remove }: listItemProps) => {
    if(!items.length) {
        return (
            <h1>No posts yet..</h1>
        )
    }
    return (
        <div>
            <TodoArticle> Post List </TodoArticle>
            <TransitionGroup>
                {items.map((item: postProps, i) =>
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="item"
                        appear={true}
                    >
                        <PostItem number={i + 1} post={item} remove={remove}/>
                    </CSSTransition>
                    )
                }
            </TransitionGroup>


        </div>
    );
};

export default PostList;