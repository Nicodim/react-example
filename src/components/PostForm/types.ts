import {postProps} from "../../types/listItem";

export interface FormPostsProps {
    create: (newPost: postProps) => void;
}