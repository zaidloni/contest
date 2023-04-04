import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../utils/appSlice";

const Posts = () => {
    // const [data, setData] = useState(undefined)
    const storeData = useSelector((store) => store.app);
    // console.log(storeData);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    // setData(json);
    dispatch(addData(json));
  }
  if(storeData.data === undefined) return;
  return (
    <div className="post-container">
      {storeData.data.map((post) => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  );
};

export default Posts;
