import { FormFields, formSchema } from "@/lib/utlls/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const UserForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(formSchema) });

  const [selectedQueryType, setSelectedQueryType] = useState<string | null>(
    null
  );
  const [termsChecked, setTermsChecked] = useState<boolean>(false);

  const handleRadioChange = (value: string) => {
    setSelectedQueryType(value);
    setValue("queryType", value, { shouldValidate: true });
  };

  const handleCheckboxChange = () => {
    setTermsChecked(!termsChecked);
    setValue("terms", !termsChecked, { shouldValidate: true });
  };

  const handleSend = async (data: FormFields) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);

    toast("Message Sent!", {
      position: "top-center",
      description: "Thanks for completing the form. We'll be in touch soon!",
      style: { padding: "1.5rem", borderRadius: "10px" },
    });

    // reset();
  };

  return (
    <form
      className="flex flex-col space-y-6 font-karla text-label"
      autoComplete="off"
      onSubmit={handleSubmit(handleSend)}
    >
      <div className="flex lg:flex-row sm:flex-col md:flex-row lg:space-x-5 md:space-x-5 sm:space-y-6 lg:space-y-0 md:space-y-0">
        <div className="flex flex-col lg:1/2 sm:w-full space-y-2">
          <span className="flex flex-row space-x-2">
            <label htmlFor="first-name">First Name </label>
            <p className="text-secondary">*</p>
          </span>

          <input
            type="text"
            className={`w-full py-3 px-6 border border-tertiary rounded-lg hover:border-secondary focus:outline-tertiary ${
              errors.firstName ? "border-error" : ""
            }`}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-error h-4">{errors.firstName.message}</p>
          )}
        </div>

        <div className="flex flex-col lg:1/2 sm:w-full space-y-2">
          <span className="flex flex-row space-x-2">
            <label htmlFor="last-name">Last Name </label>
            <p className="text-secondary">*</p>
          </span>

          <input
            type="text"
            className={`w-full py-3 px-6 border border-tertiary rounded-lg hover:border-secondary focus:outline-tertiary ${
              errors.lastName ? "border-error" : ""
            }`}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-error h-4">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <span className="flex flex-row space-x-2">
          <label htmlFor="email-address">Email Address</label>
          <p className="text-secondary">*</p>
        </span>
        <input
          type="text"
          className={`w-full py-3 px-6 border border-tertiary rounded-lg hover:border-secondary focus:outline-tertiary ${
            errors.email ? "border-error" : ""
          }`}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-error h-4">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <span className="flex flex-row space-x-2">
          <label htmlFor="query-type">Query Type</label>
          <p className="text-secondary">*</p>
        </span>
        <div className="flex lg:flex-row sm:flex-col md:flex-row lg:space-x-5 md:space-x-5 sm:space-y-4 lg:space-y-0 md:space-y-0">
          <span
            className={`flex flex-row space-x-2 items-center border border-tertiary hover:border-secondary py-3 px-6 rounded-lg lg:w-1/2 sm:w-full ${
              selectedQueryType === "generalEnquiry" ? "bg-primary" : ""
            }`}
            onClick={() => handleRadioChange("generalEnquiry")}
          >
            <input
              type="radio"
              value="generalEnquiry"
              className="border border-tertiary h-4 w-4 accent-secondary"
              {...register("queryType")}
              checked={selectedQueryType === "generalEnquiry"}
              onChange={() => handleRadioChange("generalEnquiry")}
            />
            <h1>General Enquiry</h1>
          </span>

          <span
            className={`flex flex-row space-x-2 items-center border border-tertiary hover:border-secondary py-3 px-6 rounded-lg lg:w-1/2 sm:w-full ${
              selectedQueryType === "supportRequest" ? "bg-primary" : ""
            }`}
            onClick={() => handleRadioChange("supportRequest")}
          >
            <input
              type="radio"
              value="supportRequest"
              className="border border-tertiary h-4 w-4 accent-secondary"
              {...register("queryType")}
              checked={selectedQueryType === "supportRequest"}
              onChange={() => handleRadioChange("supportRequest")}
            />
            <h1>Support Request</h1>
          </span>
        </div>
        {errors.queryType && (
          <p className="text-error h-4">{errors.queryType.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <span className="flex flex-row space-x-2">
          <label htmlFor="message">Message</label>
          <p className="text-secondary">*</p>
        </span>
        <textarea
          rows={4}
          className={`w-full py-3 px-6 border border-tertiary rounded-lg hover:border-secondary focus:outline-tertiary ${
            errors.message ? "border-error" : ""
          }`}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-error h-4">{errors.message.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex flex-row space-x-4 items-center">
          <input
            type="checkbox"
            className="rounded-2xl accent-secondary w-5 h-5 outline-secondary border border-teriary"
            {...register("terms")}
            checked={termsChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className="flex flex-row space-x-2"
            onClick={handleCheckboxChange}
          >
            <h1 className="text-label text-grey">
              I consent to being contacted by the team
            </h1>
            <p className="text-secondary">*</p>
          </span>
        </div>
        {errors.terms && (
          <p className="text-error h-4">{errors.terms.message}</p>
        )}
      </div>

      <div className="sm:py-3">
        <button
          type="submit"
          className="bg-secondary hover:bg-complementary w-full lg:p-3 sm:p-5 rounded-lg text-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
