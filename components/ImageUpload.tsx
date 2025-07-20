import { UploadDropzone } from "@/utils/uploadthing";
import { XIcon } from "lucide-react";
import { toast } from "sonner";

interface Props {
  image: string;
  setImage: (image: string) => void;
}

const ImageUpload = ({ image, setImage }: Props) => {
  return (
    <div>
      {!image && (
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (!res || res.length === 0) return;
            setImage(res[0].url);
          }}
          onUploadError={(error: Error) => {
            toast.error(`Upload error: ${error.message}`);
          }}
        />
      )}

      {image && (
        <div className="relative size-32">
          <img
            src={image}
            alt="preview-image"
            className="rounded-md size-32 object-cover"
          />
          <button
            type="button"
            onClick={() => setImage("")}
            className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          >
            <XIcon className="size-4 text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
