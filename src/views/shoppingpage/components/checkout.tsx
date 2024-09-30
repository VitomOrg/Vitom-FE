import { Button, Input } from "@/components/ui";
import React from "react";

interface CheckoutProps {
  onSubmitVoucher: (voucher: string) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onSubmitVoucher }) => {
  const [voucher, setVoucher] = React.useState("");

  return (
    <div className="flex flex-row items-center justify-end">
      <Input
        type="text"
        placeholder="Add your vouchers here"
        className="p-2 border rounded-lg border-border"
        value={voucher}
        onChange={(e) => setVoucher(e.target.value)}
      />
      <Button
        className="rounded-lg bg-accent text-accent-foreground"
        onClick={() => onSubmitVoucher(voucher)}
      >
        Apply Voucher
      </Button>
    </div>
  );
};

export default Checkout;
