type FileUploadProps = {
label: string;
id: string;
accept?: string;
onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


export default function FileUpload({ label, id, accept, onChange }: FileUploadProps) {
return (
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
<div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-kta transition">
<input
id={id}
type="file"
accept={accept}
onChange={onChange}
className="hidden"
/>
<label htmlFor={id} className="cursor-pointer text-gray-600">
Choose File
</label>
</div>
</div>
);
}