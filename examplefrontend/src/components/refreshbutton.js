const DarkModeButton = (props) => {
    return (
        <button className='dark-mode-button' onClick={function() { props.changeMode(); }}>
            { props.text }
        </button>
    );
}
export default DarkModeButton;