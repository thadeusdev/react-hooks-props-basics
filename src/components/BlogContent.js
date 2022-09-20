import React from "react";

// CHILD COMPONENT
function BlogContent(props) {
  // console.log(props)

  if (!props.isPublished){
    // hide unpublished content
    // return null means "don't display any DOM elements here"
    return null;
  }else{
    // show published content
    return (
      <div id="blog-content">
        <h1>{props.articleText}</h1>
        <p>{props.minutesToRead}</p>
      </div>  
    )
  }
}

export default BlogContent;
