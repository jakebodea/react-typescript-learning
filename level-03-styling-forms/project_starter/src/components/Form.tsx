import FormItem, { type FormItemProps } from "./FormItem";


interface FormProps {
    items: FormItemProps[];
}


export default function Form({items}: FormProps) {

    return (
        <div className="flex flex-col p-2 w-full max-w-md mx-auto">
            {
                items.map((item) => {
                return <FormItem key={item.title} {...item} />
                })
            }
        </div>
    )
}