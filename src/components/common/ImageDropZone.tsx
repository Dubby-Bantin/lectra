import Image from "next/image";
import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import uploadIcon from "@/public/icons/uploadIcon.svg";
import { toast } from "sonner";

const ImageDropZone = ({ name }: { name: string }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const { getInputProps, getRootProps, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        "image/*": [".png", ".jpg", ".jpeg"],
      },
      maxSize: 10 * 1024 * 1024, // 10MB limit
      onDrop(acceptedFiles, fileRejections) {
        if (fileRejections.length > 0) {
          toast.error(
            "File is too large or not an image type (PNG, JPG, JPEG)!"
          );
          return;
        }
        setPreview(URL.createObjectURL(acceptedFiles[0]));
      },
    });

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div
      {...getRootProps()}
      className={`w-full p-6 border border-dashed rounded-lg text-center cursor-pointer bg-top
          transition-all duration-300 ease-in-out font-text  ${
            isDragReject ? "border-red-500" : ""
          } ${isDragAccept ? "border-blue-500" : ""}`}
    >
      <input
        {...getInputProps()}
        name={name}
        id={name}
        required
        style={{ position: "absolute", left: "-9999px" }}
      />
      {preview ? (
        <Image
          src={preview}
          alt={`image`}
          className="w-full h-[400px] object-cover mt-2 rounded-md"
          width={300}
          height={400}
          quality={100}
        />
      ) : (
        <div className="text-center flex flex-col items-center">
          <div className="mb-2">
            <Image src={uploadIcon} alt="Upload" width={30} height={30} />
          </div>
          <p className="md:tracking-wider mb-4 font-bold text-center bg-opacity-60">
            Click to upload
          </p>
          <p className="text-xs ">PNG, JPG, JPEG (max. 10MB)</p>
        </div>
      )}
    </div>
  );
};

export default ImageDropZone;
