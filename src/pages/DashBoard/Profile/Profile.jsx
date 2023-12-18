
import useAuth from './../../../hooks/useAuth';
import useRole from './../../../hooks/useRole';
import PageTitle from './../../../components/PageTitle/PageTitle';

const Profile = () => {
  const { user } = useAuth();
  // console.log(user.uid);
  const [userRole] = useRole();
  // console.log(userRole);
  return (
    <div className='flex justify-center items-center h-screen'>
      <PageTitle title={"Dashboard | Profile"}></PageTitle>
      <div className='bg-white shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src='https://wallpapercave.com/wp/wp10784415.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-green-500 rounded-full uppercase font-semibold'>
            {
            userRole && userRole?.role
        }
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user?.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user?.email}</span>
              </p>

              <div>
                <button className='bg-[#51f43fe0] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#40af44] font-bold block mb-1'>
                  Update Profile
                </button>
                <button className='bg-[#51f43fe0] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#40af44] font-bold'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
