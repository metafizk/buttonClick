//Type Script
interface ButtonProps {
    count: number;
    onClick: () => void;
}

export default function Button({ count , onClick } : ButtonProps) {
 
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold px-4 py-2"
    >
      I have clicked {count} times
    </button>
  );
}
