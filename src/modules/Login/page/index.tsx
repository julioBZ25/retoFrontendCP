import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";
import useLogin from "../../../auth/hooks/useLogin";
import Input from "../../../components/Input";
import { TUser, defaultUser, schemaUser } from "../utils/schema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdEmail } from "react-icons/md";
import getPayload from "../utils/getPayload";
import PopUp from "../../../components/PopUp";

export default function Login() {
  const { handleAnonLogin, handleFirebaseLogin } = useLogin();
  const [openPopUp, setOpenPopUp] = useState(false);
  const { formState, control, getValues } = useForm<TUser>({
    resolver: yupResolver(schemaUser),
    defaultValues: defaultUser,
    mode: "onChange",
  });
  const handleLogin = () => {
    const values = getValues();
    const changedFields = formState.dirtyFields;
    const payload = getPayload({ changedFields, values });
    handleAnonLogin(payload as TUser).then(() => setOpenPopUp(true));
  };
  const handleGoogleLogin = () => {
    handleFirebaseLogin().then(() => setOpenPopUp(true));
  };
  return (
    <>
      <div className="py-8 px-8">
        <section className="shadow-2xl mx-auto max-w-[350px] py-8 px-8 rounded-lg">
          <h1 className="text-3xl mb-6 text-center">Login</h1>
          <div className="flex gap-4 flex-col">
            <button className="btn btn-primary" onClick={handleGoogleLogin}>
              <FcGoogle size={20} />
              Inciar seción con google
            </button>
          </div>
          <div className="divider">O</div>
          <div className="flex gap-9 flex-col">
            <div className="flex gap-6 flex-col">
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
            </div>
            <button
              className="btn btn-primary disabled:cursor-not-allowed "
              onClick={handleLogin}
              disabled={!formState.isValid}
            >
              Continuar como invitado
            </button>
          </div>
        </section>
      </div>
      {openPopUp && (
        <PopUp
          description="¡Inicio de sesión exitoso!"
          showButtons
          onClose={() => setOpenPopUp(false)}
        />
      )}
    </>
  );
}
