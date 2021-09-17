import React, { useState } from 'react'
import ProgressBar from '../components/ProgressBar'


const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)


    // specify types of images allow
    const types = [ 'image/png', 'image/jpeg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];

    // we check if there a file selected to upload
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        }else {
            setFile(null)
            setError('Please select an image file (png pr jpeg)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} className="" />
                <span>+</span>
            </label>

            <div className="output">
                { error && <div className="error">{error}</div>}
                { file && <div> {file.name} </div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm
