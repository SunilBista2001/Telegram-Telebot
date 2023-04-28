import React from "react";
import { useForm } from "react-hook-form";

function Settings() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full">
      <h2 className="text-2xl font-medium py-3">App Settings</h2>
      <form
        className="flex flex-wrap items-center gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="form-group w-[40%] mt-3">
          <label for="title">Title1</label>
          <input
            type="text"
            className="form-control "
            placeholder="Enter the title 1"
            {...register("title1")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Title2</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the title 2"
            {...register("Title2")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Title3</label>
          <input
            type="text"
            className="form-control mt-0"
            placeholder="Enter the title 3"
            {...register("title3")}
          />
        </div>
        <div class="form-group w-[40%]">
          <label for="title">Title4</label>
          <input
            type="text"
            placeholder="Enter the title 4"
            className="form-control mt-0"
            {...register("title4")}
          />
        </div>
      </form>
    </div>
  );
}

export default Settings;
