import { Button, Label, TextInput, Flowbite, Textarea } from 'flowbite-react';
import { Blockquote } from "flowbite-react";
import { Consts } from '../../consts/Consts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CardContextType, ICardInput } from '../../interfaces/interfaces';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';

const AddCardPage = () => {
  const { register, handleSubmit/* , formState: { errors } */ } = useForm<ICardInput>();
  const {createCard} = useContext(CardContext) as CardContextType;

  const onSubmit: SubmitHandler<ICardInput> = (data) => {
    createCard(data);
  };

  return (
    <Flowbite>
      <div className="flex items-center justify-center ">
        <div className=" p-4 border rounded-lg shadow-md ">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Blockquote className="text-2xl font-bold py-3 border-b border-gray-500 mb-2">{Consts.ADD_CARD_HEADER}</Blockquote>
            <div className='flex gap-2 py-3 border-b border-gray-500 mb-2'>
              <div>
                <Label htmlFor="title" value="Title" />
                <TextInput
                  id="title"
                  type="text"
                  placeholder="Title..."
                  required
                  className="mt-1 block w-full"
                  {...register("title", { required: "Title Name is required" })}
                />
              </div>
              <div>
                <Label htmlFor="subtitle" value="Subtitle" />
                <TextInput
                  id="subtitle"
                  type="text"
                  placeholder="Subtitle..."
                  required
                  className="mt-1 block w-full"
                  {...register("subtitle", { required: "Subtitle is required" })}
                />
              </div>
              <div>
                <Label htmlFor="description" value="Description" />
                <Textarea id="description"
                  placeholder="Description..."
                  required
                  className="mt-1 block w-full"
                  {...register("description", { required: "Description is required" })} rows={2} />
              </div>
            </div>
            <div className='flex gap-2 py-3 border-b border-gray-500 mb-2'>
              <div>
                <Label htmlFor="phone" value="Phone" />
                <TextInput
                  id="phone"
                  type="text"
                  placeholder="Phone..."
                  required
                  className="mt-1 block w-full "
                  {...register("phone", { required: "Phone is required" })}
                />
              </div>
            </div>
            <div className='flex gap-2 py-3 border-b border-gray-500 mb-2'>
              <div>
                <Label htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  type="text"
                  placeholder="Email..."
                  required
                  className="mt-1 block w-full"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
            </div>
            <div className='flex gap-2 py-3 border-b border-gray-500 mb-2'>
              <div>
                <Label htmlFor="web" value="Web url" />
                <TextInput
                  id="web"
                  type="text"
                  placeholder="Web..."
                  required={false}
                  className="mt-1 block w-full"
                  {...register("web", { required: "Web is required" })}
                />
              </div>
            </div>
            <div className='flex gap-2 py-3 border-b border-gray-500 mb-2'>
              <div>
                <Label htmlFor="imageUrl" value="Image Url" />
                <TextInput
                  id="imageUrl"
                  type="text"
                  placeholder="Image Url..."
                  required
                  className="mt-1 block w-full"
                  {...register("image.url", { required: "Image Url is required" })}
                />
              </div>
              <div>
                <Label htmlFor="imageAlt" value="Image Alt" />
                <TextInput
                  id="imageAlt"
                  type="text"
                  placeholder="Image Alt..."
                  required
                  className="mt-1 block w-full"
                  {...register("image.alt", { required: "Image Alt is required" })}
                />
              </div>
            </div>
            <div className='flex gap-2 py-3 border-b border-gray-500 mb-2'>
              <div>
                <Label htmlFor="street" value="Street" />
                <TextInput
                  id="street"
                  type="text"
                  placeholder="Street..."
                  required
                  className="mt-1 block w-full"
                  {...register("address.street", { required: "Street is required" })}
                />
              </div>
              <div>
                <Label htmlFor="city" value="City" />
                <TextInput
                  id="city"
                  type="text"
                  placeholder="City..."
                  required
                  className="mt-1 block w-full"
                  {...register("address.city", { required: "City is required" })}
                />
              </div>
              <div>
                <Label htmlFor="state" value="State" />
                <TextInput
                  id="state"
                  type="text"
                  placeholder="State..."
                  required
                  className="mt-1 block w-full"
                  {...register("address.state", { required: "State is required" })}
                />
              </div>
              <div>
                <Label htmlFor="zip" value="Zip" />
                <TextInput
                  id="zip"
                  type="text"
                  placeholder="Zip..."
                  required
                  className="mt-1 block w-full"
                  {...register("address.zip", { required: "Zip is required" })}
                />
              </div>
              <div>
                <Label htmlFor="country" value="Country" />
                <TextInput
                  id="country"
                  type="text"
                  placeholder="Country..."
                  required
                  className="mt-1 block w-full"
                  {...register("address.country", { required: "Country is required" })}
                />
              </div>
              <div>
                <Label htmlFor="houseNumber" value="House Number" />
                <TextInput
                  id="houseNumber"
                  type="text"
                  placeholder="House Number..."
                  required
                  className="mt-1 block w-full"
                  {...register("address.houseNumber", { required: "House Number is required" })}
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Create Card
            </Button>
          </form>
        </div>
      </div>
    </Flowbite>
  )
}

export default AddCardPage