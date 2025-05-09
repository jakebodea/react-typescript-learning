export default function UserInputField(props: {
    title: string,
    input: string,
    onChange: (value: string) => void
}) {
    return (
        <div className="userInputField">
            <p>{props.title}:</p>
            <input
                type="text"
                value={props.input}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    )
}