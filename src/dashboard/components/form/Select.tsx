type SelectProps = {
label: string;
required?: boolean;
children: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>;


export default function Select({ label, required, children, ...props }: SelectProps) {
return (
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
{label} {required && <span className="text-red-500">*</span>}
</label>
<select
{...props}
className="w-full px-4 py-3 border border-gray-300 rounded-lg 
focus:outline-none 
focus:ring-2 focus:ring-(--kta-blue)
focus:border-transparent"
>
{children}
</select>
</div>
);
}