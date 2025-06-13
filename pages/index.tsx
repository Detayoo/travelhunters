import { useState } from "react";
import Router from "next/router";
import Image from "next/image";
import { Form, Formik } from "formik";
import { format } from "date-fns";

import { DateComponent } from "@/components";

const Home = () => {
  const [showDate, setShowDate] = useState(false);
  const initialValues = {
    location: "",
    startDate: "",
    endDate: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    const { location, startDate, endDate } = values;
    let query: Partial<typeof initialValues> = {};
    if (location) query.location = location;
    if (startDate) query.startDate = format(startDate, "dd-MM-yyyy");
    if (endDate) query.endDate = format(endDate, "dd-MM-yyyy");

    Router.push({
      pathname: "hotels",
      query,
    });
  };

  return (
    <div className="flex gap-x-4">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, errors, touched, isValid, dirty, setFieldValue }) => {
          console.log(values);
          return (
            <Form className="flex flex-col gap-y-7 mt-[50px] w-[450px] mx-auto xs:w-full 2xs:px-5">
              <div className="flex flex-col gap-y-7 bg-white rounded-[10px] outline-1 outline-gray-200 p-4 ">
                <div className="flex items-center gap-x-2 border border-gray-200 rounded-[10px] px-3">
                  <Image
                    src="/icons/location.jpg"
                    alt=""
                    height={30}
                    width={30}
                  />
                  <div className="py-2 flex flex-col">
                    <p className="text-[12px]">Where are you going?</p>
                    <input
                      value={values?.location}
                      type="text"
                      className="outline-none placeholder:text-[14px]"
                      placeholder="Name or destination"
                      onChange={(e) =>
                        setFieldValue("location", e.target.value)
                      }
                    />
                  </div>{" "}
                </div>
                <div className="flex items-center gap-x-2 border border-gray-200 rounded-[10px] px-3">
                  <Image
                    src="/icons/location.jpg"
                    alt=""
                    height={30}
                    width={30}
                  />
                  <div
                    onClick={() => setShowDate(!showDate)}
                    className="py-2 flex flex-col"
                  >
                    <p className="text-[12px]">Dates</p>
                    <p className="text-[12px] text-gray-500">
                      {format(values?.startDate || new Date(), "dd/MM/yyyy")} -{" "}
                      {format(values?.endDate || new Date(), "dd/MM/yyyy")}
                    </p>
                  </div>{" "}
                </div>
                {showDate && (
                  <div className="flex flex-col gap-y-2 -mt-2">
                    <DateComponent
                      selected={
                        values?.startDate ? new Date(values?.startDate) : null
                      }
                      name="startDate"
                      error={!!(errors.startDate && touched?.startDate)}
                      placeholder="Start date"
                      format="dd/MM/yyyy"
                      onChange={(date: Date[] | null) =>
                        setFieldValue("startDate", date)
                      }
                      maxDate={
                        values?.endDate ? new Date(values?.endDate) : new Date()
                      }
                      label=""
                      className="w-full"
                      // handleBlur={() => setFieldTouched("startDate", true)}
                    />
                    <DateComponent
                      selected={
                        values?.endDate ? new Date(values?.endDate) : null
                      }
                      name="endDate"
                      error={!!(errors.endDate && touched?.endDate)}
                      placeholder="End date"
                      format="dd/MM/yyyy"
                      onChange={(date: Date[] | null) =>
                        setFieldValue("endDate", date)
                      }
                      maxDate={new Date()}
                      minDate={
                        values?.startDate
                          ? new Date(values?.startDate)
                          : undefined
                      }
                      label=""
                      className="w-full"
                      // handleBlur={() => setFieldTouched("endDate", true)}
                    />
                  </div>
                )}
                <button
                  className="bg-green-500 h-11 w-full flex items-center justify-center rounded-[10px] text-[18px] font-[600] gap-x-2 text-white cursor-pointer"
                  type="submit"
                >
                  <Image
                    src="/search.png"
                    alt=""
                    height={20}
                    width={20}
                    className=""
                  />
                  Search
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Home;
