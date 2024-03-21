import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, updateProfile } from "../../services/index/users";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";
import { userActions } from "../../store/reducers/userReducers";
import { toast } from "react-hot-toast";
import { useMemo } from "react";
import { Helmet } from "react-helmet-async";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const userState = useSelector((state) => state.user);

  const { data: profileData, isLoading: profileIsLoading } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
  });

  const { mutate, isLoading: updateProfileIsLoading } = useMutation({
    mutationFn: ({ firstname, lastname, username, email, password }) => {
      return updateProfile({
        token: userState.userInfo.token,
        userData: { firstname, lastname, username, email, password },
        userId: userState.userInfo._id
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      queryClient.invalidateQueries(["profile"]);
      toast.success("Profile is updated");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
    values: useMemo(() => {
      return {
        firstname: profileIsLoading ? "" : profileData.firstname,
        lastname: profileIsLoading ? "" : profileData.lastname,
        username: profileIsLoading ? "" : profileData.username,
        email: profileIsLoading ? "" : profileData.email,
      };
    }, [profileData?.email, profileData?.firstname, profileData?.lastname, profileData?.username, profileIsLoading]),
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { firstname, lastname, username, email, password } = data;
    mutate({ firstname, lastname, username, email, password });
  };

  return (
    <>
    <Helmet>
                <title>Profile Page</title>
                <meta 
                    name="description"
                    content="Jump into your profile."
                />
                <link rel="canonical" href="https://blog-44.vercel.app/profile" />
            </Helmet>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <ProfilePicture avatar={profileData?.avatar} />
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5a7184] font-semibold block"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                {...register("firstname", {
                  minLength: {
                    value: 1,
                    message: "Name length must be at least 1 character",
                  },
                  required: {
                    value: true,
                    message: "First Name is required",
                  },
                })}
                placeholder="Enter first name"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.firstname ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.firstname?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstname?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5a7184] font-semibold block"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                {...register("lastname", {
                  minLength: {
                    value: 1,
                    message: "Name length must be at least 1 character",
                  },
                  required: {
                    value: true,
                    message: "Last Name is required",
                  },
                })}
                placeholder="Enter last name"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.lastname ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.lastname?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastname?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5a7184] font-semibold block"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                {...register("username", {
                  minLength: {
                    value: 1,
                    message: "User Name length must be at least 1 character",
                  },
                  required: {
                    value: true,
                    message: "User Name is required",
                  },
                })}
                placeholder="Enter user name"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.username ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.username?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.username?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                disabled
                {...register("email", {
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid email",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                placeholder="Enter email"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.email ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.email?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
                New Password (optional)
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                placeholder="Enter new password"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.password ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.password?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={!isValid || profileIsLoading || updateProfileIsLoading}
              className="bg-[#ce0000] text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Update
            </button>
          </form>
        </div>
      </section>
      </>
  );
};

export default ProfilePage;
