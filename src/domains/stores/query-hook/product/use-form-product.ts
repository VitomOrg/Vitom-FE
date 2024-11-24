import { useToast } from "@/components/ui";
import { FileEnum } from "@/domains/enums/file.enum";
import {
  ProductBodyRequest,
  ProductEditRequest,
} from "@/domains/models/products";
import { ProductSchema, ProductTypeSchema } from "@/domains/schemas";
import { ProductApi } from "@/domains/services";
import { FilesApi } from "@/domains/stores/query-hook/files/files.service";
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
    const files = await Promise.all(
      value.files.map(async (file, index) => {
        if (file instanceof File) {
          const response = await FilesApi.postFile(
            value.files[index] as Blob,
            FileEnum.PRODUCT
          );

          return response?.value || "";
        }
        return file;
      })
    );

    const modelMaterialFiles = await Promise.all(
      value.modelMaterialFiles.map(async (file, index) => {
        if (file instanceof File) {
          const response = await FilesApi.postFile(
            value.modelMaterialFiles[index] as Blob,
            FileEnum.PRODUCT
          );

          return response?.value || "";
        }
        return file;
      })
    );

    const fbx =
      value.fbx instanceof File
        ? (await FilesApi.postFile(value.fbx, FileEnum.PRODUCT))?.value || ""
        : value.fbx;

    const obj =
      value.obj instanceof File
        ? (await FilesApi.postFile(value.obj, FileEnum.PRODUCT))?.value || ""
        : value.obj;

    const glb =
      value.glb instanceof File
        ? (await FilesApi.postFile(value.glb, FileEnum.PRODUCT))?.value || ""
        : value.glb;

    const payload: ProductEditRequest = {
      ...value,
      files: files.filter((file) => typeof file === "string") as string[],
      modelMaterialFiles: modelMaterialFiles.filter(
        (file) => typeof file === "string"
      ) as string[],
      fbx: fbx as string,
      obj: obj as string,
      glb: glb as string,
    };

    const response = id
      ? await ProductApi.updateProduct(id, payload)
      : await ProductApi.createProduct(payload);

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
