import SignUp from '../sign-up/sign-up';

function Quote(props) {
    return (
        <>
        <div className="quote">"{props.apiState.content}"</div>
        <div className="name">-{props.apiState.originator?.name}</div>

        <SignUp />
        </>
    );
}

export default Quote;