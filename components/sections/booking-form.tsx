import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MoonLoader from "react-spinners/MoonLoader";
import { Formik, Form, Field, useFormikContext, useField } from "formik";
import * as Yup from "yup";
import { IoMdAlert } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignupSchema = Yup.object().shape({
  from_name: Yup.string().required("Name is a required field"),
  from_email: Yup.string()
    .email("Enter valid email ")
    .required("Email is a required field")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter valid email !"
    ),
  message: Yup.string().required("Message is a required field"),
});

const BookingForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = useState(false);

  return (
    <div>
      <Formik
        initialValues={{
          from_name: "",
          from_birth: "",
          from_city: "",
          from_number: "",
          from_email: "",
          from_instagram: "",
          from_inspiration: "",
          from_experience_radio: "",
          from_experience: "",
          from_restrictions_radio: "",
          from_restrictions: "",
          from_nutrition_radio: "",
          from_nutrition: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          // emailjs
          //   .sendForm(
          //     import.meta.env.VITE_SERVICE_ID,
          //     import.meta.env.VITE_TEMPLATE_ID,
          //     form.current,
          //     {
          //       publicKey: import.meta.env.VITE_PUBLIC_KEY,
          //     }
          //   )
          //   .then(
          //     () => {
          //       console.log("SUCCESS!");
          //       setSuccess(true);
          //       resetForm();
          //     },
          //     (error) => {
          //       if (values.from_name.length === 0) {
          //         console.log("error");
          //       }
          //       console.log("FAILED...", error.text);
          //     }
          //   );
        }}
      >
        {({ values, errors, touched, setFieldValue, isSubmitting }) => {
          return (
            <Form className="flex flex-col gap-9 text-gray-700 my-5" ref={form}>
              {/* name */}
              <label className="text-xl font-semibold">Имя и Фамилия *</label>
              <Field
                name="from_name"
                type="text"
                className={`h-12 rounded-lg bg-lightbrown px-2  ${
                  errors.from_name && touched.from_name
                    ? "outline-red-500 outline"
                    : "outline-blue-500"
                }`}
              />
              {errors.from_name && touched.from_name ? (
                <div className="text-red-500 flex flex-row gap-1 items-stretch">
                  {errors.from_name}
                  <IoMdAlert size={20} />
                </div>
              ) : null}
              {/* birth */}
              <label className="text-xl font-semibold">Дата Рождения *</label>
              <DatePicker
                selected={
                  values.from_birth ? new Date(values.from_birth) : null
                }
                onChange={(val) => setFieldValue("from_birth", val)}
                name="from_birth"
                dateFormat="dd.MM.yyyy"
                className={`h-12 w-full rounded-lg bg-lightbrown px-2  ${
                  errors.from_birth && touched.from_birth
                    ? "outline-red-500 outline"
                    : "outline-blue-500"
                }`}
              />
              {errors.from_birth && touched.from_birth ? (
                <div className="text-red-500 flex flex-row gap-1 items-stretch">
                  {errors.from_birth}
                  <IoMdAlert size={20} />
                </div>
              ) : null}
              {/* city */}
              <label className="text-xl font-semibold">
                Город проживания *
              </label>
              <Field
                name="from_city"
                type="text"
                className={`h-12 rounded-lg bg-lightbrown px-2 ${
                  errors.from_city && touched.from_city
                    ? "outline-red-500 outline"
                    : "outline-blue-500"
                }`}
              />
              {errors.from_city && touched.from_city ? (
                <div className="text-red-500 flex flex-row gap-1 items-stretch">
                  {errors.from_city}
                  <IoMdAlert size={20} />
                </div>
              ) : null}
              {/* number */}
              <label className="text-xl font-semibold">Номер телефона *</label>
              <Field
                name="from_number"
                type="text"
                className={`h-12 rounded-lg bg-lightbrown px-2 ${
                  errors.from_number && touched.from_number
                    ? "outline-red-500 outline"
                    : "outline-blue-500"
                }`}
              />
              {errors.from_number && touched.from_number ? (
                <div className="text-red-500 flex flex-row gap-1 items-stretch">
                  {errors.from_number}
                  <IoMdAlert size={20} />
                </div>
              ) : null}
              {/* email */}
              <label className="text-xl font-semibold">
                Электронная почта *
              </label>
              <Field
                name="from_email"
                type="email"
                className={`h-12 rounded-lg bg-lightbrown px-2 ${
                  errors.from_email && touched.from_email
                    ? "outline-red-500 outline"
                    : "outline-blue-500"
                }`}
              />
              {errors.from_email && touched.from_email ? (
                <div className="text-red-500 flex flex-row gap-1 items-stretch">
                  {errors.from_email}
                  <IoMdAlert size={20} />
                </div>
              ) : null}
              {/* instagram */}
              <label className="text-xl font-semibold">
                Профиль инстаграм (не обязателно)
              </label>
              <Field
                name="from_instagram"
                type="text"
                className={`h-12 rounded-lg bg-lightbrown px-2 ${
                  errors.from_instagram && touched.from_instagram
                    ? "outline-red-500 outline"
                    : "outline-blue-500"
                }`}
              />
              {/* inspiration */}
              {/* experience */}
              <div className="flex flex-col gap-8">
                <label className="text-xl font-semibold">
                  Есть ли у тебя опыт практики йоги/медитации?
                </label>

                {/* Выбор: да или нет */}
                <div className="flex gap-4 justify-center items-center">
                  <label className="flex items-center gap-2">
                    <Field
                      type="radio"
                      name="from_experience_radio"
                      className="w-5 h-5 text-cyan-600 bg-white border-2 border-gray-300 rounded-full  checked:border-cyan-600 checked:bg-cyan-600"
                      value="yes"
                    />
                    Да
                  </label>
                  <label className="flex items-center gap-2">
                    <Field
                      type="radio"
                      name="from_experience_radio"
                      className="w-5 h-5 text-cyan-600 bg-white border-2 border-gray-300 rounded-full  checked:border-cyan-600 checked:bg-cyan-600"
                      value="no"
                    />
                    Нет
                  </label>
                </div>

                {/* Если "Да", отображаем текстовое поле */}
                {values.from_experience_radio === "yes" && (
                  <div className="flex flex-col gap-3">
                    <label className="text-md font-semibold">
                      Какой именно опыт? Как давно?
                    </label>
                    <Field
                      name="from_eperience"
                      as="textarea"
                      type="text"
                      rows="4"
                      cols="20"
                      className="rounded-lg bg-lightbrown p-2 "
                    />
                  </div>
                )}
              </div>
              <hr className="border-t-1 border-gray-400 my-3" />
              {/* restrictions */}
              <div className="flex flex-col gap-8">
                <label className="text-xl font-semibold">
                  Есть ли у тебя ограничения по здоровью, хронические
                  заболевания, травмы, аллергии, которые нам важно учесть?
                </label>

                {/* Выбор: да или нет */}
                <div className="flex gap-4 justify-center items-center">
                  <label className="flex items-center gap-2">
                    <Field
                      type="radio"
                      name="from_restrictions_radio"
                      value="yes"
                      className="w-5 h-5 text-cyan-600 bg-white border-2 border-gray-300 rounded-full  checked:border-cyan-600 checked:bg-cyan-600"
                    />
                    Да
                  </label>
                  <label className="flex items-center gap-2">
                    <Field
                      className="w-5 h-5 text-cyan-600 bg-white border-2 border-gray-300 rounded-full  checked:border-cyan-600 checked:bg-cyan-600"
                      type="radio"
                      name="from_restrictions_radio"
                      value="no"
                    />
                    Нет
                  </label>
                </div>

                {/* Если "Да", отображаем текстовое поле */}
                {values.from_restrictions_radio === "yes" && (
                  <div className="flex flex-col gap-3">
                    <label className="text-md font-semibold">
                      Опиши свои ограничения:
                    </label>
                    <Field
                      name="from_restrictions"
                      type="text"
                      as="textarea"
                      rows="4"
                      cols="20"
                      className="rounded-lg bg-lightbrown p-2 "
                    />
                  </div>
                )}
              </div>
              <hr className="border-t-1 border-gray-400 my-3" />
              {/* nutrition */}
              <div className="flex flex-col gap-8">
                <label className="text-xl font-semibold">
                  Следуешь ли ты определённому типу питания (вегетарианство,
                  безглютеновая диета, непереносимость лактозы и пр.)?
                </label>
                <div className="flex gap-4 justify-center items-center">
                  <label className="flex items-center gap-2">
                    <Field
                      type="radio"
                      name="from_nutrition_radio"
                      value="yes"
                      className="w-5 h-5 text-cyan-600 bg-white border-2 border-gray-300 rounded-full  checked:border-cyan-600 checked:bg-cyan-600"
                    />
                    Да
                  </label>
                  <label className="flex items-center gap-2">
                    <Field
                      type="radio"
                      name="from_nutrition_radio"
                      value="no"
                      className="w-5 h-5 text-cyan-600 bg-white border-2 border-gray-300 rounded-full  checked:border-cyan-600 checked:bg-cyan-600"
                    />
                    Нет
                  </label>
                </div>

                {values.from_nutrition_radio === "yes" && (
                  <div className="flex flex-col gap-3">
                    <label className="text-md font-semibold">
                      Напиши подробнее о своём типе питания:
                    </label>
                    <Field
                      name="from_nutrition"
                      as="textarea"
                      type="text"
                      rows="4"
                      cols="20"
                      className="rounded-lg bg-lightbrown p-2 "
                    />
                  </div>
                )}
              </div>
              <hr className="border-t-1 border-gray-400 my-3" />
              <div className="flex flex-col gap-8">
                <label className="text-xl font-semibold">
                  Что вдохновило тебя принять участие в девичнике?
                </label>
                <Field
                  name="from_inspiration"
                  as="textarea"
                  type="text"
                  rows="9"
                  cols="50"
                  className="rounded-lg bg-lightbrown p-2 "
                />
              </div>
              {/* <Field
                name="message"
                as="textarea"
                type="text"
                placeholder="Message"
                rows="9"
                cols="50"
                className={`rounded-lg bg-lightbrown p-2 ${
                  errors.message && touched.message
                    ? "outline-red-500 outline"
                    : "outline-blue-500"
                }`}
              />
              {errors.message && touched.message ? (
                <div className="text-red-500 flex flex-row gap-1 items-stretch">
                  {errors.message}
                  <IoMdAlert size={20} />
                </div>
              ) : null} */}
              <div className="bg-stone-400 py-3">
                <p>* - обязательные поля</p>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className={`w-full  bg-stone-600  rounded-2xl border border-cyan text-white h-12 font-semibold text-xl hover:scale-105 transition-all duration-500 hover:bg-cyan ${
                  isSubmitting ? "bg-gray-500" : "bg-darkcyan"
                }`}
              >
                {!isSubmitting ? "Отправить заявку" : "Sending..."}
              </button>
              <MoonLoader
                className="absolute -top-10 left-8 transform -translate-x-1/2 -translate-y-1/2"
                loading={isSubmitting}
                color="white"
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </Form>
          );
        }}
      </Formik>
      <h2 className="text-xl text-white font-light text-center">
        {success ? "Your message has been sent successfully!" : ""}
      </h2>
    </div>
  );
};

export default BookingForm;
