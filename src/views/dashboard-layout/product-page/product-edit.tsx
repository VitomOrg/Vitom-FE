import { FileInput } from "@/components/common/file-input";
import ViewGlTF from "@/components/three_ui/gltf/view-gltf";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  Textarea,
  Badge,
  Separator,
} from "@/components/ui";
import { FileEnum } from "@/domains/enums/file.enum";
import { FilesApi } from "@/domains/stores/query-hook/files/files.service";
import useFormProduct from "@/domains/stores/query-hook/product/use-form-product";
import useSoftware from "@/domains/stores/query-hook/software/use-software";
import useTypes from "@/domains/stores/query-hook/types/use-types";
import { CheckCircle, PlusCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductEdit = () => {
  const { id } = useParams<{ id: string }>();
  const { state: productState } = useLocation();
  const [typeSelected, setTypeSelected] = useState<string[]>([]);
  const [softwareSelected, setSoftwareSelected] = useState<string[]>([]);
  const [image, setImage] = useState<string[]>([]);
  const [material, setMaterial] = useState<string[]>([]);
  const [fbx, setFbx] = useState<string>();
  const [obj, setObj] = useState<string>();
  const [glb, setGlb] = useState<string>();

  const { data: softwares } = useSoftware({
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

  const { form, onSubmit, loading } = useFormProduct({
    id,
    defaultValues: productState,
  });

  useEffect(() => {
    const state = productState;
    if (state) {
      setTypeSelected(state.typeIds);
      setSoftwareSelected(state.softwareIds);
      setImage(state.files);
      setMaterial(state.modelMaterialFiles);
      setFbx(state.fbx);
      setObj(state.obj);
      setGlb(state.glb);
    } else {
      setTypeSelected([]);
      setSoftwareSelected([]);
      setImage([]);
      setMaterial([]);
      setFbx("");
      setObj("");
      setGlb("");
    }
  }, [productState]);

  const returnURLFile = async (file: Blob, fileEnum: FileEnum) => {
    try {
      const response = await FilesApi.postFile(file, fileEnum);

      return response?.value;
    } catch (error) {
      console.log(error);
    }
  };

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

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid grid-cols-2 gap-4 mb-10 ">
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
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="col-span-2">
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
                  <FormItem className="flex flex-row items-start col-span-2 p-4 space-x-3 space-y-0 border rounded-md border-muted-foreground">
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
                        Please provide the license information for this product.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="softwareIds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Softwares</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        if (!softwareSelected.includes(value)) {
                          setSoftwareSelected([...softwareSelected, value]);
                          field.onChange([...field.value, value]);
                        } else {
                          setSoftwareSelected(
                            softwareSelected.filter((id) => id !== value)
                          );
                          field.onChange(
                            field.value.filter((id) => id !== value)
                          );
                        }
                      }}
                      value={field.value[field.value.length - 1] || ""}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select software" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {softwares?.data.map((sw) => (
                          <SelectItem key={sw.id} value={sw.id}>
                            {sw.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription className="space-y-4">
                      <span>Selected softwares: </span>
                      <div className="flex items-center gap-2">
                        {softwares?.data
                          .filter((sw) => softwareSelected.includes(sw.id))
                          .map((sw) => (
                            <Badge
                              key={sw.id}
                              className="flex items-center gap-2"
                            >
                              <span>{sw.name}</span>
                              <XCircle
                                size={16}
                                onClick={() => {
                                  setSoftwareSelected(
                                    softwareSelected.filter(
                                      (id) => id !== sw.id
                                    )
                                  );
                                  field.onChange(
                                    field.value.filter((id) => id !== sw.id)
                                  );
                                }}
                              />
                            </Badge>
                          ))}
                      </div>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="typeIds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Types</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        if (!typeSelected.includes(value)) {
                          setTypeSelected([...typeSelected, value]);
                          field.onChange([...field.value, value]);
                        } else {
                          setTypeSelected(
                            typeSelected.filter((id) => id !== value)
                          );
                          field.onChange(
                            field.value.filter((id) => id !== value)
                          );
                        }
                      }}
                      value={field.value[field.value.length - 1] || ""}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {types?.data.map((sw) => (
                          <SelectItem key={sw.id} value={sw.id}>
                            {sw.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription className="space-y-4">
                      <span>Selected types: </span>
                      <div className="flex items-center gap-2">
                        {types?.data
                          .filter((sw) => typeSelected.includes(sw.id))
                          .map((sw) => (
                            <Badge
                              key={sw.id}
                              className="flex items-center gap-2"
                            >
                              <span>{sw.name}</span>
                              <XCircle
                                size={16}
                                onClick={() => {
                                  setTypeSelected(
                                    typeSelected.filter((id) => id !== sw.id)
                                  );
                                  field.onChange(
                                    field.value.filter((id) => id !== sw.id)
                                  );
                                }}
                              />
                            </Badge>
                          ))}
                      </div>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <Separator />
            </div>

            <div className="space-y-4">
              <h6>Product Image</h6>
              <FileInput
                accept=".png, .jpg, .jpeg"
                maxFiles={4}
                multiple
                onFilesSelected={async (file) => {
                  file.map(async (f) => {
                    returnURLFile(f, FileEnum.PRODUCT).then((url) => {
                      if (!url) return;
                      setImage([...image, url]);
                      form.setValue("files", [...form.getValues("files"), url]);
                    });
                  });
                }}
              />
              <div className="grid grid-cols-4 gap-4">
                {image.map((img, index) => (
                  <div key={index} className="relative gap-2">
                    <div className="absolute p-1 rounded-sm cursor-pointer top-2 right-2 bg-destructive text-destructive-foreground">
                      <XCircle
                        size={16}
                        onClick={() => {
                          setImage(image.filter((_, i) => i !== index));
                          form.setValue(
                            "files",
                            image.filter((_, i) => i !== index)
                          );
                        }}
                      />
                    </div>
                    <img
                      src={img}
                      alt="product"
                      className="object-cover rounded-lg size-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h6>Model Material File</h6>
              <FileInput
                accept=".png, .jpg, .jpeg"
                maxFiles={4}
                multiple
                onFilesSelected={(file) => {
                  file.map(async (f) => {
                    returnURLFile(f, FileEnum.MODELMATERIAL).then((url) => {
                      if (!url) return;
                      setMaterial([...material, url]);
                      form.setValue("modelMaterialFiles", [
                        ...form.getValues("modelMaterialFiles"),
                        url,
                      ]);
                    });
                  });
                }}
              />
              <div className="grid grid-cols-4 gap-4">
                {material.map((img, index) => (
                  <div key={index} className="relative gap-2">
                    <div className="absolute p-1 rounded-sm cursor-pointer top-2 right-2 bg-destructive text-destructive-foreground">
                      <XCircle
                        size={16}
                        onClick={() => {
                          setMaterial(material.filter((_, i) => i !== index));
                          form.setValue(
                            "modelMaterialFiles",
                            material.filter((_, i) => i !== index)
                          );
                        }}
                      />
                    </div>
                    <img
                      src={img}
                      alt="product"
                      className="object-cover rounded-lg size-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-2">
              <Separator />
            </div>
            <div className="grid grid-cols-3 col-span-2 gap-4">
              <div className="space-y-4">
                <h6>FBX file</h6>
                <FormField
                  control={form.control}
                  name="fbx"
                  render={() => (
                    <FormItem>
                      <FormControl>
                        <FileInput
                          accept=".fbx"
                          maxFiles={1}
                          onFilesSelected={(file) => {
                            returnURLFile(file[0], FileEnum.MODEL).then(
                              (url) => {
                                if (!url) return;
                                form.setValue("fbx", url);
                                setFbx(URL.createObjectURL(file[0]));
                              }
                            );
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {fbx ? (
                  <div className="h-96">
                    <ViewGlTF url={fbx} format="fbx" />
                  </div>
                ) : (
                  <div className="grid w-full border rounded-lg h-96 bg-accent place-content-center border-muted-foreground">
                    <span className="font-semibold text-muted-foreground">
                      3D Model Preview
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h6>OBJ file</h6>
                <FormField
                  control={form.control}
                  name="obj"
                  render={() => (
                    <FormItem>
                      <FormControl>
                        <FileInput
                          accept=".obj"
                          maxFiles={1}
                          onFilesSelected={(file) => {
                            returnURLFile(file[0], FileEnum.MODEL).then(
                              (url) => {
                                if (!url) return;
                                form.setValue("obj", url);
                                setObj(URL.createObjectURL(file[0]));
                              }
                            );
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {obj ? (
                  <div className="h-96">
                    <ViewGlTF url={obj} format="obj" />
                  </div>
                ) : (
                  <div className="grid w-full border rounded-lg h-96 bg-accent place-content-center border-muted-foreground">
                    <span className="font-semibold text-muted-foreground">
                      3D Model Preview
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h6>GLB file</h6>
                <FormField
                  control={form.control}
                  name="glb"
                  render={() => (
                    <FormItem>
                      <FormControl>
                        <FileInput
                          accept=".glb"
                          maxFiles={1}
                          onFilesSelected={(file) => {
                            returnURLFile(file[0], FileEnum.MODEL).then(
                              (url) => {
                                if (!url) return;
                                form.setValue("glb", url);
                                setGlb(URL.createObjectURL(file[0]));
                              }
                            );
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {glb ? (
                  <div className="h-96">
                    <ViewGlTF url={glb} format="gltf" />
                  </div>
                ) : (
                  <div className="grid w-full border rounded-lg h-96 bg-accent place-content-center border-muted-foreground">
                    <span className="font-semibold text-muted-foreground">
                      3D Model Preview
                    </span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                "Loading..."
              ) : (
                <div className="flex items-center gap-2">
                  {id ? <CheckCircle size={16} /> : <PlusCircle size={16} />}
                  {id ? <span>Save Changes</span> : <span>Create</span>}
                </div>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default ProductEdit;
