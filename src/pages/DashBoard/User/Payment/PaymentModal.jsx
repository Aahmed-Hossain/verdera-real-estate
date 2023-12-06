/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import PaymentForm from './PaymentForm';


const PaymentModal = ({ closeModal, isOpen, paymentInfo,refetch }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  ---Some Info About the Property---
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Property Title: {paymentInfo.review.property_title}
                  </p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Location: {paymentInfo?.review?.property_location}
                  </p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Price: ${paymentInfo?.review?.price_range[0] + "- $" + paymentInfo?.review?.price_range[1]}
                  </p>
                  <p className='text-sm text-gray-500'>
                    Area: {paymentInfo?.review?.property_area} Sq. ft.
                  </p>
                </div>
                <div className='mt-2'>

                    <h1>Agent: </h1>
                  <p className='text-sm text-gray-500'>
                    Name: {paymentInfo?.review?.agent_name}
                  </p>
                </div>

                <div className=''>
                  <p className='text-sm text-gray-500'>
                    Email: {paymentInfo?.review?.agent_email}
                  </p>
                </div>
                <hr className='mt-8 ' />
                {/* Card data form */}
                <PaymentForm paymentInfo={paymentInfo} closeModal={closeModal} refetch={refetch}></PaymentForm>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default PaymentModal;
