import { FileInput } from "@/components/common/file-input";
// import ViewGlTF from "@/components/three_ui/gltf/view-gltf";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Textarea,
  useToast,
} from "@/components/ui";
import { Image } from "@/domains/models/products";
import { ProductResponse } from "@/domains/models/products/product.response";
import { ProductSchema, ProductTypeSchema } from "@/domains/schemas";
import { ProductApi } from "@/domains/services";
import useSoftware from "@/domains/stores/query-hook/software/use-software";
import useTypes from "@/domains/stores/query-hook/types/use-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, PlusCircle, XCircle } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";

const ProductEdit = () => {
  const { id } = useParams<{ id: string }>();
  // const [softwaresSelect, setSoftwaresSelect] = useState<string[]>([]);
  // const [typesSelect, setTypesSelect] = useState<string[]>([]);

  const { toast } = useToast();

  const { state: ProductState } = useLocation();

  // const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: software } = useSoftware({
    options: {
      pageIndex: 1,
      pageSize: 100,
    },
  });

  const { data: types } = useTypes({
    options: {
      pageIndex: 1,
      pageSize: 100,
    },
  });

  useEffect(() => {
    const data = ProductState as ProductResponse;

    if (ProductState) {
      const wereSelectedSoftwares = data.softwares;
      console.log("wereSelectedSoftwares", wereSelectedSoftwares);

      // const wereSelectedTypes = data.types;

      // const softwareIds = software?.data
      //   .filter((sw) => {
      //     wereSelectedSoftwares.find((s) => s)
      //   })
      //   .map((sw) => sw.id);
      // const typeIds = types?.data.map((type) => {
      //   if (wereSelectedTypes?.some((t) => t.includes(type.name))) {
      //     return type.id;
      //   }
      // });

      // console.log("softwareIds", softwareIds);
    }
  }, [ProductState, software, types]);

  const form = useForm<ProductTypeSchema>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      license: ProductState?.license || 0,
      name: ProductState?.name || "",
      description: ProductState?.description || "",
      price: ProductState?.price || 0,
      typeIds: ProductState?.typeIds || [],
      softwareIds: ProductState?.softwareIds || [],
      files: (ProductState?.images as Image[]).map((img) => img.url) || [],
      modelMaterialFiles: ProductState?.modelMaterials || [],
      fbx: ProductState?.fbxUrl || "",
      obj: ProductState?.objUrl || "",
      glb: ProductState?.glbUrl || "",
    },
  });

  async function onSubmit(data: ProductTypeSchema) {
    // setIsSubmitting(true);

    const response = id
      ? await ProductApi.updateProduct(id, data)
      : await ProductApi.createProduct(data);

    if (response) {
      toast({
        title: "Product saved successfully",
        description: response?.successMessage,
      });
    }

    // setTimeout(() => {
    //   setIsSubmitting(false);
    // }, 1000);

    // if (response) {
    //   form.reset();
    // }
  }

  return (
    <Card className="w-full p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          {id ? "Edit Product" : "Create Product"}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {id
            ? "Edit the product details and submit to save changes."
            : "Fill in the product details and submit to create a new product."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Grouping related fields in grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Product name ..." />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Product price ..."
                            type="number"
                            onChange={(e) => {
                              field.onChange(Number(e.target.value));
                            }}
                            onBlur={field.onBlur}
                            value={field.value === 0 ? "" : field.value}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          {...field}
                          placeholder="Product description ..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="license"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start p-4 space-x-3 space-y-0 border rounded-md">
                      <FormControl>
                        <Checkbox
                          checked={field.value === 1 ? true : false}
                          onCheckedChange={(e) => {
                            field.onChange(e === true ? 1 : 0);
                          }}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>License</FormLabel>
                        <FormDescription>
                          Please provide the license information for this
                          product.
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Type and Software IDs */}
                <FormField
                  control={form.control}
                  name="typeIds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange([...field.value, value]);
                        }}
                        value={field.value[field.value.length - 1] || ""}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select types" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {types?.data.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription className="space-y-4">
                        <span>Selected types:</span>
                        <div>
                          {/* {types?.data.map((id) => {
                            // const type = types?.data.find((s) => s.id === id);
                            // return (
                            //   <Badge key={id} className="mt-2 mr-2">
                            //     {type?.name}
                            //     <XCircle
                            //       size={16}
                            //       className="ml-2 cursor-pointer"
                            //       onClick={() =>
                            //         field.onChange(
                            //           field.value.filter((v) => v !== id)
                            //         )
                            //       }
                            //     />
                            //   </Badge>
                            // );
                          })} */}
                        </div>
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
                      <FormLabel>Software</FormLabel>
                      <Select
                        onValueChange={(value) =>
                          field.onChange([...field.value, value])
                        }
                        value={field.value[field.value.length - 1] || ""}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select software" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {software?.data.map((sw) => (
                            <SelectItem key={sw.id} value={sw.id}>
                              {sw.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription className="space-y-4">
                        <span>Selected software: </span>
                        <div>
                          {field.value.map((id) => {
                            const sw = software?.data.find((s) => s.id === id);
                            return (
                              <Badge key={id} className="mt-2 mr-2">
                                {sw?.name}
                                <XCircle
                                  size={16}
                                  className="ml-2 cursor-pointer"
                                  onClick={() =>
                                    field.onChange(
                                      field.value.filter((v) => v !== id)
                                    )
                                  }
                                />
                              </Badge>
                            );
                          })}
                        </div>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Separator className="my-5" />
            {/* File uploads */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="files"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel>
                      Product Files{" "}
                      <span className="text-sm text-muted-foreground">
                        (Max 4 file)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <FileInput
                        accept=".img,.png"
                        multiple
                        maxFiles={4}
                        onFilesSelected={(files) => {
                          console.log("value", value);
                          onChange(files);
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="modelMaterialFiles"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel>
                      Model Material Files{" "}
                      <span className="text-sm text-muted-foreground">
                        (Max 4 file)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <FileInput
                        maxFiles={4}
                        multiple
                        onFilesSelected={(file) => {
                          onChange(file);
                          console.log("Model Material Files value", value);
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Separator className="my-5 " />
            {/* FBX, OBJ, GLB File uploads */}
            <div className="grid grid-cols-3 gap-4 ">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="fbx"
                  render={({ field: { onChange, value, ...field } }) => (
                    <FormItem>
                      <FormLabel>FBX File</FormLabel>
                      <FormControl>
                        <FileInput
                          // // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          // value={value as any}
                          accept=".fbx"
                          onFilesSelected={(file) => {
                            onChange(file[0]);
                            console.log("FBX value", value);
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* {form.watch("fbx") ? (
                  <div className="h-96">
                    <ViewGlTF
                      glbUrl={URL.createObjectURL(form.watch("fbx"))}
                      showGrid={true}
                    />
                  </div>
                ) : (
                  <div className="border border-dashed h-96 bg-accent/50 rounded-xl"></div>
                )} */}
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="obj"
                  render={({ field: { onChange, value, ...field } }) => (
                    <FormItem>
                      <FormLabel>OBJ File</FormLabel>
                      <FormControl>
                        <FileInput
                          accept=".obj"
                          onFilesSelected={(file) => {
                            onChange(file[0]);
                            console.log("OBJ value", value);
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* {form.watch("obj") ? (
                  <div className="h-96">
                    <ViewGlTF
                      glbUrl={URL.createObjectURL(form.watch("obj"))}
                      showGrid={true}
                    />
                  </div>
                ) : (
                  <div className="border border-dashed h-96 bg-accent/50 rounded-xl"></div>
                )} */}
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="glb"
                  render={({ field: { onChange, value, ...field } }) => (
                    <FormItem>
                      <FormLabel>GLB File</FormLabel>
                      <FormControl>
                        <FileInput
                          accept=".glb"
                          onFilesSelected={(file) => {
                            onChange(file[0]);
                            console.log("GLB value", value);
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* {form.watch("glb") ? (
                  <div className="h-96">
                    <ViewGlTF
                      glbUrl={URL.createObjectURL(form.watch("glb"))}
                      showGrid={true}
                    />
                  </div>
                ) : (
                  <div className="border border-dashed h-96 bg-accent/50 rounded-xl"></div>
                )} */}
              </div>
            </div>
            {/* Submit button */}
            <Button type="submit" className="w-full">
              {/* {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <Loader className="size-4 animate-spin-slow " />
                  <span className="ml-2">Submitting</span>
                </div>
              ) : ( */}
              <div className="flex items-center gap-2">
                {id ? <CheckCircle size={16} /> : <PlusCircle size={16} />}
                {id ? <span>Save Changes</span> : <span>Create</span>}
              </div>
              {/* )} */}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProductEdit;
