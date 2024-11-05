import DialogCustom from "@/components/common/dialog";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
  useToast,
} from "@/components/ui";
import { RootResponse } from "@/domains/models/root/root.response";
import { SoftwareEditResponse } from "@/domains/models/softwares";
import { SoftwareFormValues, SoftwareSchema } from "@/domains/schemas";
import { SoftwareApi } from "@/domains/services";
import useSoftware from "@/domains/stores/query-hook/software/use-software";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const SoftwareEdit = () => {
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const { refetch } = useSoftware({});
  const [activeDialog, setActiveDialog] = useState<boolean>(false);
  const { state: SoftwareState } = useLocation();
  const navigate = useNavigate();

  const form = useForm<SoftwareFormValues>({
    resolver: zodResolver(SoftwareSchema),
    defaultValues: {
      name: SoftwareState?.name || "",
      description: SoftwareState?.description || "",
    },
  });

  const onSubmit = async (data: SoftwareFormValues) => {
    const response = id
      ? await SoftwareApi.updateSoftware(id, data)
      : await SoftwareApi.createSoftware(data);

    if (
      (response as RootResponse<SoftwareEditResponse>)?.isSuccess ||
      response === true
    ) {
      toast({
        title: "Success",
        description: id
          ? "Software project has been updated successfully."
          : "Software project has been created successfully.",
      });

      refetch();
    } else {
      toast({
        title: "Error",
        description: id
          ? "Failed to update software project."
          : "Failed to create software project.",
      });
    }

    setTimeout(() => {
      setActiveDialog(true);
    }, 1000);
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            {id ? "Edit Software Project" : "Create Software Project"}
          </CardTitle>
          <CardDescription>
            Enter the details of your new software project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Software Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter software name" {...field} />
                    </FormControl>
                    <FormDescription>
                      The name of your software project.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter software description"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      A brief description of your software project.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">
                {id ? "Save Changes" : "Create Software Project"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <DialogCustom
        isOpen={activeDialog}
        onClose={() => setActiveDialog(false)}
        title="Dialog Title"
        children={
          <Card className="p-4">
            <CardHeader>
              <CardTitle>
                Are you sure you want to go to the software page?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xl">
                You can always go back to the software page to view your
                software projects.
              </CardDescription>
            </CardContent>
            <CardFooter className="place-self-end">
              <Button onClick={() => navigate("/dashboard/software")}>
                <CheckCircle className="w-4 h-4 mr-2" />
                Accept
              </Button>
            </CardFooter>
          </Card>
        }
      />
    </>
  );
};

export default SoftwareEdit;
