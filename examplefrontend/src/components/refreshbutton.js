const DarkModeButton = (props) => {
    return (
        <button className='dark-mode-button' onClick={function() { props.toggleDarkMode(); }}>
            Toggle Dark Mode
        </button>
    );
}
export default DarkModeButton;