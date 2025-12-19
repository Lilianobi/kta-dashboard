type SubmitButtonProps = {
children: React.ReactNode;
};


export default function SubmitButton({ children }: SubmitButtonProps) {
return (
<button
type="submit"
className="w-full bg-(--kta-blue) text-white py-3 rounded-lg font-semibold 
hover:bg-[#004c86] 
transition-colors"
>
{children}
</button>
);
}