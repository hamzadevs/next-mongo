import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";
import { useReducer } from "react";
import { useAppSelector } from "@/redux/hooks";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {})
  const formId = useAppSelector((state) => state.app.client.formId);

  return (
    <div className="container mx-auto py-5">
      {formId ? UpdateUserForm({formId, formData, setFormData}): AddUserForm({formData, setFormData}) }
    </div>
  );
}
