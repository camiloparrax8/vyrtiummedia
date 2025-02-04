
export default function Title({title, highlight, className}) {
    
    const parts = title.split(new RegExp(`(${highlight})`, "gi"))  

    return (
        <h2 className={className}>  
            {parts.map((part, index) => part.toLowerCase() === highlight.toLowerCase() 
                ? (<span key={index} className="text-primary"> {part}</span>) 
                : (<span key={index}>{part}</span>))}
        </h2>
    )
}
