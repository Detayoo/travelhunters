import Router from "next/router";
import { Form, Formik } from "formik";
import { format } from "date-fns";

import { DateComponent, TextField } from "@/components";

const Home = () => {
  const initialValues = {
    location: "",
    startDate: "",
    endDate: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    const { location, startDate, endDate } = values;
    let query: Partial<typeof initialValues> = {};
    if (location) query.location = location;
    // query.startDate = "01-05-2025";
    // query.endDate = "12-06-2025";
    if (startDate) query.startDate = format(startDate, "dd-MM-yyyy");
    if (values?.endDate) query.endDate = format(endDate, "dd-MM-yyyy");

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
            <Form className="flex flex-col gap-y-7 mt-[50px] w-[400px] xs:w-full 2xs:px-5">
              <TextField
                name="location"
                value={values?.location}
                error={false}
                htmlFor="location"
                placeholder=""
                label="Location"
              />

              <div className="flex items-end justify-between">
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
                  label="Select Date Range"
                  className="w-[47%]"
                  // handleBlur={() => setFieldTouched("startDate", true)}
                />
                <DateComponent
                  selected={values?.endDate ? new Date(values?.endDate) : null}
                  name="endDate"
                  error={!!(errors.endDate && touched?.endDate)}
                  placeholder="End date"
                  format="dd/MM/yyyy"
                  onChange={(date: Date[] | null) =>
                    setFieldValue("endDate", date)
                  }
                  maxDate={new Date()}
                  minDate={
                    values?.startDate ? new Date(values?.startDate) : undefined
                  }
                  label=""
                  className="w-[47%]"
                  // handleBlur={() => setFieldTouched("endDate", true)}
                />
              </div>

              <button type="submit">Search</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Home;
