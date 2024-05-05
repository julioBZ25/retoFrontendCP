import React, { useEffect, useState } from "react";
import Input from "../../../components/Input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TPayment, defaultPayment, schemaPayment } from "../utils/schema";
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useUserStore from "../../../store/useUserStore";
import { TUser } from "../../Login/utils/schema";
import { CiCalendarDate, CiCreditCard1 } from "react-icons/ci";
import { TbPassword } from "react-icons/tb";
import usePayment from "../hooks/usePayment";
import { getPayload } from "../utils/getPayload";
import useCartStore from "../../../store/useCartStore";
import PopUp from "../../../components/PopUp";

export default function Checkout() {
  const { getUser } = useUserStore();
  const { getCart } = useCartStore();
  const user: TUser = getUser();
  const [openPopUp, setOpenPopUp] = useState(false);
  const { handlePayU } = usePayment();
  const { formState, control, getValues, setValue } = useForm<TPayment>({
    resolver: yupResolver(schemaPayment),
    defaultValues: defaultPayment,
    mode: "onChange",
  });
  const handleTotalPrice = () => {
    const cartItems = getCart();
    return cartItems.reduce((acc, currentItem) => {
      const itemPrice =
        parseFloat(currentItem.price) * (currentItem.quantity as number);
      return acc + itemPrice;
    }, 0);
  };
  const handlePayment = () => {
    const values = getValues();
    const changedFields = formState.dirtyFields;
    const payload = getPayload({ values, changedFields });
    handlePayU({ ...payload, totalPrice: handleTotalPrice() }).then(() =>
      setOpenPopUp(true)
    );
  };
  useEffect(() => {
    setValue("email", user.email);
    setValue("name", user.name);
  }, []);
  return (
    <>
      <div className="py-8 px-8">
        <section className="shadow-2xl mx-auto max-w-[500px] py-8 px-8 rounded-lg">
          <h1 className="text-3xl mb-6 text-center">Checkout</h1>
          <div className="divider" />
          <div className="flex gap-9 flex-col">
            <div className="flex gap-6 flex-col">
              <div>
                <p className="text-lg">Número de tarjeta</p>
                <Controller
                  control={control}
                  name="cardNumber"
                  render={({
                    field: { onChange, onBlur, value },
                    formState: { errors },
                  }) => (
                    <Input
                      error={errors.cardNumber?.message}
                      icon={<CiCreditCard1 size={20} />}
                      name="cardNumber"
                      value={value}
                      placeholder="Número de tarjeta"
                      type="text"
                      onBlur={onBlur}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div>
                <p className="text-lg">Fecha de expiración</p>
                <Controller
                  control={control}
                  name="expirationDate"
                  render={({
                    field: { onChange, onBlur, value },
                    formState: { errors },
                  }) => (
                    <Input
                      error={errors.expirationDate?.message}
                      icon={<CiCalendarDate size={20} />}
                      name="expirationDate"
                      value={value}
                      placeholder="MM/YY"
                      type="text"
                      onBlur={onBlur}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div>
                <p className="text-lg">CVV</p>
                <Controller
                  control={control}
                  name="cvv"
                  render={({
                    field: { onChange, onBlur, value },
                    formState: { errors },
                  }) => (
                    <Input
                      error={errors.cvv?.message}
                      icon={<TbPassword size={20} />}
                      name="cvv"
                      value={value}
                      placeholder="CVV"
                      type="text"
                      onBlur={onBlur}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div>
                <p className="text-lg">Nombre</p>
                <Controller
                  control={control}
                  name="name"
                  render={({
                    field: { onChange, onBlur, value },
                    formState: { errors },
                  }) => (
                    <Input
                      error={errors.name?.message}
                      icon={<FaRegUser size={20} />}
                      name="name"
                      value={value}
                      placeholder="Nombre"
                      type="text"
                      onBlur={onBlur}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div>
                <p className="text-lg">Email</p>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      icon={<MdEmail size={20} />}
                      name="email"
                      value={value}
                      placeholder="Email"
                      type="email"
                      onBlur={onBlur}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div>
                <p className="text-lg">Documento de identidad</p>
                <Controller
                  control={control}
                  name="documentNumber"
                  render={({
                    field: { onChange, onBlur, value },
                    formState: { errors },
                  }) => (
                    <Input
                      error={errors.documentNumber?.message}
                      icon={<p>DNI</p>}
                      name="documentNumber"
                      value={value}
                      placeholder="Número de documento"
                      type="text"
                      onBlur={onBlur}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
            <button
              className="btn btn-primary disabled:cursor-not-allowed "
              onClick={handlePayment}
              disabled={!formState.isValid}
            >
              Pagar
            </button>
          </div>
        </section>
      </div>
      {openPopUp && (
        <PopUp
          description="¡Compra Exitosa!"
          onClose={() => setOpenPopUp(false)}
        />
      )}
    </>
  );
}
