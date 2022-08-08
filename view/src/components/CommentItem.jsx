import React from 'react'

export default function CommentItem(props) {
  const commentary = props.commentary
  return (
    <div>
        <p>{commentary}</p>
    </div>
  )
}
