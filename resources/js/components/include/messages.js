const message = (props) => {
    return(
        <div className="message__error" style={{ display: props.display }}>{props.message}</div>
    );
}
message.defaultProps = {
   display: 'block'
}
export default message