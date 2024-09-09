import { createThirdwebClient } from "thirdweb";

const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID;
if (!clientId) {
  throw new Error(
    "VITE_THIRDWEB_CLIENT_ID is not defined in the environment variables"
  );
}

export const client = createThirdwebClient({
  clientId: clientId,
});
