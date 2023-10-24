export default function Sidebar(props){

    const noteElements = props.notes.map((note, index) => {
        return(
            <div key={note.id}>
            <div>
                <h2>hi this is a note.</h2>
                <button onClick={props.deleteNote}>Delete this note</button>
            </div>
            </div>
        )
    });

    return(
        <section>
    <div>
        <h3>Notes</h3>
        <button onClick={props.createNewNote}>+</button>
    </div>
    {noteElements}
    </section>
)
}