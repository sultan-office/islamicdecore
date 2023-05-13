import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'


const privacyData = [
    {
        id : 0,
        title : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus repellat id illum dolorum earum sit, ea animi eaque qui eius, quaerat reprehenderit voluptatibus incidunt magnam, assumenda quia eveniet et cupiditate.'
    },
    {
        id : 0,
        title : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus repellat id illum dolorum earum sit, ea animi eaque qui eius, quaerat reprehenderit voluptatibus incidunt magnam, assumenda quia eveniet et cupiditate.'
    },
    {
        id : 0,
        title : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus repellat id illum dolorum earum sit, ea animi eaque qui eius, quaerat reprehenderit voluptatibus incidunt magnam, assumenda quia eveniet et cupiditate.'
    },
    {
        id : 0,
        title : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus repellat id illum dolorum earum sit, ea animi eaque qui eius, quaerat reprehenderit voluptatibus incidunt magnam, assumenda quia eveniet et cupiditate.'
    },
    {
        id : 0,
        title : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus repellat id illum dolorum earum sit, ea animi eaque qui eius, quaerat reprehenderit voluptatibus incidunt magnam, assumenda quia eveniet et cupiditate.'
    },
]

function privacy() {
  return (
   <>
    <Breadcrumb pages={['privacy & security']}/>
    <section className="py-14 md:py-20">
    <div className="lg:w-[800px] mx-auto w-full px-4 md:px-6">
            <h3 className="text-xl sm:text-4xl pb-4 border-b border-b-gray-600">
               Privacy & Policy
            </h3>
            <div className="mt-5">
                {
                    privacyData.map((data, index) =>{
                        return(
                            <div className="mb-14" key={index}>
                                <h5 className="section-title mb-5">{data.title}</h5>
                                <p className="text-gray-700">{data.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
   </>
  )
}

export default privacy