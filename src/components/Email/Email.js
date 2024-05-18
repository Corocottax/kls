import "./Email.css";
import { FieldForm } from "../FieldForm/FieldForm";
import { sendEmail } from "../../utils/email/send";
import { language } from "../../lang/variable";

export const Email = () => {
  const contact = document.createElement("section");
  contact.id = "contact";
  contact.innerHTML = `
    <h3>${language.contact_h3}</h3>
  `
  const emailForm = document.createElement("form");
  emailForm.id = "email-form";
  emailForm.addEventListener("submit", sendEmail);

  emailForm.innerHTML = `
        ${FieldForm({
          labelText: language.email_form_label_email,
          className: "email",
          type: "email",
          placeholder: language.email_form_placeholder_email,
        })}
        ${FieldForm({
          labelText: language.email_form_label_asunto,
          className: "subject",
          placeholder: language.email_form_placeholder_asunto,
        })}
        ${FieldForm({
          labelText: language.email_form_label_contenido,
          className: "content",
          placeholder: language.email_form_placeholder_contenido,
        })}
        <button>${language.email_form_button}</button>
    `;

  const app = document.querySelector("#app");

  contact.append(emailForm)
  app.append(contact);
};