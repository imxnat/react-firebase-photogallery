import useStorage from '../Hooks/useStorage'

const ProgressBar = ({ file, setFile }) => {

    const { url, progress } = useStorage(file);
    console.log(progress, url);

    return (
        <div className="progress-bar" style={{ width: progress + '%'}}>pro</div>
    )
}

export default ProgressBar
