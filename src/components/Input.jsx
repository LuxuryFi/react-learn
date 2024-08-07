import { forwardRef } from "react"

const Input = forwardRef(function Input({ title, isTextArea, ...props }, ref) {
    const classes = "w-full p-1 border-b-2 rounded-sm bg-stone-200 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600"
    
    return (
        <p className="flex flex-col gap-1 my-4">
            <label htmlFor="" className="text-sm font-bold uppercase border-stone-300 text-stone-600 ">{title}</label>
            { isTextArea ?
            <textarea ref={ref} className={classes} {...props}/> :
            <input ref={ref} type="text" className={classes}  {...props}/> 
            }
        </p>
    )
});

export default Input;