import { Button, Label, TextInput, Checkbox, Flowbite } from 'flowbite-react';
import { Blockquote } from "flowbite-react";
import { Consts } from '../../consts/Consts';
import { useForm } from 'react-hook-form';

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Flowbite>
      <div className="flex items-center justify-center ">
        <div className=" p-4 border rounded-lg shadow-md container">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Blockquote className="text-2xl font-bold py-3 border-b border-gray-500 mb-2">{Consts.SIGNUP_HEADER}</Blockquote>
            <div className='flex gap-2 py-3 border-b border-gray-500 mb-2'>
              <div>
                <Label htmlFor="firstName" value="First Name" />
                <TextInput
                  id="firstName"
                  type="text"
                  placeholder="First name..."
                  required
                  className="mt-1 block w-full"
                  {...register("first", { required: "First Name is required" })}
                />
              </div>
              <div>
                <Label htmlFor="middleName" value="Middle Name" />
                <TextInput
                  id="middleName"
                  type="text"
                  placeholder="Middle Name..."
                  required={false}
                  className="mt-1 block w-full"
                  {...register("middle", { required: "Middle Name is required" })}
                />
              </div>
              <div>
                <Label htmlFor="lastName" value="Last Name" />
                <TextInput
                  id="lastName"
                  type="text"
                  placeholder="Last Name..."
                  required
                  className="mt-1 mx-1 block w-full"
                  {...register("last", { required: "Last Name is required" })}
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
                  {...register("url", { required: "Image Url is required" })}
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
                  {...register("alt", { required: "Image Alt is required" })}
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
              <div>
                <Label htmlFor="phone" value="Phone" />
                <TextInput
                  id="phone"
                  type="text"
                  placeholder="Phone..."
                  required
                  className="mt-1 block w-full"
                  {...register("phone", { required: "Phone is required" })}
                />
              </div>
              <div>
                <Label htmlFor="password" value="Password" />
                <TextInput
                  id="password"
                  type="text"
                  placeholder="Password..."
                  required
                  className="mt-1 block w-full"
                  {...register("password", { required: "Password is required" })}
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
                  {...register("street", { required: "Street is required" })}
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
                  {...register("city", { required: "City is required" })}
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
                  {...register("state", { required: "State is required" })}
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
                  {...register("zip", { required: "Zip is required" })}
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
                  {...register("country", { required: "Country is required" })}
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
                  {...register("houseNumber", { required: "House Number is required" })}
                />
              </div>
            </div>
            <div className="flex items-center mb-2">
              <Checkbox id="isBusiness" {...register("isBusiness")}/>
              <Label htmlFor="isBusiness" className="ml-2">
                Business
              </Label>
            </div>
            <Button type="submit" className="w-full">
              Create
            </Button>
          </form>
        </div>
      </div>
    </Flowbite>
  )
}

export default SignupPage