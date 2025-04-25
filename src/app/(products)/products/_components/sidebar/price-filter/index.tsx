
import React from 'react'
import { Filter } from './filter'

const PriceFilter = () => {
  return (
    <div className="tp-shop-widget mb-35">
      <h3 className="tp-shop-widget-title no-border">Price Filter</h3>

      <Filter
        initialMin={0}
        initialMax={1000000}
        onSubmit={() => { }}
      />
    </div>
  )
}

export default PriceFilter
