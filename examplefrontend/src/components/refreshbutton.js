const RefreshButton = (props) => {
    return (
        <button className='refresh-button' onClick={function() { props.getData(); }}>
            Refresh List
        </button>
    );
}
export default RefreshButton;