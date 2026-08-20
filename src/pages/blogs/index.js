/*Update the new Blogs here once posts are ready*/
/*Follows the same card pattern used on the Resources page*/

const Blogs_Data = []

export default function Blogs() {
  return (
    <>
      {/* this dummy div is for adjusting top position Must be included in every index file-- 3rem for Header and 9rem for Navbar*/}
      <div className='bg-black h-[12rem] w-full'></div>
      <div className='text-white font-black bg-black mx-auto text-[3rem] sm:text-[4rem] text-center'>Blogs</div>
      <hr className="w-48 h-px mx-auto mt-6 mb-10 bg-white border-0 rounded"></hr>

      {Blogs_Data.length === 0 ? (
        <div className='flex flex-col items-center justify-center text-center px-6 pb-32 gap-2'>
          <p className='text-greyuse text-base sm:text-lg max-w-md'>
            We&apos;re working on something great. Blog posts from the Students&apos; Web Committee will show up here soon — check back later!
          </p>
        </div>
      ) : (
        <div className=' grid justify-center justify-items-center items-center pb-32'>
          {Blogs_Data.map((item, index) => (
            <div className=' w-11/12 sm:w-10/12 md:w-9/12 xl:p-8 xl:pr-0 p-6 pr-0 justify-evenly flex m-4 rounded-3xl' key={index}>
              <div>
                <div className='text-white font-bold text-1xl md:text-2xl mb-2'>{item.name}</div>
                <div className=' text-white lg:text-base sm:text-sm text-xs font-light mb-4'>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
