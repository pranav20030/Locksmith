import axios from "../axios";
import Axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const uploadImage = async (file) => {
  var formData = new FormData();
  formData.append("media", file);
  try {
    const { data } = await axios.post("/auth/uploadImage", formData);

    return data;
  } catch (error) {}
};

export const extractDate = (e) => {
  if (e) {
    let date = new Date(e).toLocaleDateString();
    return date;
  } else {
    return "";
  }
};

export async function handleImageUpload(file) {
  // const [progress, setProgress] = useState(0);
  const formData = new FormData();
  formData.append("media", file);

  const config = {
    baseURL: "https://qootuma.com",
    headers: {
      "Content-Type": "multipart/form-data",
      accessToken: localStorage.getItem("accessToken"),
    },
    onUploadProgress: (progressEvent) => {
      const progress = (progressEvent.loaded / progressEvent.total) * 50;
      // setProgress(progress);
      console.log(progressEvent.loaded);
      console.log(progress);
    },
    onDownloadProgress: (progressEvent) => {
      const progress = 50 + (progressEvent.loaded / progressEvent.total) * 50;
      console.log(progress);
      // setProgress(progress);
    },
  };
  try {
    const { data } = await Axios.post("/user/uploadImage", formData, config);
    console.log(data);

    return data.path;
  } catch (err) {
    return err;
  }
}

export const subadminAccessChange = async (navigate) => {
  const subadminData = JSON.parse(localStorage.getItem("userData")) || JSON.parse(sessionStorage.getItem("userData"));

  try {
    const { data } = await axios.post(`/accessChangeDetails?subAdminId=${subadminData?._id}`);

    localStorage.setItem("userData", JSON.stringify(data?.data));

    // Check if userType is subAdmin
    if (data?.data?.userType === "subAdmin") {
      const modulePermission = data?.data?.modulePermission;

      if (modulePermission && modulePermission.length > 0) {
        // Redirect to the first modulePermission path
        const firstPath = modulePermission[0];
        navigate(`/adminPanel/${firstPath}`);
      } else {
        navigate("/adminPanel/dashboard");
      }
    } else {
      navigate("/adminPanel/dashboard");
    }
  } catch (error) {
    console.log("ErrorSubadminAccessChange", error.response)
    if (error.response.status == 901) {
      toast.error(`${error.response.data?.message}`, {
        position: "top-right",
      });
    }
  }
};