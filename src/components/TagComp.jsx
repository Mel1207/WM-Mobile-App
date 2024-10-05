import React from 'react'

const TagComp = ({ tagTitle, classList }) => {
  return (
    <div className={`py-1 text-[12px] px-3 bg-[#651CFF10] text-cViolet rounded-full w-max ${classList}`}>{tagTitle}</div>
  )
}

export default TagComp