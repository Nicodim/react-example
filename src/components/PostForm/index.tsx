import React, {useState} from 'react';
import Input from "../commonConponents/basicComponents/input";
import Button from "../commonConponents/basicComponents/button";
import {FormPostsProps} from "./types";

const PostForm = ({ create }: FormPostsProps) => {
    const [post, setPost] = useState({title: '', body: ''})
    const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newPost  = {...post, id: Date.now()}
        create(newPost)
        setPost({title: '', body: ''})
        console.log('dfdfdf')
    }
    return (
        <form>
            <Input type="text" placeholder='' value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            <Input type="text" placeholder='' value={post.body} onChange={e => setPost({...post, body: e.target.value})}/>
            <Button disabled={false} onClick={addNewPost}>click</Button>
        </form>
    );
};

export default PostForm;