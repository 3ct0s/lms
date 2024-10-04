"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";

interface FileUploadProps {
    onChange: (url?: string) => void;
    endpoint: keyof typeof ourFileRouter;
};

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
    return (
        <UploadDropzone
            endpoint={endpoint}
        onClientUploadComplete={(res) => {
            const uploadedUrl = res?.[0].url;
            console.log("Uploaded URL: ", uploadedUrl);
            onChange(uploadedUrl);
        }}
    onUploadError={(error: Error) => {
        toast.error(`${error?.message}`);
    }}
        />
    );
}
