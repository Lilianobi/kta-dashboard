type InputProps = {
label: string;
required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;


export default function Input({ label, required, ...props }: InputProps) {
return (
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
{label} {required && <span className="text-red-500">*</span>}
</label>
<input
{...props}
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--kta-blue) focus:border-transparent"

/>
</div>
);
}