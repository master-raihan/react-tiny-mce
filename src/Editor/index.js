import React from "react";
import { Editor as TinyMce } from "@tinymce/tinymce-react";

const Editor = ({ theme, onChange, apiKey }) => {
    console.log("re rendered");
    return (
        <TinyMce
            apiKey={apiKey}
            init={{
                branding: false,
                menubar: false,
                plugins: "lists advlist",
                toolbar: "undo redo | formatselect | bold italic underline | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | strikethrough bullist numlist",
                advlist_bullet_styles: "square",
                advlist_number_styles: "lower-alpha",
                selector: "textarea",
                skin: theme.skin,
                content_css: theme.css,
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }",
            }}
            onEditorChange={onChange}
        />
    )
}

export default Editor;