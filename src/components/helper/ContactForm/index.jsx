
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { isNotEmail } from '@/configs/inputValidation'
import { PAGE_ROUTES } from '@/configs'

const contact_data = [
    {
        label: 'Book Now',
        link: PAGE_ROUTES.BOOKING_LINK,
        primary: true,
    },
]

export default function ContactUsForm({
    sheetName='Contact', showSubject=true, options, text
}) {
    const [formData, setFormData]= useState({})
    const form_inputs_list=showSubject?[
        {label:'Name'},
        {label:'Email', type:'email'},
        {label:'Subject'},
        {label:'Message' , type:'textarea'}
    
    ]:[
        {label:'Name'},
        {label:'Email', type:'email'},
        {label:'Category', type:'option', options, value:'subject'},
        {label:'Message' , type:'textarea'}
    ]

    const [isLoading, setLoading]= useState(false)

    return(
    <form id='contactForm'>
        <p className='text-[#20C905] text-4xl tablet:text-3xl font-semibold mb-4'>{text?text:'Get in Touch'}</p>
        {text?<p className='mb-2 text-base text-gray-700'>Fill the form below and we will reach out to you.</p>:null}
        <div className='mb-7 w-full grid grid-cols-2 tablet:grid-cols-1 gap-8'>
            {form_inputs_list.map(({label, type='text', options, value},ind)=>
                <div key={ind} className='w-full tablet:w-full'>
                    <p className='mb-2'>{'Your '+label}</p>
                    {type==='textarea'?
                        <textarea className='text-sm bg-blue-50 border rounded-lg py-3 px-5 w-full' onChange={(e)=>setFormData({...formData, [label.toLowerCase()]:e.target.value})} value={formData[label.toLowerCase()] || ''}/>:
                        type==='option'?
                       <input className='text-sm bg-blue-50 border rounded-lg py-3 px-5 w-full' 
                            type={type} 
                            onChange={(e)=>setFormData({...formData, [label.toLowerCase()]:e.target.value})} 
                            value={formData[label.toLowerCase()] || ''}
                        />
                        // <SelectOption containerClass='text-sm bg-blue-50 flex justify-between items-center cursor-pointer border rounded-lg py-3 px-5 w-full' options={options} label={label} 
                        //     onChange={(e)=>setFormData({...formData, [value]:e})} 
                        //     value={formData[value] || ''}
                        // />
                        :
                        <input className='text-sm bg-blue-50 border rounded-lg py-3 px-5 w-full' 
                            type={type} 
                            onChange={(e)=>setFormData({...formData, [label.toLowerCase()]:e.target.value})} 
                            value={formData[label.toLowerCase()] || ''}
                        />
                    }
                </div>
            )}
        </div>
        <div className='flex justify-between items-center tablet:flex-col tablet:gap-y-10 tablet:justify-center'>
            
                <div className='flex gap-x-8 tablet:gap-x-8 tablet:flex-col tablet:w-full'>
                {contact_data.map(({label, link, primary},ind)=>
                <Fragment key={ind}>
                {
                link?
                <Link key={ind} href={link}
                    className={`mt-8 tablet:mt-6 text-center tablet:w-full tablet:text-sm inline-block ${primary?'bg-green text-white':'border border-green text-green'} font-medium px-8 py-2 tablet:py-3 rounded-full hover:opacity-90`}> 
                    {label}
                </Link>:
                <>
                
                <LoadButton onClick={()=>subscribeFund()} 
                    isLoading={isLoading}
                    disabled={!!isNotEmail(formData.email) || !formData.name || (!formData.subject && !formData.category) || !formData.message}
                    className={`mt-8 tablet:mt-6 text-center tablet:w-full tablet:text-sm inline-block ${primary?'bg-green text-white':'border border-green text-green'} font-medium px-8 py-2 tablet:py-3 rounded-full`}>
                    {label}
                </LoadButton>
                </>
                }
                </Fragment>
                )}
            </div>
        </div>

    </form>
    )
}