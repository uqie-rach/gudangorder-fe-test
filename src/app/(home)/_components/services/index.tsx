
import React from 'react'
import { ServiceCard } from './service-card'
import { TruckElectric, DollarSign, BadgePercent, Headset } from 'lucide-react'

const Services = () => {
  return (
    <section className="mt-12 container">
      <h2 className="text-2xl font-semibold mb-4">Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        <ServiceCard title="Free Delivery" description="Orders from all item" icon={<TruckElectric />} />
        <ServiceCard title="Return & Refund" description="Money back guarantee" icon={<DollarSign />} />
        <ServiceCard title="Member Discount" description="Onevery order over $140.00" icon={<BadgePercent />} />
        <ServiceCard title="Support 24/7" description="Contact us 24 hours a day" icon={<Headset />} />
      </div>
    </section>
  )
}

export default Services
