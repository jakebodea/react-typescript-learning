export default function Card(props: {
    recipient: string,
    content: string
}) {
    return (
        <div className="card">
            <p>Dear {props.recipient},</p>
            <p>{props.content}</p>
        </div>
    );
}