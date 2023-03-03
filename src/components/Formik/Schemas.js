import * as yup from "yup";

const dspRules = new RegExp(
  "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
);

// export const dspFormSchema = yup.array().of(
//   yup.object().shape({
//     url: yup.string().required("Please enter a name"),
//   })
// );

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
