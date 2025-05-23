import React, { useEffect, useState } from "react";
import TextField from "../TextField";
import { ManageGroupSchema } from "../../schemas";
import Request from "../../lib/requests";
import { useFormik } from "formik";
import { Axios } from "../../config";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const CreateGroup = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    groupName: "",
    groupDescription: "",
    memberEmails: "",
  });
  useEffect(() => {
    if (groupId) {
      const fetchGroupDetails = async () => {
        try {
          const res = await Axios.get(Request.updateGroup(groupId));
          const group = res.data;
          const emails = group.members.map((member) => member.email).join(", ");
          setInitialValues({
            groupName: group.groupName,
            groupDescription: group.groupDescription,
            memberEmails: emails,
          });
        } catch (error) {
          toast(error.message || "Failed to fetch group details");
          console.log(error);
        }
      };
      fetchGroupDetails();
    }
  }, [groupId]);

  const onSubmit = async (payload, actions) => {
    try {
      const emailsArray = payload.memberEmails
        .split(",")
        .map((email) => email.trim());
      const modifiedPayload = {
        ...payload,
        memberEmails: emailsArray,
      };
      let res;
      if (groupId) {
        res = await Axios.put(Request.updateGroup(groupId), modifiedPayload);
        if (res.data.message === "Group updated successfully") {
          toast.success("Group updated successfully");
          actions.resetForm({
            values: {
              groupName: "",
              groupDescription: "",
              memberEmails: "",
            },
          });
          navigate("/instructor-dashboard/groups");
        }
      } else {
        res = await Axios.post(Request.createGroup, modifiedPayload);
        if (res.data.message === "Group created successfully") {
          toast.success("Group created successfully");
        }
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    handleChange,
    values,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: ManageGroupSchema,
    onSubmit,
  });
  const getError = (key) => {
    return touched[key] && errors[key];
  };
  return (
    <>
      <section className="pl-[46px] py-[70px] pr-[70px]">
        <h1 className="text-[32px] font-semibold text-darkPrimary">
          Create a Group
        </h1>
        <div className="flex justify-between items-center mb-5">
          <p className="text-xl text-primary">Basic Information</p>
          <Link
            to="/instructor-dashboard/groups/manage-groups"
            className="font-medium font-rubik text-white bg-primary px-[43px] py-3 rounded-lg"
          >
            Manage Groups
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Group Name"
            name="groupName"
            type="text"
            placeholder="Enter Test Name"
            value={values.groupName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getError("groupName")}
          />
          <TextField
            label="Group Description"
            name="groupDescription"
            type="text"
            placeholder="Add Description"
            value={values.groupDescription}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getError("groupDescription")}
          />
          <p className="text-2xl font-medium text-primary font-rubik pb-[47px]">
            Add members
          </p>
          <div>
            <textarea
              name="memberEmails"
              placeholder="adebayo@gmail.com,dave@gmail.com,yimika@yahoo.com"
              className={`w-full px-5 py-3 rounded-[8px] h-[80px] outline-none ${
                getError("memberEmails") ? "border border-red-500" : ""
              }`}
              value={values.memberEmails}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {getError("memberEmails") && (
              <p className="text-red-500 text-sm font-medium">
                {getError("memberEmails")}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="disabled:opacity-75 disabled:cursor-not-allowed font-rubik font-medium text-2xl text-white mt-[90px] bg-primary py-3 px-[43px] rounded-[8px]"
          >
            {groupId ? "Save" : "Create Group"}
          </button>
        </form>
      </section>
      <Outlet />
    </>
  );
};

export default CreateGroup;
