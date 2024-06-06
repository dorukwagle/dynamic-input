import { useRef } from "react";
import { MdAdd, MdDelete } from "react-icons/md";

interface Props {
    contents: string[];
    onDelete: (item: string) => void;
    onAdd: (item: string) => void;
}

let DynamicInput = ({contents, onDelete, onAdd}: Props) => {
    const itm = useRef<HTMLInputElement>(null);

    let onAddClick = () => {
        const itmRef = itm.current;
        if (!itmRef || !(itmRef.value.length > 0)) return;
        onAdd(itmRef.value);
        itmRef.value = "";
    } 

    return <>
        <div>
            <div>
            {
                contents.map((item, ind) => (
                    <span key={ind}>
                        <b>{item}</b>
                        <MdDelete size={25} color="red"  onClick={() => onDelete(contents[ind])}/>
                            <br />
                    </span>
                ))
            }
            </div>
            <div>
                <span>
                    <input ref={itm} type="text"  onKeyUp={(ev) => {
                        if (ev.code === "Enter") onAddClick();
                    }}/>{"  "}
                    <MdAdd size={25} color="green" onClick={onAddClick}/>
                </span>
            </div>
        </div>
    </>;
}

export default DynamicInput;