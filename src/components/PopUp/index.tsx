import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface IPopUp {
  showButtons?: boolean;
  description: string;
  onClose: (value: boolean) => void;
}

const PopUp = ({ showButtons = false, description, onClose }: IPopUp) => {
  const navigate = useNavigate();
  return (
    <>
      <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between gap-16 p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-xl text-slate-700 font=semibold">
                  Notificación
                </h3>
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => onClose(false)}
                >
                  <IoClose size={20} />
                </button>
              </div>
              <div className="relative flex-auto p-4 text-center">
                <p className="text-success text-xl">{description}</p>
              </div>
              {showButtons && (
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => navigate("/candystore")}
                  >
                    Aceptar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default PopUp;
