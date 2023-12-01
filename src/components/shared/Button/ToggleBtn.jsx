/* eslint-disable react/prop-types */
const ToggleBtn = ({ toggleHandler }) => {
    return (
      <>
        <label
          htmlFor='Toggle3'
          className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800 font-semibold'
        >
          <input
            onChange={toggleHandler}
            id='Toggle3'
            type='checkbox'
            className='hidden peer'
          />
          <span className='px-4 py-1 rounded-l-md bg-green-400 peer-checked:bg-gray-300'>
            User
          </span>
          <span className='px-4 py-1 rounded-r-md bg-gray-300 peer-checked:bg-green-400'>
            Agent
          </span>
        </label>
      </>
    )
  }
  
  export default ToggleBtn
  