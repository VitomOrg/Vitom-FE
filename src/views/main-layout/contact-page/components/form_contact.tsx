import { Button, Input, Label, Textarea } from "@/components/ui";

const FormContact = () => {
  return (
    <section className="flex-1 p-8 border shadow-lg border-border rounded-xl bg-card md:ml-6">
      <h2 className="mb-6 text-xl font-semibold text-primary">Contact Us</h2>
      <form className="space-y-5">
        {/* First Name and Last Name on the same row */}
        <div className="flex gap-4">
          <div className="flex-1">
            <Label className="block mb-1 text-sm text-muted-foreground">
              First Name
            </Label>
            <Input
              type="text"
              className="w-full p-3 border rounded-md border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="John"
            />
          </div>
          <div className="flex-1">
            <Label className="block mb-1 text-sm text-muted-foreground">
              Last Name
            </Label>
            <Input
              type="text"
              className="w-full p-3 border rounded-md border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Doe"
            />
          </div>
        </div>
        <div>
          <Label className="block mb-1 text-sm text-muted-foreground">
            Email Address
          </Label>
          <Input
            type="email"
            className="w-full p-3 border rounded-md border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="johndoe@example.com"
          />
        </div>
        <div>
          <Label className="block mb-1 text-sm text-muted-foreground">
            Message
          </Label>
          <Textarea
            className="w-full p-3 border rounded-md border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            rows={4}
            placeholder="Write your message here..."
          ></Textarea>
        </div>
        <Button
          type="submit"
          className="w-full py-3 text-white transition duration-300 rounded-lg bg-primary hover:bg-primary/90"
        >
          Send Message
        </Button>
      </form>
    </section>
  );
};

export default FormContact;
