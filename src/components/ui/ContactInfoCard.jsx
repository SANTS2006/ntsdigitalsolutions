import React from 'react'

const ContactInfoCard = ({ info, icon: Icon }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <div className="text-3xl mb-4">
            <Icon className="text-blue-500"/>
        </div>
        <p className="mt-2 text-slate-900 font-bold text-xl">
            {info.value}
        </p>
    </div>
  )
}

export default ContactInfoCard
