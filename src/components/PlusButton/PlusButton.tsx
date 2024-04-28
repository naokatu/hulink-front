import { Button } from '@kuma-ui/core';

interface PlusButtonProps {
  onClick: () => void;
}

export const PlusButton: React.FC<PlusButtonProps> = ({ onClick }) => {
  return (
    <Button
      className="absolute bottom-10 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-2xl"
      onClick={onClick}
    >
      +
    </Button>
  );
};
