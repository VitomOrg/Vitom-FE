import { useToast } from "@/components/ui";
import { ProductBodyRequest } from "@/domains/models/products";
import { ProductSchema, ProductTypeSchema } from "@/domains/schemas";
import { ProductApi } from "@/domains/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface IUseFormProduct {
  defaultValues?: ProductBodyRequest;
  id?: string;
}

const useFormProduct = ({ defaultValues, id }: IUseFormProduct) => {
  const { toast } = useToast();

  const form = useForm<ProductTypeSchema>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      description: defaultValues?.description || "",
      price: defaultValues?.price || 0,
      license: defaultValues?.license || 0,
      softwareIds: defaultValues?.softwareIds || [],
      typeIds: defaultValues?.typeIds || [],
      files: defaultValues?.files || [],
      modelMaterialFiles: defaultValues?.modelMaterialFiles || [],
      fbx: defaultValues?.fbx || "",
      obj: defaultValues?.obj || "",
      glb: defaultValues?.glb || "",
    },
  });

  const onSubmit = async (value: ProductTypeSchema) => {
    console.log("value", value);

    const response = id
      ? await ProductApi.updateProduct(id, value)
      : await ProductApi.createProduct(value);

    if (response?.isSuccess) {
      toast({
        title: "Success",
        description: id ? "Product updated" : "Product created",
      });
    } else {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    }

    if (response?.isSuccess) {
      form.reset();
    }
  };

  return {
    form,
    onSubmit,
  };
};

export default useFormProduct;
