/**
 * Show a general input component 
 * (smaller input components that don't have thier own dedicated react component)
 * 
 * @param label         The label for the input
 * @param type          The type of input (checkbox, radio, etc.)
 * @param className     ClassName attributes to add to the input
 * 
 * @returns Input component
 */
const Input = ({label, type, className}: {label: string, type: string, className?: string}) => 
{
    return (
       <div className={`${className} flex flex-row w-fit`}>
            <label className="text-secondary flex">
                <input type={type} className="me-2" name={label.toLowerCase().replace(' ', '-')} />
                {label}
            </label>
       </div>
    );
};

export default Input;