import React from 'react'
import './LivePreview.css'

const LivePreview = (props) => {

    return (
        <>
<<<<<<< HEAD
            {props.image === '' || props.image === null ? <div className="livePreview">
            </div> :
                <div className="livePreviewImageContainer" >
                    <img src={props.image} className='livePreviewImage' alt='selected image' />
                </div>}
=======
            {props.image &&
                <div className='livePreview'>
                    <div className="livePreviewImageContainer" >
                        <img src={props.image} className='livePreviewImage' alt='selected' aly />
                    </div>
                </div>
            }
>>>>>>> 646c1f5 (first commit)
        </>
    )
}

export default LivePreview
