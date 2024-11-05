import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

function Category({ selected }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#ffecc7] transition-all dark:fill-[#464233] fill-[#BABABB] group-hover:fill-[#ffd406]',
          { 'dark:!fill-[#fff4c7] fill-[#ffd406] ': selected }
        )}
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#fff1c7] transition-all dark:fill-[#464133] fill-[#BABABB] group-hover:fill-[#ffd406]',
          { 'dark:!fill-[#ffeac7] fill-[#ffd406] ': selected }
        )}
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#fff2c7] transition-all dark:fill-[#463f33] fill-[#BABABB] group-hover:fill-[#ffd406]',
          { 'dark:!fill-[#fff0c7] fill-[#ffd406] ': selected }
        )}
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          'dark:group-hover:fill-[#ffd406] transition-all dark:fill-[#C0BFC4] fill-[#5B5966] group-hover:fill-[#ffd406] ',
          { 'dark:!fill-[#ffd406] fill-[#ffd406] ': selected }
        )}
      />
    </svg>
  )
}

export default Category
