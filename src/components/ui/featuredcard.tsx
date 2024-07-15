import { Button } from "@/components/ui/button";

interface FeaturedCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
}) => {
  return (
    <div className="px-2 py-2 bg-gray-100 rounded-lg overflow-hidden h-full flex flex-col">
      <img src={imageSrc} alt={imageAlt} className="w-full h-1/2 object-cover" />
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <Button className="w-full mt-4">{buttonText}</Button>
      </div>
    </div>
  );
};

export default FeaturedCard;
