import React from "react";

export const PreviewImage = ({file}) => {

    const [preview, setPreview] = React.useState(null);

    const reader = new FileReader();
    
    reader.readAsDataURL(file);

    reader.onload = () => {
        setPreview(reader.result);
    };

    return (
        
        <img src={preview} alt="preview"/>
        
    )
}