import { AddressFormContainer } from "./styles";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
      <Input
        placeholder="Postal Code"
        type="number"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Street"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        type="number"
        placeholder="Number"
        {...register("number")}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complement"
        className="complement"
        {...register("complement")}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="District"
        {...register("district")}
        error={errors.district?.message}
      />
      <Input
        placeholder="City"
        {...register("city")}
        error={errors.city?.message}
      />
      <Input placeholder="State" {...register("state")} error={errors.uf?.message} />
    </AddressFormContainer>
  );
}
