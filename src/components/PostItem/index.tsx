import React from 'react';
import {PostContainer} from "./styles";
import {listProps} from "../../types/listItem";
import Button from "../commonConponents/basicComponents/button";

const PostItem = ({post, number, remove} : listProps) => {
    return (
        <PostContainer>
            <div>
                <div> {number}.{post.title}</div>
                <div>{post.body}</div>
            </div>
            <Button onClick={() => remove(post)}>delete me</Button>
        </PostContainer>
    );
};

export default PostItem;