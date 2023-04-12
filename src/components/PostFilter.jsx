import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
<div>
<       MyInput
          value={filter.query}
          onChange={(e) => setFilter({...filter, query:e.target.value})}
          placeholder="Поиск...."
        />
        <MySelect
          defaultValue="Сортировка"
          value={filter.sort}
          onChange={(selectSort)=>setFilter({...filter, sort: selectSort})}
          options={[
            { value: "title", name: "По зазванию" },
            { value: "body", name: "По Описанию" },
          ]}
        />
</div>

  );
};

export default PostFilter;
