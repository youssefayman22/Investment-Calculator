export default function Input({ richText, ...props }) {
    return(
        richText === true ? (<textarea {...props}></textarea>) : (<input {...props}></input>)
    );  
}
