function Form(props) {
    return (
        <fieldset className="form">
            <form>
            This is the form
            <label>How are you feeling?</label>
            <input type="text"/>
            <br/>
            <label>Intentions/Achievments</label>
            <input type="text"/>
            <br/>
            <label>Things you're grateful for</label>
            <input type="text"/>
            <br/>
            <label>What's on your mind?</label>
            <input type="text"/>
            </form>
        </fieldset>
    );
}

export default Form;