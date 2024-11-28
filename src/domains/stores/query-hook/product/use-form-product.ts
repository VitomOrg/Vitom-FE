import { useToast } from "@/components/ui";
import { ProductEditRequest } from "@/domains/models/products";
import { ProductSchema, ProductTypeSchema } from "@/domains/schemas";
import { ProductApi } from "@/domains/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface IUseFormProduct {
  defaultValues?: ProductEditRequest;
  id?: string;
}

const useFormProduct = ({ defaultValues, id }: IUseFormProduct) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setloading] = useState<boolean>(false);

  const form = useForm<ProductTypeSchema>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      description: defaultValues?.description || "",
      price: defaultValues?.price || 0,
      // license: defaultValues?.license || 0,
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
    setloading(true);
    const response = id
      ? await ProductApi.updateProduct(id, value)
      : await ProductApi.createProduct(value);

    if (response?.isSuccess) {
      toast({
        title: "Success",
        description: id ? "Product updated" : "Product created",
      });
      setloading(false);
      navigate("/dashboard/products");
    } else {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
      setloading(false);
    }
  };

  return {
    form,
    onSubmit,
    loading,
  };
};

export default useFormProduct;
