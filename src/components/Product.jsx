

function Product({title, price, image, description, date}) {
  
    return (
      <div className="bg-white rounded-lg shadow-lg">
        <div className='flex gap-2 w-full'>
            <div className='w-3/5 md:w-1/5 h-40 flex items-center justify-center bg-black'>
                <img className='object-cover h-full w-full' src={image} alt="product image"/>
            </div>
            <div className='flex flex-col gap-3 py-2 pr-4 w-full'>
                <div className='flex gap-2 items-center justify-between text-[30px]'>
                    <h2 className=''> {title} </h2>
                    <p className='text-s'>Ghc {price}</p>
                </div>
                <div className='text-sm'>
                    {description}
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Product