import React from 'react';
 

const NewContact = (props) => {
    console.log(props)

    return (
        <li>
            <span>{props.post.name} - {} -  {} </span>
            <button onClick={() => props.upvotePost(props.post)}>Back</button>
            <hr />
        </li>
    )
}

export default NewContact
