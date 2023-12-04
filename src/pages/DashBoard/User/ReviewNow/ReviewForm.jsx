
/* eslint-disable react/prop-types */
import { useState } from 'react'
import useAuth from '../../../../hooks/useAuth'
import { axiosSecure } from '../../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'

const ReviewForm = ({ reviewInfo, closeModal,refetch }) => {
  const { user } = useAuth();
//   const [processing, setProcessing] = useState(false)
  const [reviewText, setReviewText] = useState('') // State to store the review text
  const wordCount = reviewText.split(/\s+/).filter((word) => word.length > 0).length;

  const handleSubmit = async (event) => {
    event.preventDefault()
   
    console.log('Review Text:', reviewText)
    const review = {
        name: user?.displayName, email:user?.email, image: user?.photoURL, description: reviewText, agent_name:reviewInfo?.review?.agent_name, agent_email: reviewInfo?.review?.agent_email, property_title: reviewInfo?.review?.property_title, review_time: reviewInfo?.review?.review_time
    }
    if (wordCount < 30) {
        Swal.fire("Opps!", `Please Write at least  30 words!` , "error");
        return;
      }
    axiosSecure.post(`/reviews/titleSpecific`, review)
      .then((res) => {
        console.log(res.data);
        refetch();
        if (res.data.insertedId) {
          Swal.fire("Great!", `${reviewInfo?.review?.property_title} added to the review successfully!` , "success");
        }
        
      })
      .catch((error) => console.log(error));

    console.log(review);
    setReviewText('')
    // setProcessing(true)
    closeModal();
  }

  return (
    <>
      <form className='my-2' onSubmit={handleSubmit}>
        <textarea
          className='p-2 w-full h-24 input border border-green-500 focus:outline-none focus:border-2 focus:border-green-500'
          placeholder='Write your review...'
          
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>

        <div className='flex mt-2 justify-around'>
          <button
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
          
            type='submit'
            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
            Submit
            
          </button>
        </div>
      </form>
    </>
  )
}

export default ReviewForm;

