
import { React, useEffect, useState } from 'react'
import Image from 'next/image'
import '../../styles/path.css'

function getData() {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch("/data/paths.json")
            .then(response => response.json())
            .then(data => { setData(data) })
    }, [])
    return data;
}

const Paths = (props) => {
    const data = getData();
    const { title, paths } = data;
    return (
        <>
            <div className='maxwidth-1280 w-100 m-auto column'>

                <h2 className='flex justify-center fs-24 fw-700 py-30'>{title}</h2>
                <div className='column gap-45'>
                {
                    Array.isArray(paths) && (
                        paths?.map((path, index) => {
                            return (<div>
                                <div className='gap-16 row'>
                                    <span 
                                        className='span fs-24 fw-700 lh-36 justify-center align-center'
                                    >{`${index + 1}`}</span>

                                    <div className='path-left gap-4 column'>

                                        <h2 className='fs-24 fw-700 lh-36'>{path?.heading_left}</h2>
                                        <p className='fs-14 fw-400 lh-20' dangerouslySetInnerHTML={{ __html: path?.paragraph_left }} />
                                    </div>
                                    <div className='path-right gap-4 column'>
                                        <h2 className='fs-24 fw-700 lh-36'>{path?.heading_right}</h2>
                                        <ul className='columns-2 list-style-none '>
                                            {
                                                path?.careers.map((career, index) => {
                                                    return (
                                                        <li className='fs-14 fw-400 lh-24'>{career}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={path.image}
                                        className="path-image"
                                    />
                                </div>
                            </div>)
                        })
                    )
                }
                </div>
            </div>
        </>
    );
};

export default Paths