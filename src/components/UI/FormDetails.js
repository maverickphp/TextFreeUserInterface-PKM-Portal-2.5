import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import "../../styles/FormDetails.css";

function Form() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h3
        className="mb-3"
        style={{
          background: "red",
          width: "350px",
          padding: "20px",
          borderRadius: "500px",
          justifyContent: "center",
          textAlign: "center",
          margin: "auto",
          color: "white",
        }}
      >
        &darr; &nbsp; تفصیلات یہاں درج کریں
      </h3>
      {/* <form action="/action_page.php" className="container"> */}
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-6">
            {/* <label htmlFor="pnumber">Phone number</label>
          <input
            type="tel"
            className="form-control form-control-lg my-2 flex-row"
            id="pnumber"
            name="phonenumber"
            placeholder="Your Phone number"
            style={{ background: "red" }}
            {...register("pnumber", { required: true })}
          />
          {errors?.pnumber?.type === "required" && (
            <p style={{ color: "red" }}>This field is required</p>
          )} */}

            <input
              type="tel"
              id="cname"
              className="form-control form-control-lg my-2 flex-row"
              name="contact"
              style={{
                width: "100%",
                textAlign: "center",
                justifyContent: "center",
                fontSize: "24px",
                paddingBottom: "15px",
              }}
              placeholder="آپ کا موبائل نمبر"
              {...register("contact", { required: true })}
            />
            {errors?.contact?.type === "required" && (
              <p style={{ color: "red", fontSize: "18px" }}>
                اس کو پر کرنا ضروری ہے
              </p>
            )}

            {/* <label for="" className="form-label">
            Phone Number
          </label>
          <input
            className="form-control form-control-lg my-2 flex-row"
            type="text"
            placeholder=".form-control-lg"
            aria-label=".form-control-lg example"
            style={{ background: "red" }}
          /> */}
          </div>
          <div className="col-6">
            {/* <label for="" className="form-label">
            CNIC Number
          </label>
          <input
            className="form-control form-control-lg my-2 flex-row"
            type="text"
            placeholder=".form-control-lg"
            aria-label=".form-control-lg example"
            style={{ background: "green" }}
          /> */}

            <input
              type="tel"
              id="cnicname"
              className="form-control form-control-lg my-2 flex-row"
              name="cnic"
              style={{
                width: "100%",
                textAlign: "center",
                justifyContent: "center",
                fontSize: "24px",
                paddingBottom: "15px",
              }}
              placeholder="آپ کا شناختی کارڈ"
              {...register("cnic", { required: true })}
            />
            {errors?.cnic?.type === "required" && (
              <p style={{ color: "red", fontSize: "18px" }}>
                اس کو پر کرنا ضروری ہے
              </p>
            )}
          </div>
        </div>
        {/* <input
          className="form-control form-control-lg my-2"
          id="formFileLg"
          type="file"
          style={{ background: "orange" }}
          multiple
        /> */}
        <div className="input-group mb-3">
          <label
            className="input-group-text"
            for="inputGroupFile01"
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "24px",
              background: "grey",
              color: "white",
              cursor: "pointer",
              padding: "15px 0px",
            }}
          >
            موبائل سے دستاویزات کی تصاویر منتخب کریں
          </label>
          <input
            type="file"
            style={{ display: "none" }}
            className="form-control"
            id="inputGroupFile01"
            multiple
          />
        </div>
        {/* <button type="submit" onClick={onSubmit} className="btn btn-primary mb-3">
        Submit
      </button> */}
        <input
          id="breathing-button"
          type="submit"
          value="تفصیلات بھیجیں"
          className="mb-3"
        />
      </form>
    </div>
  );
}

export default Form;
