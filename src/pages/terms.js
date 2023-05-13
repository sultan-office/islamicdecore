import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'


const tremsData = [
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

function terms() {
  return (
   <>
    <Breadcrumb pages={['Terms & Conditions']}/>
    <section className="py-14 md:py-20">
        <div className="lg:w-[800px] mx-auto w-full px-4 md:px-6">
            <h3 className="text-xl sm:text-4xl pb-4 border-b border-b-gray-600">
                Terms & Conditions
            </h3>
            <div className="mt-5">
                {
                    tremsData.map((data, index) =>{
                        return(
                            <div className="mb-14" key={index}>
                                <h5 className="section-title mb-5">{data.title}</h5>
                                <p className="text-gray-800">{data.description}</p>
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

export default terms