const list = [
    {
        title: 'height',
        details: '14/15'
    },
    {
        title: 'height',
        details: '14/15'
    },
    {
        title: 'height',
        details: '14/15'
    },
    {
        title: 'height',
        details: '14/15'
    },
]


function ProductInformation() {

    return (
        <ul>
            {
                list.map((list, index) => {
                    return (
                        <li key={index} className="flex items-center lg:w-[600px] mb-4 mx-auto border-b pb-3 last:border-0">
                            <span className="inline-block w-1/2 lg:w-1/3 capitalize border-r mr-1 sm:mr-5">{list.title} :</span>

                            <span>{list.details}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ProductInformation