type TextareaProps = {
label: string;
required?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;


export default function Textarea({ label, required, ...props }: TextareaProps) {
return (
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
{label} {required && <span className="text-red-500">*</span>}
</label>
<textarea
{...props}
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kta focus:border-transparent outline-none resize-none"
/>
</div>
);
}