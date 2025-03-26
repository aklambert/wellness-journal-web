/**
 * Show a link component
 * 
 * @param label         The label for the link
 * @param url           The url destination
 * @param className     ClassName attributes to add to the Link
 * 
 * @returns Link component
 */
const Link = ({label, url, className}: {label: string, url: string, className?: string}) => 
{
    return (
       <a href={url} className={`${className}`}>{label}</a>
    );
};

export default Link;