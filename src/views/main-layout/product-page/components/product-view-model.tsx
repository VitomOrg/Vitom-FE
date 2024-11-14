import { useRef, useState } from "react";
import { Button } from "@/components/ui";
import { GridIcon, Heart, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import ViewGlTF from "@/components/three_ui/gltf/view-gltf";

interface ProductViewModelProps {
  glbUrl: string;
  productName: string;
  handleLike: () => void;
  isLiked: boolean;
}

const ProductViewModel: React.FC<ProductViewModelProps> = ({
  glbUrl,
  productName,
  handleLike,
  isLiked,
}) => {
  const [showGrid, setShowGrid] = useState(true);
  const [like, setLike] = useState(isLiked);
  const [show, setShow] = useState(true);
  const showRef = useRef(show);

  const handleToggle = () => {
    const newShow = !show;

    if (newShow !== showRef.current) {
      showRef.current = newShow;
      setShow(newShow);
    }
  };

  return (
    <div className="relative w-full mb-4 rounded-lg aspect-square">
      <div className="absolute z-10 flex items-center justify-between gap-3 top-4 left-3">
        <div className="px-4 py-2 text-sm border rounded-xl bg-muted/50 border-accent text-foreground ">
          {productName}
        </div>

        <Button
          className="px-2 py-4 border bg-muted/50 rounded-xl border-accent hover:bg-accent hover:text-background"
          onClick={() => {
            handleLike();
            setLike((prev) => !prev);
          }}
        >
          <Heart
            className={`size-5 ${
              like ? "text-destructive fill-current" : "text-foreground"
            }`}
            fill={like ? "currentColor" : "none"}
          />
        </Button>
      </div>
      <ViewGlTF glbUrl={glbUrl} showGrid={showGrid} />
      <div className="absolute flex flex-col items-center justify-center gap-3 top-4 right-3">
        <Button variant="outline" onClick={handleToggle}>
          {show ? (
            <PanelLeftClose className="size-5" />
          ) : (
            <PanelLeftOpen className="size-5" />
          )}
        </Button>

        {show && (
          <div
            className={`py-3 rounded-lg bg-muted/50 animate-fade-in-right flex flex-col gap-4 border border-accent`}
          >
            <Button variant="ghost" onClick={() => setShowGrid(!showGrid)}>
              <GridIcon className="size-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductViewModel;
