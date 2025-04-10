import React from "react";
import {
  fetchAdminProductsDetails,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";

import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/Checkbox";
import TextArea from "@/components/form/TextArea";
import ImageInputContainer from "@/components/form/ImageInputContainer";
async function EditProductpage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await fetchAdminProductsDetails(id);
  const { name, company, description, featured, price } = product;
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Update Product</h1>
      <div className="border p-8 rounded">
        {/* {IMAGE INPUT CONTAINER} */}
        <ImageInputContainer
          action={updateProductImageAction}
          name={name}
          image={product.image}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={company}
            />
            <PriceInput defaultValue={price} />
            <TextArea
              name="description"
              labelText="product description"
              defaultValue={description}
            />
            <div className="mt-6">
              <CheckboxInput
                name="featured"
                defaultChecked={featured}
                label="featured"
              />
              <SubmitButton text="update product" className="mt-8" />
            </div>
          </div>
        </FormContainer>
      </div>
    </section>
  );
}

export default EditProductpage;
