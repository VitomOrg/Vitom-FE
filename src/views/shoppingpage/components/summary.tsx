import { Button } from "@/components/ui";
import React from "react";

interface SummaryProps {
  subtotal: number;
  discount: number;
  total: number;
  onBuyNow: () => void;
}

const Summary: React.FC<SummaryProps> = ({
  subtotal,
  discount,
  total,
  onBuyNow,
}) => {
  return (
    <div className="mt-6">
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span className="font-semibold">${subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount:</span>
        <span className="font-semibold">{discount}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Total:</span>
        <span className="font-semibold">${total}</span>
      </div>

      <Button
        className="w-full p-3 mt-4 rounded-lg bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground"
        onClick={onBuyNow}
      >
        Buy Now
      </Button>
    </div>
  );
};

export default Summary;
