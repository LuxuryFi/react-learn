import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAddProject, onCancel}) {
    const titleRef =  useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDesscription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        if (enteredTitle.trim() === '' || enteredDesscription.trim() === '' || enteredDueDate.trim()) {
            // show the error modal
            modal.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDesscription,
            dueDate: enteredDueDate
        })
        

        titleRef.current.value = null;
        descriptionRef.current.value = null;
        dueDateRef.current.value = null;
    }

    return (
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
            <p className="text-stone-400 mb-4">Oops.. looks like you forgot to enter a value</p>
            <p className="text-stone-400 mb-4">Please make sure you provide a valid </p>
        </Modal>
        <div className="border-black border-spacing-0 w-[45rem]">
            <menu className="flex items-center justify-end gap-4"> 
                <li>
                     <button className="text-stone-500 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                </li>
                <li>
                    <Button onClick={handleSave}>Save</Button>
                </li>
            </menu>
            <div>
                <Input title="title" ref={titleRef} type="text"/>
                <Input title="Description" ref={descriptionRef} isTextArea="true" />
                <Input title="Due Date" ref={dueDateRef} type="date"/>
            </div>
        </div>
        </>
    )
}