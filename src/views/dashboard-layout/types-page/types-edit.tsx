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
import { TypeApi } from "@/domains/services";
import useSoftware from "@/domains/stores/query-hook/software/use-software";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { TypeEditResponse } from "@/domains/models/type/type-edit.response";
import { TypeFormValues, TypeSchema } from "@/domains/schemas";

const TypeEdit = () => {
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const { refetch } = useSoftware({});
  const [activeDialog, setActiveDialog] = useState<boolean>(false);
  const { state: SoftwareState } = useLocation();
  const navigate = useNavigate();

  const form = useForm<TypeFormValues>({
    resolver: zodResolver(TypeSchema),
    defaultValues: {
      name: SoftwareState?.name || "",
      description: SoftwareState?.description || "",
    },
  });

  const onSubmit = async (data: TypeFormValues) => {
    const response = id
      ? await TypeApi.updateType(id, data)
      : await TypeApi.createType(data);

    if (
      (response as RootResponse<TypeEditResponse>)?.isSuccess ||
      response === true
    ) {
      toast({
        title: "Success",
        description: id
          ? "Type project has been updated successfully."
          : "Type project has been created successfully.",
      });

      setTimeout(() => {
        setActiveDialog(true);
      }, 1000);
    } else {
      toast({
        title: "Error",
        description: id
          ? "Failed to update Type project."
          : "Failed to create Type project.",
      });
    }
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            {id ? "Edit Type Project" : "Create Type Project"}
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
                    <FormLabel>Type Name</FormLabel>
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
                {id ? "Save Changes" : "Create Type Project"}
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
              <Button
                onClick={() => {
                  navigate("/dashboard/types");
                  refetch();
                }}
              >
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

export default TypeEdit;
