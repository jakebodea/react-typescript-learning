import { useState } from "react"

interface ValidFuncResult {
    pass: boolean, 
    msg: string | null
}

export interface FormItemProps {
    title: string, 
    placeholder: string,
    hidden: boolean, 
    validation: (input: string) => ValidFuncResult
}

export default function FormItem({title, placeholder, hidden, validation}: FormItemProps) {
    const [content, setContent] = useState("")
    const [valid, setValid] = useState<ValidFuncResult>({pass: true, msg: null})
    const inputChange = (input: string) => {
        setContent(input); 
        setValid(validation(input));
    }

    return (
        <div className="flex flex-col justify-center mb-2">
            <div className="flex flex-row justify-end items-center gap-4 mb-2">
                <h3>{title}</h3>
                <input 
                    onChange={(e) => inputChange(e.target.value)}
                    placeholder={placeholder}
                    value={content}
                    type={hidden ? "password" : "text"}
                    className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
            </div>
            {valid.pass ? null : <h2 className="text-red-500">{valid.msg}</h2>}
        </div>
    )
}