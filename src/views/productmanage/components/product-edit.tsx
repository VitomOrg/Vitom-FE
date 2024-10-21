import {
  Button,
  Card,
  CardContent,
  CardDescription,
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
} from "@/components/ui";
import { ProductSchema, ProductTypeSchema } from "@/domains/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ProductEdit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ProductTypeSchema>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      license: 0,
      name: "",
      description: "",
      price: 0,
      typeIds: [],
      softwareIds: [],
      file: [],
      modelMaterialFiles: [],
    },
  });

  function onSubmit(data: ProductTypeSchema) {
    setIsSubmitting(true);
    console.log(data);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  }

  return (
    <Card className="w-full p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Add New Product
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Enter the details for your new product.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Grouping related fields in grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {/* License and Name Fields */}
              <FormField
                control={form.control}
                name="license"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>License</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Price and Description */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
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
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Type and Software IDs */}
              <FormField
                control={form.control}
                name="typeIds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type IDs</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Comma-separated type IDs"
                        onChange={(e) =>
                          field.onChange(e.target.value.split(","))
                        }
                      />
                    </FormControl>
                    <FormDescription>
                      Enter IDs separated by commas
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="softwareIds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Software IDs</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Comma-separated software IDs"
                        onChange={(e) =>
                          field.onChange(e.target.value.split(","))
                        }
                      />
                    </FormControl>
                    <FormDescription>
                      Enter software IDs separated by commas
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* File uploads */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        onChange={(e) =>
                          field.onChange(
                            e.target.files ? Array.from(e.target.files) : []
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="modelMaterialFiles"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Model Material Files</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        onChange={(e) =>
                          field.onChange(
                            e.target.files ? Array.from(e.target.files) : []
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fbx"
                render={({ field: { onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>FBX File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".fbx"
                        onChange={(e) =>
                          onChange(e.target.files ? e.target.files[0] : null)
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="obj"
                render={({ field: { onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>OBJ File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".obj"
                        onChange={(e) =>
                          onChange(e.target.files ? e.target.files[0] : null)
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="glb"
                render={({ field: { onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>GLB File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".glb"
                        onChange={(e) =>
                          onChange(e.target.files ? e.target.files[0] : null)
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit button */}
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProductEdit;
