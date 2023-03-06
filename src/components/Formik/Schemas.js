import * as yup from "yup";

export const releaseFormSchema = yup.object().shape({
  releaseName: yup
    .string()
    .required("Please enter a name")
    .min(1, "You must enter a release name"),
  releaseDate: yup.string().required("Please choose a release date"),
});

export const editReleaseFormSchema = yup.object().shape({
  releaseName: yup
    .string()
    .required("Please enter a name")
    .min(1, "You must enter a release name"),
  releaseDate: yup.string(),
});
