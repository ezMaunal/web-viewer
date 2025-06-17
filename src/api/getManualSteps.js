import axios from "axios";

const getManualSteps = async (manualId) => {
  const serverURL = import.meta.env.VITE_BACKEND_SERVER_URL;

  const response = await axios.get(serverURL + "/api/manual/" + manualId);
  return response.data;
};

export default getManualSteps;
