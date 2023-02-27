import * as yup from "yup";

const dspRules = new RegExp(
  "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
);

export const dspSchema = yup.object().shape({
  appleUrl: yup.string().matches(dspRules, {
    message: "Please enter a valid url",
  }),
  spotifyUrl: yup.string().matches(dspRules, {
    message: "Please enter a valid url",
  }),
  soundcloudUrl: yup.string().matches(dspRules, {
    message: "Please enter a valid url",
  }),
  youtubeUrl: yup.string().matches(dspRules, {
    message: "Please enter a valid url",
  }),
  pandoraUrl: yup.string().matches(dspRules, {
    message: "Please enter a valid url",
  }),
  iheartradioUrl: yup.string().matches(dspRules, {
    message: "Please enter a valid url",
  }),
  tidalUrl: yup.string().matches(dspRules, {
    message: "Please enter a valid url",
  }),
});

export const releaseFormSchema = yup.object().shape({
  artist: yup.string().required("Required"),
  releaseName: yup
    .string()
    .required("Please enter a name")
    .min(1, "You must enter an artist name"),
  releaseDate: yup.string().required("Please choose a release date"),
});
