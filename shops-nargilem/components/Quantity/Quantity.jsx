import React, { FC } from 'react'
import s from './Quantity.module.css'
import cn from 'classnames'
import { PlusIcon, MinusIcon, XIcon } from '@heroicons/react/solid'

const Quantity = ({
  value,
  increase,
  decrease,
  handleChange,
  handleRemove,
  max = 6,
}) => {
  return (
    <div className="flex flex-row h-9">
      <button className={s.actions} onClick={handleRemove}>
        <XIcon width={20} height={20} />
      </button>
      <label className="w-full border-accent-2 border ml-2">
        <input
          className={s.input}
          onChange={(e) =>
            Number(e.target.value) < max + 1 ? handleChange(e) : () => {}
          }
          value={value}
          type="number"
          max={max}
          min="0"
          readOnly
        />
      </label>
      <button
        type="button"
        onClick={decrease}
        className={s.actions}
        style={{ marginLeft: '-1px' }}
        disabled={value <= 1}
      >
        <MinusIcon width={18} height={18} />
      </button>
      <button
        type="button"
        onClick={increase}
        className={cn(s.actions)}
        style={{ marginLeft: '-1px' }}
        disabled={value < 1 || value >= max}
      >
        <PlusIcon width={18} height={18} />
      </button>
    </div>
  )
}

export default Quantity
