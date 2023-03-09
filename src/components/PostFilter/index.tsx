import React from 'react';
import Input from "../commonConponents/basicComponents/input";
import MySelect from "../select";
import {FilterProps} from "./types";

const PostFilter = ({filter, setFilter} : FilterProps) => {
    return (
        <div>
            <Input placeholder={'search..'} value={filter.query} onChange={event => setFilter({...filter, query: event.target.value})}/>
            <MySelect value={filter.sort} onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                      options={[
                          {value: 'title', name: 'by name'},
                          {value: 'body', name: 'by body'}
                      ]}
                      defaultValue={'sorted by'}/>
        </div>
    );
};

export default PostFilter;