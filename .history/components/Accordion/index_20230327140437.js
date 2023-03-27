import { useState } from "react";

export default function Accordion({
    term,
    code,
    title,
    credits,
    description
}) {
    const [isActive, setActive] = useState(false);
    return(
    <>
    
Term: {term}

<div onClick={() => setActive(!isAvtive)}>
    {code}
    {title}
    {credits}
    <div>{isActive ? "^" : ""}</div>

</div>
{isActive && <div>{description}</div>}

    </>
    )
}